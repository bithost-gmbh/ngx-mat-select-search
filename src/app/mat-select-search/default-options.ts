import { InjectionToken, Provider } from '@angular/core';
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

export const MAT_SELECTSEARCH_DEFAULT_OPTIONS = new InjectionToken<MatSelectSearchOptions>('mat-selectsearch-default-options');

/** Global configurable options for MatSelectSearch. */
export type MatSelectSearchOptions = Readonly<Partial<Pick<MatSelectSearchComponent, ConfigurableDefaultOptions>>>;

/**
 * Provides default options for the `MatSelectSearchComponent`. e.g.
 *
 * ```typescript
 * providers: [
 *   provideMatSelectSearchOptions({
 *     closeIcon: 'delete',
 *     noEntriesFoundLabel: 'No options found'
 *   })
 * ]
 * ```
 *
 * See the corresponding inputs of `MatSelectSearchComponent` for documentation.
 */
export function provideMatSelectSearchOptions(options: MatSelectSearchOptions): Provider {
  return {
     provide: MAT_SELECTSEARCH_DEFAULT_OPTIONS,
     useValue: options
   }
}
