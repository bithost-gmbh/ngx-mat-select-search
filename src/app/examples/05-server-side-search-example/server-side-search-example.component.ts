import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import {debounceTime, delay, tap, filter, map, takeUntil} from 'rxjs/operators';

import { Bank, BANKS } from '../demo-data';
import { MatSelectSearchData } from '../../mat-select-search/mat-select-search-data';
import { MatSelect } from '@angular/material/select';
import { MatSelectSearchServerData } from '../../mat-select-search/mat-select-search-server-data';


@Component({
  selector: 'app-server-side-search-example',
  templateUrl: './server-side-search-example.component.html',
  styleUrls: ['./server-side-search-example.component.scss']
})
export class ServerSideSearchExampleComponent implements OnInit, OnDestroy {

  protected banks = new MatSelectSearchServerData<Bank>();

  @ViewChild('select', { static: true }) select: MatSelect;

  ngOnInit() {
    this.banks.initSearch(this.select, BANKS,
      (search: string) => of(BANKS.filter(bank => this.banks.transformWith(bank.name).indexOf(search) > -1)).pipe(delay(1000)).toPromise(),
      (reason) => window.alert(reason),
      (a: Bank, b: Bank) => a && b && a.id === b.id);
  }

  ngOnDestroy() {
    this.banks.destroy();
  }

}
