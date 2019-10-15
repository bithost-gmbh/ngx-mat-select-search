import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

import { MatSelectSearchVersion } from './mat-select-search/ngx-mat-select-search.module';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  version = VERSION;

  matSelectSearchVersion = MatSelectSearchVersion;

}
