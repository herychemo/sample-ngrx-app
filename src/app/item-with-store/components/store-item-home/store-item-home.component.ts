import { Component, OnInit } from '@angular/core';

import { Item } from '../../../item-data/model/item';
import { Observable } from 'rxjs';
import { ItemsFacade } from '../../state/items.facade';
import { ErrorMessageFacade } from '../../../state/error-message.facade';


@Component({
  selector: 'app-store-item-home',
  templateUrl: './store-item-home.component.html',
  styles: [
  ]
})
export class StoreItemHomeComponent implements OnInit {

  items$: Observable<Item[]> = this.itemsFacade.items$;
  editItemId$: Observable<string> = this.itemsFacade.editItemId$;

  constructor(
    private itemsFacade: ItemsFacade,
    private errorMessageFacade: ErrorMessageFacade) {
    this.cancelItemEdit();
  }

  ngOnInit(): void { }

  saveItem(item: Item): void {
    this.itemsFacade.saveItem(item);
  }

  editItem(itemId: string): void {
    this.itemsFacade.editItem(itemId);
  }

  deleteItem(itemId: string): void {
    this.itemsFacade.deleteItem(itemId);
  }

  cancelItemEdit(): void {
    this.itemsFacade.cancelItemEdit();
  }

  doClearError(): void {
    this.errorMessageFacade.clearError();
  }

  onFormError(errorMessage: string): void {
    this.errorMessageFacade.setError(errorMessage);
  }

}
