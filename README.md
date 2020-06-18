# NgxMatSelectSearch
[https://github.com/bithost-gmbh/ngx-mat-select-search](https://github.com/bithost-gmbh/ngx-mat-select-search)

[![npm version](https://img.shields.io/npm/v/ngx-mat-select-search.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-select-search)
[![npm downloads total](https://img.shields.io/npm/dt/ngx-mat-select-search.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-select-search)
[![npm downloads monthly](https://img.shields.io/npm/dm/ngx-mat-select-search.svg?style=flat-square)](https://www.npmjs.com/package/ngx-mat-select-search)
[![CircleCI](https://circleci.com/gh/bithost-gmbh/ngx-mat-select-search.svg?style=svg)](https://circleci.com/gh/bithost-gmbh/ngx-mat-select-search)
[![Donate](https://img.shields.io/badge/Donate-PayPal-yellow.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NAX558HVGAX8Q)

## What does it do?
Angular component providing an input field for searching / filtering [MatSelect](https://material.angular.io/components/select/overview) options of the [Angular Material](https://material.angular.io) library.

<img src="src/assets/example-new.png" alt="Example" width="293"/>

## Try it
See it in action at [https://stackblitz.com/github/bithost-gmbh/ngx-mat-select-search-example](https://stackblitz.com/github/bithost-gmbh/ngx-mat-select-search-example?file=src%2Fapp%2Fapp.component.html)

**Important Note**: This project is meant as a temporary implementation of [https://github.com/angular/material2/issues/5697](https://github.com/angular/material2/issues/5697).
The goal is to have an implementation in the official Angular Material repository, 
once [https://github.com/angular/material2/pull/7835](https://github.com/angular/material2/pull/7835)
is merged.

## How to use it?
Install `ngx-mat-select-search` in your project:
```
npm install ngx-mat-select-search
```

Import the `NgxMatSelectSearchModule` in your `app.module.ts`:
```typescript
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ],
})
export class AppModule {}
```

Use the `ngx-mat-select-search` component inside a `mat-select` element by placing it inside a `<mat-option>` element:
```html
<mat-form-field>
  <mat-select [formControl]="bankCtrl" placeholder="Bank" #singleSelect>
    <mat-option>
      <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
    </mat-option>
    <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank">
      {{bank.name}}
    </mat-option>
  </mat-select>
</mat-form-field>
```
See the example in [https://github.com/bithost-gmbh/ngx-mat-select-search/blob/master/src/app/app.component.html](https://github.com/bithost-gmbh/ngx-mat-select-search/blob/master/src/app/app.component.html)
and [https://github.com/bithost-gmbh/ngx-mat-select-search/blob/master/src/app/app.component.ts](https://github.com/bithost-gmbh/ngx-mat-select-search/blob/master/src/app/app.component.ts)
how to wire the `ngx-mat-select-search` and filter the options available.
Or have a look at [https://github.com/bithost-gmbh/ngx-mat-select-search-example](https://github.com/bithost-gmbh/ngx-mat-select-search-example) to see it in a standalone app.

### Template driven forms
You can alternatively use it with template driven forms as follows:
```html
<ngx-mat-select-search ngModel (ngModelChange)="filterMyOptions($event)">
```

### Labels
In order to change the labels, use the inputs specified in the [API](#api) section as follows:
```html
<ngx-mat-select-search [formControl]="bankFilterCtrl" 
                       placeholderLabel="Find bank..." 
                       noEntriesFoundLabel="'no matching bank found'"></ngx-mat-select-search>
```
To use the [i18n](https://angular.io/guide/i18n) API for translation of the labels, add the corresponding `i18n-...` attributes:
```html
<ngx-mat-select-search [formControl]="bankFilterCtrl" 
                       placeholderLabel="Find bank..." 
                       i18n-placeholderLabel
                       noEntriesFoundLabel="'no matching bank found'"
                       i18n-noEntriesFoundLabel></ngx-mat-select-search>
```

### Compatibility

* `@angular/core`: `^8.0.0 || ^9.0.0 || ^10.0.0`,
* `@angular/material`: `^8.0.0 || ^9.0.0 || ^10.0.0`

For compatibility with `@angular/core`: `^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0`, 
use version `1.8.0`.

### API
The `MatSelectSearchComponent` implements the [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) interface.
Furthermore, it provides the following inputs:

#### Inputs
```typescript
  /** Label of the search placeholder */
  @Input() placeholderLabel = 'Suche';

  /** Type of the search input field */
  @Input() type = 'text';

  /** Label to be shown when no entries are found. Set to null if no message should be shown. */
  @Input() noEntriesFoundLabel = 'Keine Optionen gefunden';

  /**
    * Whether or not the search field should be cleared after the dropdown menu is closed.
    * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
    */
  @Input() clearSearchInput = true;

  /** Whether to show the search-in-progress indicator */
  @Input() searching = false;

  /** Disables initial focusing of the input field */
  @Input() disableInitialFocus = false;

  /** Enable clear input on escape pressed */
  @Input() enableClearOnEscapePressed = false;

  /**
   * Prevents home / end key being propagated to mat-select,
   * allowing to move the cursor within the search input instead of navigating the options
   */
  @Input() preventHomeEndKeyPropagation = false;

  /** Disables scrolling to active options when option list changes. Useful for server-side search */
  @Input() disableScrollToActiveOnOptionsChanged = false;

  /** Adds 508 screen reader support for search box */
  @Input() ariaLabel = 'dropdown search';

  /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
  @Input() showToggleAllCheckbox = false;

  /** select all checkbox checked state */
  @Input() toggleAllCheckboxChecked = false;

  /** select all checkbox indeterminate state */
  @Input() toggleAllCheckboxIndeterminate = false;

  /** Display a message in a tooltip on the toggle-all checkbox */
  @Input() toggleAllCheckboxTooltipMessage = '';

  /** Define the position of the tooltip on the toggle-all checkbox. */
  @Input() toogleAllCheckboxTooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after' = 'below';

  /**
  *  Text that is appended to the currently active item label announced by screen readers, informing the user of the current index, value and total
  *  options.
  *  eg: Bank R (Germany) 1 of 6
  */
  @Input() indexAndLengthScreenReaderText = ' of ';
  
  /** Output emitter to send to parent component with the toggle all boolean */
  @Output() toggleAll = new EventEmitter<boolean>();


```

#### Customize clear icon
In order to customize the search icon, add the `ngxMatSelectSearchClear` to your custom clear item (a `mat-icon` or any other element) and place it inside the `ngx-mat-select-search` component:
```html
<ngx-mat-select-search>
   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
</ngx-mat-select-search>
```

#### Custom content
Custom content with the CSS class `mat-select-search-custom-header-content` can be transcluded as follows:
```html
<ngx-mat-select-search>
   <div class="mat-select-search-custom-header-content">something special</div>
</ngx-mat-select-search>
```

## Known Problems
* The currently selected option might be hidden under the search input field when opening the options panel 
  and the panel is at the screen border.
   
## Support Development

We aim at providing the best service possible by constantly improving `NgxMatSelectSearch` and responding fast to bug reports. We do this fully free of cost.
If you feel like this library was useful to you and saved you and your business some precious time, please consider making a donation to support its maintenance and further development.

[![PayPal](https://www.paypalobjects.com/en_US/CH/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NAX558HVGAX8Q)

### Contributions
Contributions are welcome, please open an issue and preferrably file a pull request.

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Library Build / NPM Package
Run `npm run build-lib` to build the library and generate an NPM package. 
The build artifacts will be stored in the `dist-lib/` folder.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
