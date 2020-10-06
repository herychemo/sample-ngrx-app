import { Component, OnInit } from '@angular/core';

import {Store, select, createSelector, createFeatureSelector} from '@ngrx/store';
import {
  saveItem,
  deleteItem,
  editItem,
  cancelEditItem,
} from '../../item.actions';
import { Item } from '../../../item-data/model/item';
import { ItemWithStoreState } from '../../item-with-store-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-store-item-home',
  templateUrl: './store-item-home.component.html',
  styles: [
  ]
})
export class StoreItemHomeComponent implements OnInit {

  private readonly featureSelector =
    createFeatureSelector<{ withState: ItemWithStoreState }, ItemWithStoreState>
    ('withState');

  items$: Observable<Item[]> = this.store.pipe(
    select(
      createSelector(this.featureSelector, (state: ItemWithStoreState) => state.items)
    )
  );
  editItemId$: Observable<string> = this.store.pipe(
    select(
      createSelector(this.featureSelector, (state: ItemWithStoreState) => state.editItemId)
    )
  );

  constructor(
    private store: Store<{withState: ItemWithStoreState}>) {
    this.cancelItemEdit();
  }

  ngOnInit(): void { }

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
