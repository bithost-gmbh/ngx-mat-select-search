# Changelog

## 7.0.5
* Fix select search should compare values of options for first item 
  [#445](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/445)

  Thanks to @lorenzbaier
* Enhancement: Add compatibility with `@angular/material`: `^17.0.0`

## 7.0.4
* Fix background issue with `@angular/material`: `^16.2.0` with toggle-all button
  [#435](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/435)

  Thanks to @ioanbin
* Fix issue with setting the first active item 
  [#436](https://github.com/bithost-gmbh/ngx-mat-select-search/pull/436)

  Thanks to @Danevandy99

## 7.0.3
* Fix background issue with `@angular/material`: `^16.2.0`
  [#431](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/431)

  Thanks to @chutzemischt and @akaNightmare 
  
## 7.0.2
* Fix compatibility with `@angular/material`: `^16.0.0`
  [#425](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/425)

  Thanks to @GipHub123 for reporting

## 7.0.1
* Enhancement: Add compatibility with `@angular/material`: `^16.0.0`

## 7.0.0
* Update compatibility to `@angular/material@15` with the MDC-based `MatSelectModule` (`@angular/material/select`).
  [#412](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/412)
  
  Thanks to @pureyoy and @swierzbicki

  **Breaking Change**:  The `MatLegacySelectModule` (`@angular/material/legacy-select`) of `@angular/material@15` is not supported anymore, please use version `6.0.0`.
                        See [README.md#compatibility](README.md#compatibility)
                        
## 6.0.0
* Add Angular Material 15 as a peer dependency \
  [#408](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/408)
  
  Thanks to @swierzbicki
* Fix select all example [#336](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/336)

  Thanks to @AhsanAyaz
* Update compatibility to `@angular/material@15` with `MatLegacySelectModule` (`@angular/material/legacy-select`).
  [#395](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/395)
  
  **Breaking Change**:  `@angular/material`: `<= 14` is not supported anymore, please use version `5.0.0`.
                        See [README.md#compatibility](README.md#compatibility)

## 5.0.0
* Enhancement: Accessibility Issue: screenreaders reading blank before each option.
  [#349](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/349)

  **Breaking Change**:  The `@Input() indexAndLengthScreenReaderText` became obsolete and was removed.

  Thanks to @escheiermann
* Enhancement: **Breaking Change** Renamed misspelled `@Input() toogleAllCheckboxTooltipPosition` 
  to `@Input() toggleAllCheckboxTooltipPosition`.
  [#266](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/266)

  Thanks to @bulldog98 for reporting

## 4.2.1
* Bugfix: Revert copying in mode multi so `(selectionChange)` works properly.
  [#387](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/387)
  
  Thanks to @angelaki for reporting
  
## 4.2.0
* Enhancement: Enable the use of a custom template for notFoundEntries
  [#381](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/381)
  
  Thanks to @ruekart

## 4.1.2
* Bugfix: Restoring selected values in mode multi throws error
  [#376](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/376)
  
  Thanks to @qstiegler
* Chore: Update npm packages

## 4.1.1
* Enhancement: Rename `MATSELECTSEARCH_GLOBAL_OPTIONS` to `MAT_SELECTSEARCH_DEFAULT_OPTIONS`
  [#369](https://github.com/bithost-gmbh/ngx-mat-select-search/pull/369)
  
  Thanks to @angelaki

## 4.1.0
* Feature: Default `@Input()` values can be configured globally using `MATSELECTSEARCH_GLOBAL_OPTIONS`
  [#364](https://github.com/bithost-gmbh/ngx-mat-select-search/pull/364)

  Thanks to @angelaki
* Feature: Close icon can be configured with `closeIcon` and `closeSvgIcon`
  [#364](https://github.com/bithost-gmbh/ngx-mat-select-search/pull/364)

  Thanks to @angelaki

## 4.0.2
* Enhancement: Add compatibility with `@angular/core`: `^14.0.0`, `@angular/material`: `^14.0.0`

## 4.0.1
* Fix: Remove incompatible angular versions from `Readme.md` and `package.json`

## 4.0.0
* Enhancement: Build and package using `@angular/core@13` in Ivy format.
  [#347](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/347)
  
  **Breaking Change**:  `@angular/core`: `<= 11.0.0` is not supported anymore, please use version `3.3.3`.

  Thanks to @nseni for reporting

## 3.3.3
* Enhancement: Document compatibility with `@angular/core`: `^13.0.0`, `@angular/material`: `^13.0.0` in `README.md`

  Thanks to @meta72
    
## 3.3.2
* Fix: Add compatibility with `@angular/core`: `^13.0.0`, `@angular/material`: `^13.0.0` in `package.json`

## 3.3.1
* Enhancement: Add compatibility with `@angular/core`: `^13.0.0`, `@angular/material`: `^13.0.0`

## 3.3.0
* Enhancement: Add option to restore selected items using infinity-scroll
  [#320](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/320)
  
  Thanks to @angelaki
  
## 3.2.2
* Enhancement: Update `peerDependencies` in `package.json` for compatibility with `@angular/core`: `^12.0.0`, `@angular/material`: `^12.0.0`
  
## 3.2.1
* Enhancement: Add compatibility with `@angular/core`: `^12.0.0`, `@angular/material`: `^12.0.0`
* Enhancement: Improve select all example
  
  Thanks to @achilehero
  
## 3.2.0
* Feature: allow disabling the clear search button with `[hideClearSearchButton]="true"`
  [#290](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/290)

  Thanks to @vlio20

## 3.1.4
* Fix: null-pointer exception if no form control directive on `mat-select`
  [#281](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/281)

  Thanks to @Daishy for reporting

## 3.1.3
* Fix: incorrect restoration of selection when using `[multiple]="true"`
  [#279](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/279)

  Thanks to @broekema41
  
## 3.1.2
* Fix: incorrect restoration of selection when using `[multiple]="true"` and no initial selection prior to filtering
  [#270](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/270)

  Thanks to @pranavneeraj for reporting

## 3.1.1
* Enhancement: Add compatibility with `@angular/core`: `^11.0.0`, `@angular/material`: `^11.0.0`
* Fix: set first item active if no item is active after filtering
  [#263](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/263)

  Thanks to @Ayoubane for reporting
* Fix: in multi select mode after enter the search is not focused
  [#265](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/265)

  Thanks to @bulldog98

## 3.1.0
* Feature: Support Right-To-Left
  [#258](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/258)

  Thanks to @framasev
* Fix: ensure the placeholder is displayed
  [#256](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/256)

  Thanks to @aminsmartsenese for reporting
* Fix: Refactor infinity scrolling example
  [#253](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/253)

  Thanks to @NitinMagdum for reporting
* Fix: properly restore selection when using `[multiple]="true"`
  [#260](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/260)

  Thanks to @begandroide for reporting
  

## 3.0.3
* Fix: properly restore selection when using `[multiple]="true"`
  [#249](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/249)

  Thanks to @croy618 for reporting
  
## 3.0.2
* Fix: hide no entries found message when options don't change initially
  [#245](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/245)

  Thanks to @PabloPerezAguilo for reporting

## 3.0.1
* Fix: correctly show no entries found message when no options are available initially (e.g. in server-side search) 
  [#239](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/239)

  Thanks to @Arjun-1r for reporting

## 3.0.0
* Fix: prevent scrolling to first option if option does not change (e.g. with infinity scrolling) [#200](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/200)

  Thanks to @raysuelzer
* Enhancement: Add option to clear input when pressing escape with `[enableClearOnEscapePressed]="true"`
  [#231](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/231)

  Thanks to @nischi
* Enhancement: Add compatibility with `@angular/core`: `^10.0.0`, `@angular/material`: `^10.0.0`
* Chore: (**Breaking Change**) The possibility to place the `<ngx-mat-select-search>` element directly inside `<mat-select>`
                       without wrapping it in an `<mat-option>` element was removed due to changes of the public API of `mat-select`. [#208](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/208)
         
  To fix this, simply place the `<ngx-mat-select-search>` inside a `<mat-option>` element.
  Thanks to @evoltafreak

## 2.2.0
* Enhancement: add tooltip message to select-all checkbox [#227](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/227)

  Thanks to @arucar
  
## 2.1.2
* Fix: fix selection of different instances of same object when using `multiple` [#215](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/215)

  Thanks to @Springrbua
* Chore: enable linting and use [@angular-extensions/lint-rules](https://github.com/angular-extensions/lint-rules)  
  
## 2.1.1
* Fix: Prevent unhandled exceptions when pressing arrow keys with no available options [#201](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/201)

  Thanks to @josephdecock

## 2.1.0
* Enhancement: Improve accessibility by reading the selected option 
               [#186](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/186)

  Thanks to @ZacaryPaynter

* Bugfix: Fix corners not rounded 
          [#176](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/176)

  Thanks to @jfcere

* Bugfix: Fix input width not updated correctly 
          [#175](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/175)
* Bugfix: ToggleAllCheckbox doesn't use correct theme color 
          [183](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/183)
          
  Thanks to @LoganDupont for reporting

* Enhancement: Improve readme on how to use i18n translation for labels
               [#180](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/180)
               
  Thanks to @JomalJohny

## 2.0.0
* Enhancement: Update to Angular `8.2.10`
* Enhancement: Add compatibility with `@angular/core`: `^9.0.0`, `@angular/material`: `^9.0.0`
               [#173](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/173)
               
  **Breaking Change**:  `@angular/core`: `< 8.0.0` is not supported anymore, please use version `1.8.0`.
* Enhancement: Replace `@angular/material` root imports
               [#161](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/161)

## 1.8.0
* Enhancement: Add option to show a toggle all checkbox with `[showToggleAllCheckbox]="true"`
  [#145](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/145)

  Thanks to @blazewalker59
  
* Enhancement: Allow custom content transclusion with `.mat-select-search-custom-header-content`

## 1.7.6
* Bugfix: spinner not visible after reopening select panel
  [#153](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/153)

  Thanks to @saithis for reporting

## 1.7.5
* Bugfix: Avoid `Cannot read property 'attach' of undefined` when `<ngx-mat-select-search>` 
  is not inside a `<mat-option>` element with Angular 8
  [#146](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/146)
  
## 1.7.4
* Enhancement: Allow setting the initial value of the search input 
  [#147](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/147)
  
  Thanks to @sehgalneha for reporting

## 1.7.3
* Enhancement: Allow setting accessibility label of the input with ` @Input() ariaLabel` 
  [#137](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/137)

  Thanks to @tonyholt
  
## 1.7.2
* Enhancement: Allow setting type of the search input field with `@Input() type` 
  [#138](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/138)

  Thanks to @botoxparty
  
* Enhancement: Tested and update peer dependency compatibility to allow 
               `@angular/core`: `^8.0.0`, `@angular/material`: `^8.0.0`

## 1.7.1
* Enhancement: allow disabling scrolling active element into view when option list changes 
  with `@Input() disableScrollToActiveOnOptionsChanged` [#130](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/130)
  
  Thanks to @drakeBear for reporting
  
* Bugfix: input field not focused in IE [#131](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/131)
* Bugfix: clear button not visible after reopening select panel in combination with `[clearSearchInput]="false"`
  [#133](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/133)

  Thanks to @cappster for reporting

## 1.7.0
* Enhancement: ensure the active option is not covered by the search input when navigating 
  with the arrow keys or when the option list changes when searching. 
  [#119](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/119)
  
  Thanks to @Mabiro
  
* Enhancement: allow disabling propagation of home / end key via `@Input() preventHomeEndKeyPropagation` 
  to enable moving the cursor inside the search field instead of navigating the options when pressing
  <kbd>Home</kbd> / <kbd>End</kbd> [#43](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/43)
  
  Thanks to @geraldhe for reporting
  
* Bugfix / Enhancement: Update the input width when the viewport is resized
  [#81](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/81)
  
  Thanks to @mhosman for reporting
  
* Enhancement: add opacity transition animation for search clear icon 

## 1.6.0
* Enhancement: Allow showing a loading / searching indicator with `@Input() searching` 
               [#114](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/114)

  Thanks to @mstawick


## 1.5.3
* Bugfix: Avoid space when opening select panel after previously showing "no entries found" message when placing `<ngx-mat-select-search>` inside a `<mat-option>` element
  [#107](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/107)
  
  Thanks to @aroblu94 for reporting

## 1.5.2
* Bugfix: Show "no entries found" message when placing `<ngx-mat-select-search>` inside a `<mat-option>` element
  [#101](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/101)
          
  Thanks to @mstawick for reporting
  
## 1.5.1
* Bugfix: Hide checkbox when placing `<ngx-mat-select-search>` inside a `<mat-option>` element 
          and with `<mat-select  multi="true">` [#98](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/98)
          
  Thanks to @jkhadivi for reporting

## 1.5.0
* Bugfix: Fix scroll issue in iOS [#70](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/70)

  Thanks to @JiaHongL

* Enhancement / Bugfix: Allow placing `<ngx-mat-select-search>` inside a `<mat-option>` element.
  This prevents the search field being placed outside of the visible viewport ([#1](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/1)).

  Note: it is still possible to place the `<ngx-mat-select-search>` element directly inside `<mat-select>` 
        without wrapping it in an `<mat-option>` element.

  Thanks to @hanuhimanshu
  
* Examples: Add example for server-side filtering [#26](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/26)

  Thanks to @hanuhimanshu
  
* Examples: Add example for option groups [#15](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/15)

  Thanks to @maechler
  
* Examples: refactor examples into separate components [#86](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/86)

## 1.4.2
* Bugfix: Error when quickly selecting an option [#69](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/69)

  Thanks to @olaf89 for reporting
  
* Bugfix: Filter selection jumps to next entry [#73](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/73)
  
  Thanks to @Kimmova

## 1.4.1
* Bugfix: Wrong panel positioning when select is at bottom edge of viewport 
          due to overridden panel height (`350px`). The default panel height (`256px`) will be used
          [#63](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/63)
          
  Note: the panel height can be changed via css (not recommended, as it leads to issues):
  ```css
  .mat-select-search-panel {
    ...
    max-height: 350px;
  }
  ```
  
  Thanks to @hadsy for reporting.

## 1.4.0
* Enhancement: Tested and update peer dependency compatibility to allow 
               `@angular/core`: `^7.0.0`, `@angular/cdk`: `^7.0.0`, `@angular/material`: `^7.0.0`
* Enhancement: Allow disabling initial focusing of the input field with `@Input() disableInitialFocus` 
               [#47](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/47)
* Bugfix: Clearing the search input by clicking the clear icon did not work with `[clearSearchInput]="false"`
               [#55](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/55)
    
  Thanks to @ofriedrich for reporting

## 1.3.1
* Bugfix: Error thrown when used together with `*ngIf` [#53](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/53)

  Thanks to @rhyre for reporting

## 1.3.0
* Enhancement: allow customization of the clear icon [#41](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/41)

  Thanks to @OvidijusStukas

* Enhancement: Add note about possible workaround for search input being displayed 
  outside of the visible viewport in some cases [#1](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/1) 

  Thanks to @maxencefrenette 

## 1.2.4
* Enhancement: ensure forward compatibility independent of markup changes [#38](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/38)
* Enhancement: fix warnings in tests, improve example

## 1.2.3
* Bugfix: input shows rounded corners when used together with MatDatepicker [#33](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/33)

## 1.2.2
* Bugfix: input shows drop shadow when used together with MatDatepicker [#33](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/33)

  Thanks @irowbin for reporting

## 1.2.1

* Bugfix: Width of the input field is wrong in IE11 when using large option texts with angular material 6+. [#29](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/29)

  Thanks to @Sabartius 
  
## 1.2.0

* Enhancement: allow preventing clearing the search input when closing the select, needed for server-side filtering. [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)

  Thanks to @damianmigo 
  
## 1.1.0

* Enhancement: Use material theming and typography [#21](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/21)

    Thanks to @Avejack
    
* Enhancement: Adjust input field width to actual scroll bar width [#21](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/21)

    Thanks to @Avejack
    
* Enhancement: Add Angular 6 compatibility, update dependencies [#23](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/23)

  Note: this reverts the RxJS operator path improvements ([#17](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/17)) in order to be compatible with both, Angular 5.x.x and 6.x.x 
  
## 1.0.5

* Enhancement: Really improve tree-shaking by importing RxJS operators from specific path [#17](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/17)
  
  Thanks to @mtraynham

## 1.0.4

* Enhancement: improve tree-shaking by importing RxJS operators from specific path [#17](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/17)
  
  Thanks to @mtraynham

## 1.0.3

* Enhancement: prevent scrollbar flashing when opening / closing [#2](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/2)
  
  Thanks to @alexandrupaul7

## 1.0.2

* Enhancement: disable autocomplete for search input field [#5](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/5)

## 1.0.1

* Bugfix: don't clear initial selection with `multi="true"` [#6](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/6) 
  
  Thanks to @joqkey 

* Bugfix: show "no options found" message as soon as no options are found [#4](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/4), [#10](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/10)

## 1.0.0

* Initial Release
