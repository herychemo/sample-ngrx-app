import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ItemFormComponent } from './components/shared/item/item-form/item-form.component';
import { SimpleItemHomeComponent } from './simple/components/simple-item-home/simple-item-home.component';
import { ItemListComponent } from './components/shared/item/item-list/item-list.component';
import { ItemEditRowComponent } from './components/shared/item/item-edit-row/item-edit-row.component';
import { ItemViewRowComponent } from './components/shared/item/item-view-row/item-view-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreItemHomeComponent } from './store/components/store-item-home/store-item-home.component';
import { EffectsItemHomeComponent } from './effects/components/effects-item-home/effects-item-home.component';
import { StoreModule } from '@ngrx/store';
import {editItemIdReducer, itemsReducer} from './item.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ItemEffects} from './effects/item.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemFormComponent,
    SimpleItemHomeComponent,
    ItemListComponent,
    ItemEditRowComponent,
    ItemViewRowComponent,
    StoreItemHomeComponent,
    EffectsItemHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      items: itemsReducer,
      editItemId: editItemIdReducer
    }),
    EffectsModule.forRoot([ ItemEffects ]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
