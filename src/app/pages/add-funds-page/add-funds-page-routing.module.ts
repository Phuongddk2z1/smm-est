import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFundsPageComponent } from './add-funds-page.component';

const routes: Routes = [
  { path: '', component: AddFundsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFundsPageRoutingModule { }
