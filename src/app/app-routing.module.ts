import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/updates' },
  { path: 'updates', loadChildren: () => import('./pages/updates-page/updates-page.module').then(m => m.UpdatesPageModule)},
  { path: 'orders', loadChildren: () => import('./pages/orders-page/orders-page.module').then(m => m.OrdersPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
