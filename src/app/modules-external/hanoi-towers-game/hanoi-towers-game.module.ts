import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HanoiTowersGameRoutingModule } from './hanoi-towers-game-routing.module';
import { HanoiMainComponent } from './pages/hanoi-main/hanoi-main.component';
import { HanoiDiskComponent } from './components/hanoi-disk/hanoi-disk.component';
import { HanoiTowerComponent } from './components/hanoi-tower/hanoi-tower.component';


@NgModule({
  declarations: [
    HanoiMainComponent,
    HanoiDiskComponent,
    HanoiTowerComponent
  ],
  imports: [
    CommonModule,
    HanoiTowersGameRoutingModule
  ]
})
export class HanoiTowersGameModule { }
