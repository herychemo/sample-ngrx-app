import { Component, OnInit } from '@angular/core';
import {createFeatureSelector, createSelector, select, Store} from '@ngrx/store';

import * as fromFeature from '../../item.reducers';
import { Item } from '../../../item-data/model/item';
import {
  cancelEditItem, deleteItemRequest, editItem, reloadItemsRequest, saveItemRequest
} from '../../item.actions';
import { ItemWithEffectsState } from '../../item-with-effects.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-effects-item-home',
  templateUrl: './effects-item-home.component.html',
  styles: [
  ]
})
export class EffectsItemHomeComponent implements OnInit {

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
    private store: Store<fromFeature.State>) {
    this.cancelItemEdit();
  }

  ngOnInit(): void {
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
