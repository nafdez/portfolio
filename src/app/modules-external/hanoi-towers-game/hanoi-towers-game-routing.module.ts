import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HanoiMainComponent } from './pages/hanoi-main/hanoi-main.component';

const routes: Routes = [
  {
    path: '',
    component: HanoiMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HanoiTowersGameRoutingModule { }
