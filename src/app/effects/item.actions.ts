import {createAction, props} from '@ngrx/store';
import { Item } from '../model/item';

export const reloadItemsRequest = createAction('[Item][effects] Reload Items Request');
export const reloadItemsDone = createAction('[Item][effects] Reload Items Done', props<{ items: Item[] }>());

export const saveItemRequest = createAction('[Item][effects] Save Item Request', props<{ item: Item }>());
export const deleteItemRequest = createAction('[Item][effects] Delete Item Request', props<{ itemId: string }>());

export const editItem = createAction('[Item][effects] Edit Item', props<{ itemId: string }>());
export const cancelEditItem = createAction('[Item][effects] Cancel Item Edit');
