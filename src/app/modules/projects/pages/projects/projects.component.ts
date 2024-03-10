import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styles: [],
})
export class ProjectsComponent {
  projects: Project[] = [
    new Project(
      "Rock paper scissors",
      "Rock paper scissors clone in angular.",
      "assets/images/projects/rock-paper-scissors/proj-pic.png",
      "rps-game"
    ),
    new Project(
      "Hanoi towers",
      "Easy points! Just move disks from one tower to another.",
      "assets/images/projects/hanoi-towers/proj-pic.png",
      "hanoi-game"
    ),
    new Project(
      "Slot Machine",
      "Feel bored when you're away from the bar? Lose all your points playing slot machine.",
      "assets/images/projects/slot-machine/proj-pic.png",
      "slot-game"
    ),
    new Project(
      "Filler project",
      "Just a filler project",
      "assets/images/projects/rock-paper-scissors/proj-pic.png",
      "a"
    ),
    new Project(
      "Filler project",
      "Just a filler project",
      "assets/images/projects/rock-paper-scissors/proj-pic.png",
      "a"
    ),
    new Project(
      "Filler project",
      "Just a filler project",
      "assets/images/projects/rock-paper-scissors/proj-pic.png",
      "a"
    ),
    new Project(
      "Filler project",
      "Just a filler project",
      "assets/images/projects/rock-paper-scissors/proj-pic.png",
      "a"
    ),
  ];
}

export class Project {
  title: string;
  description: string;
  picture: string;
  route: string;

  constructor(
    title: string,
    description: string,
    picture: string,
    route: string
  ) {
    this.title = title;
    this.description = description;
    this.picture = picture;
    this.route = route;
  }
}
