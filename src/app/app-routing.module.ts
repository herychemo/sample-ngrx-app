import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleItemHomeComponent} from './components/item/simple-item-home/simple-item-home.component';

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
