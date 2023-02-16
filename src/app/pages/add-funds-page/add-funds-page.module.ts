import { NgModule } from '@angular/core';
import { AntdZorroModule } from 'src/app/antd-zorro.module';
import { AddFundsPageRoutingModule } from './add-funds-page-routing.module';
import { AddFundsPageComponent } from './add-funds-page.component';

@NgModule({
  imports: [AddFundsPageRoutingModule, AntdZorroModule],
  declarations: [AddFundsPageComponent],
  exports: [AddFundsPageComponent]
})
export class AddFundsPageModule { }
