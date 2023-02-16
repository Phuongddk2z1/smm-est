import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/updates' },
  { path: 'updates', loadChildren: () => import('./pages/updates-page/updates-page.module').then(m => m.UpdatesPageModule)},
  { path: 'orders', loadChildren: () => import('./pages/orders-page/orders-page.module').then(m => m.OrdersPageModule)},
  { path: 'services', loadChildren: () => import('./pages/services-page/services-page.module').then(m => m.ServicesPageModule)},
  { path: 'terms', loadChildren: () => import('./pages/terms-page/terms-page.module').then(m => m.TermsPageModule)},
  { path: 'support', loadChildren: () => import('./pages/support-page/support-page.module').then(m => m.SupportPageModule)},
  { path: 'addfunds', loadChildren: () => import('./pages/add-funds-page/add-funds-page.module').then(m => m.AddFundsPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
