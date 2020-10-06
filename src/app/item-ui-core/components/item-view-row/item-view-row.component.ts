import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../item-data/model/item';

@Component({
  selector: 'app-item-view-row',
  templateUrl: './item-view-row.component.html',
  styles: [
  ]
})
export class ItemViewRowComponent implements OnInit {

  @Input()
  item: Item;

  @Output()
  editItem: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  deleteItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {}

  doEditItem(itemId: string): void {
    this.editItem.emit(itemId);
  }

  doDeleteItem(itemId: string): void {
    this.deleteItem.emit(itemId);
  }

}
