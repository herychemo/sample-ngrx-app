import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemEditRowComponent } from './components/item-edit-row/item-edit-row.component';
import { ItemViewRowComponent } from './components/item-view-row/item-view-row.component';


@NgModule({
  declarations: [
    ItemFormComponent,
    ItemListComponent,
    ItemEditRowComponent,
    ItemViewRowComponent,
  ],
  exports: [
    ItemFormComponent,
    ItemListComponent,
    ItemEditRowComponent,
    ItemViewRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ItemUiCoreModule { }
