import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotGameComponent } from './pages/slot-game/slot-game.component';

const routes: Routes = [
  {
    path: '',
    component: SlotGameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlotMachineGameRoutingModule { }
