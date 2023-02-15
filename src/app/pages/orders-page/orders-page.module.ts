import { NgModule } from '@angular/core';
import { AntdZorroModule } from 'src/app/antd-zorro.module';
import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { OrdersPageComponent } from './orders-page.component';
@NgModule({
  imports: [OrdersPageRoutingModule, AntdZorroModule],
  declarations: [OrdersPageComponent],
  exports: [OrdersPageComponent]
})
export class OrdersPageModule { }
