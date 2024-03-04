import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectCardComponent } from './pages/project-card/project-card.component';

import { RockPaperScissorsGameModule } from '@modules-ext/rock-paper-scissors-game/rock-paper-scissors-game.module';
import { SlotMachineGameModule } from '@modules-ext/slot-machine-game/slot-machine-game.module';
import { MainProjectsComponent } from './pages/main-projects/main-projects.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent,
    MainProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    RockPaperScissorsGameModule,
    SlotMachineGameModule,
  ]
})
export class ProjectsModule { }
