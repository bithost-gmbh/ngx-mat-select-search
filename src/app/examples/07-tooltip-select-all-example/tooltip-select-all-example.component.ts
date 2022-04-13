import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
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
