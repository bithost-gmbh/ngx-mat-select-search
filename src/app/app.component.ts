import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';

import { MatSelectSearchVersion } from './mat-select-search/ngx-mat-select-search.module';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
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
