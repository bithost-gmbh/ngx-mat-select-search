import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

import { Bank, BANKS } from '../demo-data';
import { MatSelectSearchData } from '../../mat-select-search/mat-select-search-data';
import { MultipleSelectionSelectAllExampleComponent } from '../06-multiple-selection-select-all-example/multiple-selection-select-all-example.component';

@Component({
  selector: 'app-tooltip-select-all-example',
  templateUrl: './tooltip-select-all-example.component.html',
  styleUrls: ['./tooltip-select-all-example.component.scss']
})
export class TooltipSelectAllExampleComponent extends MultipleSelectionSelectAllExampleComponent implements OnInit, AfterViewInit, OnDestroy {

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
