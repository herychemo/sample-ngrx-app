import { createAction, props } from '@ngrx/store';

export const clearError = createAction('[errorMessage] Clear Error');
export const setError = createAction('[errorMessage] Set Error Message',
  props<{ errorMessage: string }>());

