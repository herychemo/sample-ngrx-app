import { RouterModule, Routes } from '@angular/router';
import { EffectsItemHomeComponent } from './components/effects-item-home/effects-item-home.component';

export const routes: Routes = [
  {
    path: '',
    component: EffectsItemHomeComponent
  }
];

export const ItemWithEffectsRouterModule = RouterModule.forChild(routes);
