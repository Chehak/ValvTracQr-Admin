import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
})
export class CurrenciesComponent {
  form: FormGroup;
  activeButtonIndex: number = -1;
  currencyResponse: any[] = [];
  lang: any;
  constructor(
    private fb: FormBuilder,
    private httpService: HttpServiceService,
    private translateService: TranslateService
  ) {
    this.lang = localStorage.getItem('lang');
    this.translateService.use(this.lang);
    this.getCurrencies();
    this.form = this.fb.group({
      currencies: this.fb.array([
        this.fb.group({
          id: [null, Validators.required],
          name: ['', Validators.required],
          default: [false, Validators.required],
        }),
      ]),
    });
  }

  // Create a getter for the currencies FormArray
  get curr() {
    return this.form.controls['currencies'] as FormArray;
  }

  // Add a new currency control to the FormArray
  addCurrency(curr?: string): void {
    console.log(curr);

    const currForm = this.fb.group({
      id: [null, Validators.required],
      name: [curr, Validators.required],
      default: [false, Validators.required],
    });
    this.curr.push(currForm);
  }

  removeCurrency(index: number): void {
    const getId = this.currencyResponse[index];
    console.log(getId);
    this.httpService.deleteCurrency(getId?._id).subscribe(
      (res: any) => {
        console.log(res, 'del res');
        this.httpService.openSnackBar(res, 'Close');
        this.getCurrencies();
      },
      (error) => {
        console.log(error);
        this.httpService.openSnackBar(error.message, 'close');
      }
    );
    // this.curr.removeAt(index);
    console.log('FormArray length:', this.curr.length);
  }

  getCurrencies() {
    this.httpService.getCurrencies().subscribe((res: any) => {
      this.curr.clear();
      this.currencyResponse = res;

      const featEdit = res;
      for (let i = 0; i < featEdit.length; i++) {
        const val = featEdit[i];
        const currForm = this.fb.group({
          id: [val?._id, Validators.required],
          name: [val.name, Validators.required],
          default: [val.default, Validators.required],
        });
        this.curr.push(currForm);
      }
    });
  }

  submit() {
    const formArray = this.form.get('currencies') as FormArray;
    const arrayOfObjects = formArray.controls.map((control) => {
      const currencyGroup = control as FormGroup;
      return currencyGroup.value;
    });

    this.httpService.addCurrency(arrayOfObjects).subscribe(
      (res: any) => {
        console.log(res, 'del res');
        this.httpService.openSnackBar(res, 'Close');
        this.getCurrencies();
      },
      (error) => {
        console.log(error);
        this.httpService.openSnackBar(error.message, 'close');
      }
    );
  }

  // Update the toggleDefault function to manage the active button
  action(index: number) {
    for (let i = 0; i < this.curr.value.length; i++) {
      if (i === index) {
        this.curr.at(i)?.get('default')?.setValue(true);
      } else {
        this.curr.at(i)?.get('default')?.setValue(false);
      }
    }
  }
}
