import { createAction, props } from '@ngrx/store';
import { Item } from '../model/item';

export const saveItem = createAction('[Item][store] Save Item', props<{ item: Item }>());
export const deleteItem = createAction('[Item][store] Delete Item', props<{ itemId: string }>());
export const editItem = createAction('[Item][store] Edit Item', props<{ itemId: string }>());
export const cancelEditItem = createAction('[Item][store] Cancel Item Edit');
