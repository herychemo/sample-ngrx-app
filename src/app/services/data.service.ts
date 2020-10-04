import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private items: { [id: string]: Item };

  private get itemsMap(): Map<string, Item> {
    return new Map<string, Item>(Object.entries(this.items));
  }

  private get itemsList(): Item[] {
    return Array.from(this.itemsMap.values());
  }

  constructor() {
    this.items = {};
  }

  findAllItems(): Item[] {
    return this.itemsList;
  }
  findAllItemsAsync(): Observable<Item[]> {
    return of(this.findAllItems());
  }

  findItemById(id: string): Item {
    return {
      ...this.items[id]
    };
  }
  findItemByIdAsync(id: string): Observable<Item> {
    return of(this.findItemById(id));
  }

  saveItem(item: Item): Item {
    this.items[item.id] = item;
    return {...item};
  }
  saveItemAsync(item: Item): Observable<Item> {
    return of(this.saveItem(item));
  }

  removeItem(itemId: string): boolean {
    delete this.items[itemId];
    return true;
  }
  removeItemAsync(itemId: string): Observable<boolean> {
    return of(this.removeItem(itemId));
  }

  removeAll(): boolean {
    this.items = {};
    return true;
  }
  removeAllAsync(): Observable<boolean> {
    return of(this.removeAll());
  }

}

export interface Item {
  id: string;
  title: string;
  content: string;
}
