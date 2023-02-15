import { NgModule } from '@angular/core';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { CommonModule } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

@NgModule({
  declarations: [],
  exports: [
    NzButtonModule,
    NzIconModule,
    CommonModule,
    NzBadgeModule,
    NzGridModule,
    NzToolTipModule,
    NzDividerModule,
    NzPaginationModule,
    NzModalModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzTypographyModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzEmptyModule,
    NzUploadModule,
    NzTableModule,
    NzTabsModule,
    NzRadioModule,
    NzTreeSelectModule,
    NzFormModule,
    NzSpinModule,
    NzAlertModule,
    NzDropDownModule,
    NzTimePickerModule,
    NzBreadCrumbModule,
    NzTagModule,
    NzTransferModule,
    NzInputNumberModule,
    DragDropModule,
    NzStatisticModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class AntdZorroModule {}
