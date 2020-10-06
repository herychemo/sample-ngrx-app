import { createReducer, on } from '@ngrx/store';
import {
  cancelEditItem, editItem, reloadItemsDone
} from './item.actions';
import { ItemWithEffectsState } from './item-with-effects-state';


const initialState: ItemWithEffectsState = {
  items: [],
  editItemId: null,
};

export const itemsReducer = createReducer<ItemWithEffectsState>(initialState,
  on(reloadItemsDone, (
    state, action
  ) => ({
    ...state,
    editItemId: null,
    items: action.items
  })),
  on(editItem, (
    state, action
  ) => ({
    ...state,
    editItemId: action.itemId,
  })),
  on(cancelEditItem, (
    state, action
  ) => ({
    ...state,
    editItemId: null,
  })),
);
