import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {
  NbSelectModule
} from '@nebular/theme';

import { ComboboxComponent } from './combobox/combobox.component';

@NgModule({
  declarations: [ComboboxComponent],
  exports: [ComboboxComponent],
  imports: [
    NbSelectModule,
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
