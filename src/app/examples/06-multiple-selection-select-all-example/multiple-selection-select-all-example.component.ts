import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { Bank, BANKS } from '../demo-data';
import { MatSelectSearchData } from '../../mat-select-search/mat-select-search-data';

@Component({
  selector: 'app-multiple-selection-select-all-example',
  templateUrl: './multiple-selection-select-all-example.component.html',
  styleUrls: ['./multiple-selection-select-all-example.component.scss']
})
export class MultipleSelectionSelectAllExampleComponent implements OnInit, AfterViewInit, OnDestroy {

  protected banks = new MatSelectSearchData<Bank>();

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  constructor() { }

  ngOnInit() {
    this.banks.init(this.multiSelect, BANKS, (bank: Bank) => bank.name, (a: Bank, b: Bank) => a && b && a.id === b.id);

    this.banks.selectedCtrl.setValue([BANKS[10], BANKS[11], BANKS[12]]);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.banks.destroy();
  }

}
