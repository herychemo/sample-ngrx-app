import { Injectable } from '@angular/core';
import {Action, createFeatureSelector, createSelector, select, Store} from '@ngrx/store';
import * as fromFeature from './item.reducers';
import { ItemWithStoreState } from './item-with-store.state';
import { Observable } from 'rxjs';
import { Item } from '../../item-data/model/item';
import {
  cancelEditItem, deleteItem, saveItem, editItem
} from './item.actions';


@Injectable({
  providedIn: 'root'
})
export class ItemsFacade {

  private readonly featureSelector =
    createFeatureSelector<fromFeature.State, ItemWithStoreState>('withStore');

  public readonly items$: Observable<Item[]> = this.store.pipe(
    select(
      createSelector(this.featureSelector, (state: ItemWithStoreState) => state.items)
    )
  );
  public readonly editItemId$: Observable<string> = this.store.pipe(
    select(
      createSelector(this.featureSelector, (state: ItemWithStoreState) => state.editItemId)
    )
  );

  constructor(
    private store: Store<fromFeature.State>
  ) {}

  public dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  saveItem(item: Item): void {
    this.store.dispatch(saveItem({ item }));
  }

  editItem(itemId: string): void {
    this.store.dispatch(editItem({ itemId }));
  }

  deleteItem(itemId: string): void {
    this.store.dispatch(deleteItem({ itemId }));
  }

  cancelItemEdit(): void {
    this.store.dispatch(cancelEditItem());
  }

}
