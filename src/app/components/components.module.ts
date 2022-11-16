import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';
import {
  NbSelectModule
} from '@nebular/theme';

import { ComboboxComponent } from './combobox/combobox.component';
import { TableSampleComponent } from './table-sample/table-sample.component';

@NgModule({
  declarations: [ComboboxComponent, TableSampleComponent],
  exports: [ComboboxComponent,TableSampleComponent ],
  imports: [
    NbSelectModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
