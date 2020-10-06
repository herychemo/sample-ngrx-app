import {AppRootState} from './app-root.state';
import {createReducer, on} from '@ngrx/store';
import {clearError, setError} from './app-root.actions';

export type State = AppRootState;

export const errorMessageReducer = createReducer<string>('',
  on(setError, (
    state: string, action
  ) => action.errorMessage),
  on(clearError, (_: string) => ''),
);

