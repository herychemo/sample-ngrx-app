import { Injectable } from '@angular/core';
import {Action, createFeatureSelector, createSelector, select, Store} from '@ngrx/store';
import * as fromFeature from './item.reducers';
import { ItemWithEffectsState } from './item-with-effects.state';
import { Observable } from 'rxjs';
import { Item } from '../../item-data/model/item';
import {
  cancelEditItem, deleteItemRequest, saveItemRequest, editItem, reloadItemsRequest
} from './item.actions';

@Injectable({
  providedIn: 'root'
})
export class ItemsFacade {

  private readonly featureSelector =
    createFeatureSelector<fromFeature.State, ItemWithEffectsState>('withEffects');

  items$: Observable<Item[]> = this.store.pipe(
    select(
      createSelector(this.featureSelector, (state: ItemWithEffectsState) => state.items)
    )
  );
  editItemId$: Observable<string> = this.store.pipe(
    select(
      createSelector(this.featureSelector, (state: ItemWithEffectsState) => state.editItemId)
    )
  );

  constructor(
    private store: Store<fromFeature.State>
  ) { }

  public dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  reloadItems(): void {
    this.store.dispatch(reloadItemsRequest());
  }

  saveItem(item: Item): void {
    this.store.dispatch(saveItemRequest({ item }));
  }

  editItem(itemId: string): void {
    this.store.dispatch(editItem({ itemId }));
  }

  deleteItem(itemId: string): void {
    this.store.dispatch(deleteItemRequest({ itemId }));
  }

  cancelItemEdit(): void {
    this.store.dispatch(cancelEditItem());
  }

}
