import { Item } from '../../item-data/model/item';

export interface ItemWithEffectsState {
  items: Item[];
  editItemId: string;
}
