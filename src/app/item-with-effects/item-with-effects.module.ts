import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsItemHomeComponent } from './components/effects-item-home/effects-item-home.component';
import { ItemUiCoreModule } from '../item-ui-core/item-ui-core.module';
import { ItemDataModule } from '../item-data/item-data.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './state/item.effects';
import { itemsReducer } from './state/item.reducers';
import { ItemWithEffectsRouterModule } from './item-with-effects.routing';


@NgModule({
  declarations: [
    EffectsItemHomeComponent
  ],
  exports: [
    EffectsItemHomeComponent
  ],
  imports: [
    CommonModule,
    ItemWithEffectsRouterModule,
    ItemUiCoreModule,
    ItemDataModule,

    StoreModule.forFeature('withEffects', itemsReducer),
    EffectsModule.forFeature([ ItemEffects ]),
  ]
})
export class ItemWithEffectsModule { }
