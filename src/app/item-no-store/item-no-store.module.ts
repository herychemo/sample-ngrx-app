import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleItemHomeComponent } from './components/simple-item-home/simple-item-home.component';
import { ItemUiCoreModule } from '../item-ui-core/item-ui-core.module';
import { ItemDataModule } from '../item-data/item-data.module';
import { ItemNoStoreRouterModule } from './item-no-store.routing';


@NgModule({
  declarations: [
    SimpleItemHomeComponent
  ],
  exports: [
    SimpleItemHomeComponent
  ],
  imports: [
    CommonModule,
    ItemNoStoreRouterModule,
    ItemUiCoreModule,
    ItemDataModule
  ]
})
export class ItemNoStoreModule { }
