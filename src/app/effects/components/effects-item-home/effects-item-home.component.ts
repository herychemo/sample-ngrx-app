import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../app-state';
import { Item } from '../../../model/item';
import {cancelEditItem, deleteItemRequest, editItem, reloadItemsRequest, saveItemRequest} from '../../item.actions';

@Component({
  selector: 'app-effects-item-home',
  templateUrl: './effects-item-home.component.html',
  styles: [
  ]
})
export class EffectsItemHomeComponent implements OnInit {

  items$ = this.store.pipe(
    select(state => state.items)
  );
  editItemId$ = this.store.pipe(
    select('editItemId')
  );

  constructor(
    private store: Store<AppState>) {
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
