import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleItemHomeComponent} from './simple/components/simple-item-home/simple-item-home.component';
import {StoreItemHomeComponent} from './store/components/store-item-home/store-item-home.component';
import {EffectsItemHomeComponent} from './effects/components/effects-item-home/effects-item-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'standard',
    pathMatch: 'full'
  },
  {
    component: SimpleItemHomeComponent,
    path: 'standard'
  },
  {
    component: StoreItemHomeComponent,
    path: 'store'
  },
  {
    component: EffectsItemHomeComponent,
    path: 'effects'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'standard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
