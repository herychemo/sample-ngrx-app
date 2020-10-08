import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItemHomeComponent } from './components/store-item-home/store-item-home.component';
import { ItemUiCoreModule } from '../item-ui-core/item-ui-core.module';
import { StoreModule } from '@ngrx/store';
import { itemsReducer } from './state/item.reducers';
import { ItemWithStoreRouterModule } from './item-with-store.routing';


@NgModule({
  declarations: [
    StoreItemHomeComponent,
  ],
  exports: [
    StoreItemHomeComponent
  ],
  imports: [
    CommonModule,
    ItemWithStoreRouterModule,
    ItemUiCoreModule,

    StoreModule.forFeature('withStore', itemsReducer),
  ]
})
export class ItemWithStoreModule { }
