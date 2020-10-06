import {RouterModule, Routes} from '@angular/router';
import {SimpleItemHomeComponent} from './components/simple-item-home/simple-item-home.component';

export const routes: Routes = [
  {
    path: '',
    component: SimpleItemHomeComponent
  }
];

export const ItemNoStoreRouterModule = RouterModule.forChild(routes);
