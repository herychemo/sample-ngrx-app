
import { createReducer } from '@ngrx/store';
import { stateEditItemIdReducerOns, stateItemsReducerOns } from './store/item.reducers';
import { effectsItemsReducerOns, effectsEditItemIdReducerOns } from './effects/item.reducers';
import {Item} from './model/item';

const initialItems: Item[] = [];

export const itemsReducer = createReducer<Item[]>(initialItems,
  ...stateItemsReducerOns,
  ...effectsItemsReducerOns,
);

export const editItemIdReducer = createReducer<string>(null,
  ...stateEditItemIdReducerOns,
  ...effectsEditItemIdReducerOns,
);
