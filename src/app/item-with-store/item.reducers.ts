import { createReducer, on } from '@ngrx/store';
import {
  cancelEditItem, deleteItem, editItem, saveItem
} from './item.actions';
import { ItemWithStoreState } from './item-with-store.state';
import * as fromRoot from '../app-root.reducers';

export interface State extends fromRoot.State {
  withStore: ItemWithStoreState;
}

const initialState: ItemWithStoreState = {
  items: [],
  editItemId: null,
};

export const itemsReducer = createReducer<ItemWithStoreState>(initialState,
  on(saveItem, (
    state: ItemWithStoreState, action
  ) => {
    const stateItems = state.items;
    const idx = stateItems.findIndex(item => item.id === action.item.id);
    if (idx === -1) {
      return {
        ...state,
        editItemId: null,
        items: stateItems.concat({
          ...action.item
        })
      };
    }
    const items = stateItems.concat();
    items[idx] = action.item;
    return {
      ...state,
      editItemId: null,
      items
    };
  }),
  on(deleteItem, (
    state: ItemWithStoreState, action
  ) => ({
    ...state,
    editItemId: null,
    items: state.items.filter(item => item.id !== action.itemId)
  })),
  on(editItem, (
    state: ItemWithStoreState, action
  ) => ({
    ...state,
    editItemId: action.itemId,
  })),
  on(cancelEditItem, (
    state: ItemWithStoreState, action
  ) => ({
    ...state,
    editItemId: null,
  })),
);
