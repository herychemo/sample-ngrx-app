import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app-state';
import {
  saveItem,
  deleteItem,
  editItem,
  cancelEditItem,
} from '../../item.actions';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-store-item-home',
  templateUrl: './store-item-home.component.html',
  styles: [
  ]
})
export class StoreItemHomeComponent implements OnInit {

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
