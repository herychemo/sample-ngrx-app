import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../../item-data/model/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styles: []
})
export class ItemListComponent implements OnInit {

  @Input()
  items: Item[];

  @Input()
  editItemId: string;

  @Output()
  editItem: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  deleteItem: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  saveItem: EventEmitter<Item> = new EventEmitter<Item>();

  @Output()
  cancelItemEdit: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  formError: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  clearFormError: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }
  ngOnInit(): void {}

  doEditItem(itemId: string): void {
    this.editItem.emit(itemId);
  }

  doDeleteItem(itemId: string): void {
    this.deleteItem.emit(itemId);
  }

  doSaveItem(item: Item): void {
    this.saveItem.emit(item);
  }

  doCancelItemEdit(): void {
    this.cancelItemEdit.emit();
  }

  doFormError(errorMessage: string): void {
    this.formError.emit(errorMessage);
  }

  doClearError(): void {
    this.clearFormError.emit();
  }

}
