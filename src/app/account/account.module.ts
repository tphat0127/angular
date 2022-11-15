import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';
import { AccountRoundtingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoundtingModule
  ]
})
export class AccountModule { }
