import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { MainAccountComponent } from './pages/main-account/main-account.component';


@NgModule({
  declarations: [
    AccountComponent,
    MainAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
