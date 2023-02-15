import { NgModule } from '@angular/core';
import { AntdZorroModule } from 'src/app/antd-zorro.module';
import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ServicesPageComponent } from './services-page.component';

@NgModule({
  imports: [ServicesPageRoutingModule, AntdZorroModule],
  declarations: [ServicesPageComponent],
  exports: [ServicesPageComponent]
})
export class ServicesPageModule { }
