import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsGameComponent } from './pages/rps-game/rps-game.component';

const routes: Routes = [
  {
    path: '',
    component: RpsGameComponent,
  },
  {
    path: ':name',
    component: RpsGameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RockPaperScissorsGameRoutingModule { }
