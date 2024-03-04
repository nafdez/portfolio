import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlotMachineGameRoutingModule } from './slot-machine-game-routing.module';
import { SlotGameComponent } from './pages/slot-game/slot-game.component';
import { ReelComponent } from './components/reel/reel.component';


@NgModule({
  declarations: [
    SlotGameComponent,
    ReelComponent
  ],
  imports: [
    CommonModule,
    SlotMachineGameRoutingModule
  ]
})
export class SlotMachineGameModule { }
