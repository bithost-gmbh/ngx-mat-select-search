/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { MatButtonModule, MatInputModule, MatIconModule, MatProgressSpinnerModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { ReactiveFormsModule } from '@angular/forms';

export const MatSelectSearchVersion = '1.7.5';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective
  ],
  exports: [
    MatSelectSearchComponent,
    MatSelectSearchClearDirective
  ]
})
export class NgxMatSelectSearchModule { }
