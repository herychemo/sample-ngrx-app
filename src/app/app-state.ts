import { Item } from './model/item';

export interface AppState {
  items: Item[];
  editItemId: string;
}
