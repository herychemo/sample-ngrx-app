import { StoreItemHomeComponent } from './components/store-item-home/store-item-home.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: StoreItemHomeComponent
  }
];

export const ItemWithStoreRouterModule = RouterModule.forChild(routes);
