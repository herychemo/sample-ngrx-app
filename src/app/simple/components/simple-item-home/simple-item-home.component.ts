import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { DataService } from '../../../services/data.service';
import { Item } from '../../../model/item';

@Component({
  selector: 'app-simple-item-home',
  templateUrl: './simple-item-home.component.html',
  styles: [
  ]
})
export class SimpleItemHomeComponent implements OnInit {

  items: Item[] = [];
  editItemId: string;

  constructor(
    protected dataService: DataService
  ) {
    this.cancelItemEdit();
  }

  ngOnInit(): void {
    this.dataService.removeAllAsync().pipe(
      mergeMap(_ => this.dataService.saveItemAsync(
        {id: '1', title: 'One', content: 'Two Stuff.'}
      )),
      mergeMap(_ => this.dataService.saveItemAsync(
        {id: '2', title: 'Two', content: 'Two Stuff.'}
      )),
      mergeMap(_ => this.dataService.saveItemAsync(
        {id: '3', title: 'Three', content: 'Three Stuff.'}
      )),
      mergeMap(_ => this.dataService.saveItemAsync(
        {id: '4', title: 'Four', content: 'Four Stuff.'}
      )),
    ).subscribe(_ => {
      this.reloadData();
    });
  }

  reloadData(): void {
    this.dataService.findAllItemsAsync().subscribe(items => {
      console.log('Items: ', items);
      this.items = items;
      this.cancelItemEdit();
    });
  }

  saveItem(item: Item): void {
    this.dataService.saveItemAsync(item).subscribe(value => {
      console.log(`Item saved: ${value.id}`);
      this.reloadData();
    });
  }

  editItem(itemId: string): void {
    this.editItemId = itemId;
  }

  deleteItem(itemId: string): void {
    this.dataService.removeItemAsync(itemId).subscribe(value => {
      console.log('Item deleted');
      this.reloadData();
    });
  }

  cancelItemEdit(): void {
    this.editItemId = null;
  }
}
