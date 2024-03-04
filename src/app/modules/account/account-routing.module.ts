import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAccountComponent } from './pages/main-account/main-account.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: MainAccountComponent,
    children: [
      {
        path: '',
        component: AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
