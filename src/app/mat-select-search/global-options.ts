import { InjectionToken } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';

/** List of inputs of NgxMatSelectSearchComponent that can be configured with a global default. */
export const configurableGlobalOptions = [
  'ariaLabel',
  'clearSearchInput',
  'closeIcon',
  'closeSvgIcon',
  'disableInitialFocus',
  'disableScrollToActiveOnOptionsChanged',
  'enableClearOnEscapePressed',
  'hideClearSearchButton',
  'indexAndLengthScreenReaderText',
  'noEntriesFoundLabel',
  'placeholderLabel',
  'preventHomeEndKeyPropagation',
  'searching',
] as const;

export type ConfigurableGlobalOptions = typeof configurableGlobalOptions[number];

/**
 * InjectionToken that can be used to specify global options. e.g.
 *
 * ```typescript
 * providers: [
 *   {
 *     provide: MATSELECTSEARCH_GLOBAL_OPTIONS,
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
export const MATSELECTSEARCH_GLOBAL_OPTIONS = new InjectionToken<MatSelectSearchOptions>(
  'global configuration options for ngx-mat-select-search'
);

/** Global configurable options for MatSelectSearch. */
export type MatSelectSearchOptions = Readonly<Partial<Pick<MatSelectSearchComponent, ConfigurableGlobalOptions>>>;
