import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
})
export class UnitsComponent {
  form: FormGroup;
  lang: any;
  activeButtonIndex: number = -1;
  unitResponse: any[] = [];
  constructor(
    private fb: FormBuilder,
    private httpService: HttpServiceService,
    private translateService: TranslateService
  ) {
    this.getUnits();
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
    this.form = this.fb.group({
      units: this.fb.array([
        this.fb.group({
          id: [null, Validators.required],
          name: ['', Validators.required],
          default: [false, Validators.required],
        }),
      ]),
    });
  }

  // Create a getter for the currencies FormArray
  get unit() {
    return this.form.controls['units'] as FormArray;
  }

  // Add a new currency control to the FormArray
  addUnit(): void {
    const unitForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      default: [false, Validators.required],
    });
    this.unit.push(unitForm);
  }

  getUnits() {
    this.httpService.getUnits().subscribe((res: any) => {
      this.unitResponse = res;
      this.unit.clear();
      const featEdit = res;
      for (let i = 0; i < featEdit.length; i++) {
        const val = featEdit[i];
        const currForm = this.fb.group({
          id: [val?._id, Validators.required],
          name: [val.name, Validators.required],
          default: [val.default, Validators.required],
        });
        this.unit.push(currForm);
      }
    });
  }

  // Remove a currency control from the FormArray
  removeUnit(index: number): void {
    const getId = this.unitResponse[index];
    console.log(getId);
    this.httpService.deleteUnit(getId?._id).subscribe(
      (res: any) => {
        console.log(res, 'del res');
        this.httpService.openSnackBar(res, 'Close');
        this.getUnits();
      },
      (error) => {
        console.log(error);
        this.httpService.openSnackBar(error.message, 'close');
      }
    );
  }

  submit() {
    const formArray = this.form.get('units') as FormArray;
    const arrayOfObjects = formArray.controls.map((control) => {
      const currencyGroup = control as FormGroup;
      return currencyGroup.value;
    });

    this.httpService.addUnit(arrayOfObjects).subscribe(
      (res: any) => {
        console.log(res, 'del res');
        this.httpService.openSnackBar(res, 'Close');
        this.getUnits();
      },
      (error) => {
        console.log(error);
        this.httpService.openSnackBar(error.message, 'close');
      }
    );
  }

  action(index: number) {
    for (let i = 0; i < this.unit.value.length; i++) {
      if (i === index) {
        this.unit.at(i)?.get('default')?.setValue(true);
      } else {
        this.unit.at(i)?.get('default')?.setValue(false);
      }
    }
  }
}
