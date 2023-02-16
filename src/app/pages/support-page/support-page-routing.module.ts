import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupportPageComponent } from './support-page.component';

const routes: Routes = [
  { path: '', component: SupportPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportPageRoutingModule { }
