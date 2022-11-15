import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
   ComponentsModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
