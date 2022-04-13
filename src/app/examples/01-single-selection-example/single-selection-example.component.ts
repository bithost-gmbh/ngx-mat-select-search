import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { Bank, BANKS } from '../demo-data';
import { MatSelectSearchData } from '../../mat-select-search/mat-select-search-data';


@Component({
  selector: 'app-single-selection-example',
  templateUrl: './single-selection-example.component.html',
  styleUrls: ['./single-selection-example.component.scss']
})
export class SingleSelectionExampleComponent implements OnInit, AfterViewInit, OnDestroy {

  protected banks = new MatSelectSearchData<Bank>();

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  constructor() { }

  ngOnInit() {
    this.banks.init(this.singleSelect, BANKS, (bank: Bank) => bank.name, (a: Bank, b: Bank) => a && b && a.id === b.id);

    // set initial selection
    this.banks.selectedCtrl.setValue(BANKS[10]);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
   this.banks.destroy();
  }

}
