# Changelog

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
