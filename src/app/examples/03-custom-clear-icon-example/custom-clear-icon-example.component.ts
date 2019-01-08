import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { SingleSelectionExampleComponent } from '../01-single-selection-example/single-selection-example.component';


@Component({
  selector: 'app-custom-clear-icon-example',
  templateUrl: './custom-clear-icon-example.component.html',
  styleUrls: ['./custom-clear-icon-example.component.scss']
})
export class CustomClearIconExampleComponent extends SingleSelectionExampleComponent implements OnInit, AfterViewInit, OnDestroy {

  // reuse all code of SingleSelectionComponent

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
