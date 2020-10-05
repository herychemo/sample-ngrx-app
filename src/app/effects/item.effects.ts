import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { deleteItemRequest, reloadItemsDone, reloadItemsRequest, saveItemRequest } from './item.actions';
import { map, switchMap } from 'rxjs/operators';
import { Item } from '../model/item';

@Injectable()
export class ItemEffects {

  constructor(
    private dataService: DataService,
    private actions$: Actions
  ) { }

  reloadItems$ = createEffect(() => this.actions$.pipe(
    ofType(reloadItemsRequest),
    switchMap((action) =>
      this.dataService.findAllItemsAsync()
        .pipe(
          map(items => reloadItemsDone({items}))
        )),
  ));

  saveItem$ = createEffect(() => this.actions$.pipe(
    ofType(saveItemRequest),
    switchMap((action) =>
      this.dataService.saveItemAsync(action.item)
        .pipe(
          map((_: Item) => reloadItemsRequest())
        )),
  ));

  deleteItem$ = createEffect(() => this.actions$.pipe(
    ofType(deleteItemRequest),
    switchMap((action) =>
      this.dataService.removeItemAsync(action.itemId)
        .pipe(
          map((_: boolean) => reloadItemsRequest())
        )),
  ));

}
