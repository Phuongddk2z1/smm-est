import { NgModule } from '@angular/core';
import { AntdZorroModule } from 'src/app/antd-zorro.module';
import { UpdatesPageRoutingModule } from './updates-page-routing.module';
import { UpdatesPageComponent } from './updates-page.component';

@NgModule({
  imports: [UpdatesPageRoutingModule, AntdZorroModule],
  declarations: [UpdatesPageComponent],
  exports: [UpdatesPageComponent]
})
export class UpdatesPageModule { }
