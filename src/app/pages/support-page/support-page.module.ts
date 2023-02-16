import { NgModule } from '@angular/core';
import { AntdZorroModule } from 'src/app/antd-zorro.module';
import { SupportPageRoutingModule } from './support-page-routing.module';
import { SupportPageComponent } from './support-page.component';
@NgModule({
  imports: [SupportPageRoutingModule, AntdZorroModule],
  declarations: [SupportPageComponent],
  exports: [SupportPageComponent]
})
export class SupportPageModule { }
