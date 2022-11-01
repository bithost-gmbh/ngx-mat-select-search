import { InjectionToken } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';

/** List of inputs of NgxMatSelectSearchComponent that can be configured with a global default. */
export const configurableDefaultOptions = [
  'ariaLabel',
  'clearSearchInput',
  'closeIcon',
  'closeSvgIcon',
  'disableInitialFocus',
  'disableScrollToActiveOnOptionsChanged',
  'enableClearOnEscapePressed',
  'hideClearSearchButton',
  'noEntriesFoundLabel',
  'placeholderLabel',
  'preventHomeEndKeyPropagation',
  'searching',
] as const;

export type ConfigurableDefaultOptions = typeof configurableDefaultOptions[number];

/**
 * InjectionToken that can be used to specify global options. e.g.
 *
 * ```typescript
 * providers: [
 *   {
 *     provide: MAT_SELECTSEARCH_DEFAULT_OPTIONS,
 *     useValue: <MatSelectSearchOptions>{
 *       closeIcon: 'delete',
 *       noEntriesFoundLabel: 'No options found'
 *     }
 *   }
 * ]
 * ```
 *
 * See the corresponding inputs of `MatSelectSearchComponent` for documentation.
 */
export const MAT_SELECTSEARCH_DEFAULT_OPTIONS = new InjectionToken<MatSelectSearchOptions>('mat-selectsearch-default-options');

/** Global configurable options for MatSelectSearch. */
export type MatSelectSearchOptions = Readonly<Partial<Pick<MatSelectSearchComponent, ConfigurableDefaultOptions>>>;
