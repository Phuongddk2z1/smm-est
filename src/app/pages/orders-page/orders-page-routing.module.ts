import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersPageComponent } from './orders-page.component';

const routes: Routes = [
  { path: '', component: OrdersPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersPageRoutingModule { }
