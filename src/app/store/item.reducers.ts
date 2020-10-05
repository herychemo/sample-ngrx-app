import { On } from '@ngrx/store/src/reducer_creator';
import { on } from '@ngrx/store';
import {
  cancelEditItem, deleteItem, editItem, saveItem
} from './item.actions';
import { Item } from '../model/item';

export const stateItemsReducerOns: On<Item[]>[] = [
  on(saveItem, (
    state: Item[], action
  ) => {
    const idx = state.findIndex(item => item.id === action.item.id);
    if (idx === -1) {
      return state.concat({
        ...action.item
      });
    }
    const items = state.concat();
    items[idx] = action.item;
    return items;
  }),
  on(deleteItem, (
    state: Item[], action
  ) => state.filter(item => item.id !== action.itemId))
];

export const stateEditItemIdReducerOns: On<string>[] = [
  on(editItem, (
    state, action
  ) => action.itemId),
  on(saveItem, () => null),
  on(deleteItem, () => null),
  on(cancelEditItem, () => null),
];
