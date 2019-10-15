import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgxMatSelectSearchModule } from './mat-select-search/ngx-mat-select-search.module';

import { AppComponent } from './app.component';
import { SingleSelectionExampleComponent } from './examples/01-single-selection-example/single-selection-example.component';
import { MultipleSelectionExampleComponent } from './examples/02-multiple-selection-example/multiple-selection-example.component';
import { CustomClearIconExampleComponent } from './examples/03-custom-clear-icon-example/custom-clear-icon-example.component';
import { OptionGroupsExampleComponent } from './examples/04-option-groups-example/option-groups-example.component';
import { ServerSideSearchExampleComponent } from './examples/05-server-side-search-example/server-side-search-example.component';
import { MultipleSelectionSelectAllExampleComponent } from './examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxMatSelectSearchModule
  ],
  declarations: [
    AppComponent,
    SingleSelectionExampleComponent,
    MultipleSelectionExampleComponent,
    CustomClearIconExampleComponent,
    OptionGroupsExampleComponent,
    ServerSideSearchExampleComponent,
    MultipleSelectionSelectAllExampleComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
