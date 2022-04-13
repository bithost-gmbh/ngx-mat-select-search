import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Bank } from '../demo-data';
import { MatSelectSearchInfiniteScrollData } from '../../mat-select-search/mat-select-search-infinite-scroll-data';

/**
 * Based upon: https://stackblitz.com/edit/mat-select-search-with-infinity-scroll
 */
@Component({
  selector: 'app-infinite-scroll-example',
  templateUrl: './infinite-scroll-example.component.html',
  styleUrls: ['./infinite-scroll-example.component.scss']
})
export class InfiniteScrollExampleComponent implements OnInit, OnDestroy {

  data = new MatSelectSearchInfiniteScrollData<Bank>();

  @ViewChild('matSelectInfiniteScroll', { static: true } )
  infiniteScrollSelect: MatSelect;

  constructor() { }

  ngOnInit() {
    this.data.init(this.infiniteScrollSelect, Array.from({ length: 1000 }).map((_, i) => ({
      id: String(i),
      name: `Bank ${i}`
    })), (bank: Bank) => bank.name, (a: Bank, b: Bank) => a && b && a.id === b.id);
  }

  ngOnDestroy() {
    this.data.destroy();
  }


}
