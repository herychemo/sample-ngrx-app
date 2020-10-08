import { Component, OnInit } from '@angular/core';
import { Item } from '../../../item-data/model/item';
import { Observable } from 'rxjs';
import { ErrorMessageFacade } from '../../../state/error-message.facade';
import { ItemsFacade } from '../../state/items.facade';

@Component({
  selector: 'app-effects-item-home',
  templateUrl: './effects-item-home.component.html',
  styles: [
  ]
})
export class EffectsItemHomeComponent implements OnInit {

  items$: Observable<Item[]> = this.itemsFacade.items$;
  editItemId$: Observable<string> = this.itemsFacade.editItemId$;

  constructor(
    private itemsFacade: ItemsFacade,
    private errorMessageFacade: ErrorMessageFacade
  ) {
    this.cancelItemEdit();
  }

  ngOnInit(): void {
    this.itemsFacade.reloadItems();
  }

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

  onFormError(errorMessage: string): void {
    this.errorMessageFacade.setError(errorMessage);
  }

  doClearError(): void {
    this.errorMessageFacade.clearError();
  }

}
