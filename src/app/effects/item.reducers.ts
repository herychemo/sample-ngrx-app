import { On } from '@ngrx/store/src/reducer_creator';
import { Item } from '../model/item';
import { on } from '@ngrx/store';
import {
  cancelEditItem, editItem, reloadItemsDone
} from './item.actions';

export const effectsItemsReducerOns: On<Item[]>[] = [
  on(reloadItemsDone, (
    state, action
  ) => action.items)
];

export const effectsEditItemIdReducerOns: On<string>[] = [
  on(editItem, (
    state, action
  ) => action.itemId),
  on(cancelEditItem, () => null),
  on(reloadItemsDone, () => null),
];
