import { NgModule } from '@angular/core';
import { AntdZorroModule } from 'src/app/antd-zorro.module';
import { TermsPageRoutingModule } from './terms-page-routing.module';
import { TermsPageComponent } from './terms-page.component';



@NgModule({
  imports: [TermsPageRoutingModule, AntdZorroModule],
  declarations: [TermsPageComponent],
  exports: [TermsPageComponent]
})
export class TermsPageModule { }
