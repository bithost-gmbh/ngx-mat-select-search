import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {SingleSelectionExampleComponent} from '../01-single-selection-example/single-selection-example.component';

@Component({
  selector: 'app-custom-no-entries-found-example',
  templateUrl: './custom-no-entries-found-example.component.html',
  styleUrls: ['./custom-no-entries-found-example.component.scss']
})
export class CustomNoEntriesFoundExampleComponent extends SingleSelectionExampleComponent implements OnInit, AfterViewInit, OnDestroy {

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
