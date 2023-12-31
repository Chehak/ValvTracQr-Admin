import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';

export interface PeriodicElement {
  worker: string;
  pauseStart: Date;
  pauseStop: Date;
  pauseTime: string;
  reason: number;
  comment: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    worker: 'Sam',
    pauseStart: new Date('2023-11-02'),
    pauseStop: new Date('2023-11-02'),
    pauseTime: '90:000',
    reason: 3,
    comment: 'Good',
  },

  {
    worker: 'Jack',
    pauseStart: new Date('2023-11-02'),
    pauseStop: new Date('2023-11-02'),
    pauseTime: '90:000',
    reason: 3,
    comment: 'Good',
  },
  {
    worker: 'John',
    pauseStart: new Date('2023-11-02'),
    pauseStop: new Date('2023-11-02'),
    pauseTime: '90:000',
    reason: 3,
    comment: 'Good',
  },
];

@Component({
  selector: 'app-show-pauses',
  templateUrl: './show-pauses.component.html',
  styleUrls: ['./show-pauses.component.css'],
})
export class ShowPausesComponent {
  @ViewChild('table') table!: MatTable<PeriodicElement>;
  displayedColumns: string[] = [
    'worker',
    'pause start',
    'pause stop',
    'pause time',
    'reason',
    'comment',
  ];
  dataSource = ELEMENT_DATA;
  dragDisabled = true;

  filterControl = new FormControl('');
  searchoption: string[] = ['One', 'Two', 'Three'];
  searchfilteredOptions!: Observable<string[]>;

  constructor(
    public dialog: MatDialog,
    public service: HttpServiceService,
    private route: Router
  ) {}

  ngAfterViewInit(): void {
    this.searchfilteredOptions = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._searchfilter(value || ''))
    );
  }

  getPageSizeOptions() {
    return [10, 20, 30, 40];
  }
  redirect() {
    this.route.navigate(['/apps/add-machines-operations']);
  }
  redirectShowPauses() {
    this.route.navigate(['/apps/show-pauses']);
  }

  private _searchfilter(value: string): string[] {
    const searchfilterValue = value.toLowerCase();

    return this.searchoption.filter((searchoption) =>
      searchoption.toLowerCase().includes(searchfilterValue)
    );
  }
}
