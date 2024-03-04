import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RockPaperScissorsGameRoutingModule } from './rock-paper-scissors-game-routing.module';
import { RpsGameComponent } from './pages/rps-game/rps-game.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HealthBarComponent } from './components/health-bar/health-bar.component';


@NgModule({
  declarations: [
    RpsGameComponent,
    ProfileComponent,
    HealthBarComponent
  ],
  imports: [
    CommonModule,
    RockPaperScissorsGameRoutingModule
  ]
})
export class RockPaperScissorsGameModule { }
