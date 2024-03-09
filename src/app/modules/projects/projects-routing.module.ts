import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { RockPaperScissorsGameModule } from "@modules-ext/rock-paper-scissors-game/rock-paper-scissors-game.module";
import { SlotMachineGameModule } from "@modules-ext/slot-machine-game/slot-machine-game.module";
import { MainProjectsComponent } from "./pages/main-projects/main-projects.component";
import { HanoiTowersGameModule } from "@modules-ext/hanoi-towers-game/hanoi-towers-game.module";

const routes: Routes = [
  {
    path: "",
    component: MainProjectsComponent,
    children: [
      {
        path: "",
        component: ProjectsComponent,
      },
      {
        path: "rps-game",
        loadChildren: () =>
          import(
            "@modules-ext/rock-paper-scissors-game/rock-paper-scissors-game.module"
          ).then(
            (m): typeof RockPaperScissorsGameModule =>
              m.RockPaperScissorsGameModule,
          ),
      },
      {
        path: "slot-game",
        loadChildren: () =>
          import(
            "@modules-ext/slot-machine-game/slot-machine-game.module"
          ).then((m): typeof SlotMachineGameModule => m.SlotMachineGameModule),
      },
      {
        path: "hanoi-game",
        loadChildren: () =>
          import(
            "@modules-ext/hanoi-towers-game/hanoi-towers-game.module"
          ).then((m): typeof HanoiTowersGameModule => m.HanoiTowersGameModule),
      },
      {
        path: "**",
        redirectTo: "",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
