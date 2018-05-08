# Changelog

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
