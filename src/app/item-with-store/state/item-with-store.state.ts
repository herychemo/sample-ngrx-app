import { Item } from '../../item-data/model/item';

export interface ItemWithStoreState {
  items: Item[];
  editItemId: string;
}
