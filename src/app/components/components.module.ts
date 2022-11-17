import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatTooltipModule} from '@angular/material/tooltip'

import {
  NbSelectModule
} from '@nebular/theme';

import { ComboboxComponent } from './combobox/combobox.component';
import { TableSampleComponent } from './table-sample/table-sample.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ComboboxComponent, TableSampleComponent],
  exports: [ComboboxComponent,TableSampleComponent ],
  imports: [
    NbSelectModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class ComponentsModule { }
