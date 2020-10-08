import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearError, setError } from './app-root.actions';
import { State } from './app-root.reducers';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageFacade {

  public readonly errorMessage$: Observable<string> = this.store.pipe(
    select(state => state.errorMessage)
  );

  constructor(private store: Store<State>) { }

  public dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  public setError(errorMessage: string): void {
    this.store.dispatch(setError({ errorMessage }));
  }

  public clearError(): void {
    this.store.dispatch(clearError());
  }

}
