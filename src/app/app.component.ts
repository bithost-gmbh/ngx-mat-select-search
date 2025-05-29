import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';

import { MatSelectSearchVersion } from './mat-select-search/ngx-mat-select-search.module';
import { SingleSelectionExampleComponent } from './examples/01-single-selection-example/single-selection-example.component';
import { MultipleSelectionExampleComponent } from './examples/02-multiple-selection-example/multiple-selection-example.component';
import { CustomClearIconExampleComponent } from './examples/03-custom-clear-icon-example/custom-clear-icon-example.component';
import { OptionGroupsExampleComponent } from './examples/04-option-groups-example/option-groups-example.component';
import { ServerSideSearchExampleComponent } from './examples/05-server-side-search-example/server-side-search-example.component';
import { MultipleSelectionSelectAllExampleComponent } from './examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component';
import { TooltipSelectAllExampleComponent } from './examples/07-tooltip-select-all-example/tooltip-select-all-example.component';
import { CustomNoEntriesFoundExampleComponent } from './examples/09-custom-no-entries-found-example/custom-no-entries-found-example.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [
    MatToolbar,
    MatSlideToggleModule,

    SingleSelectionExampleComponent,
    CustomClearIconExampleComponent,
    MultipleSelectionExampleComponent,
    CustomNoEntriesFoundExampleComponent,
    OptionGroupsExampleComponent,
    ServerSideSearchExampleComponent,
    MultipleSelectionSelectAllExampleComponent,
    TooltipSelectAllExampleComponent
  ]
})
export class AppComponent {

  version = VERSION;

  matSelectSearchVersion = MatSelectSearchVersion;

  private rightToLeft = false;

  toggleRightToLeft() {
    this.rightToLeft = !this.rightToLeft;
    document.body.dir = this.rightToLeft ? 'rtl' : '';
  }

}
