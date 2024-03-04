import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [],
})
export class ProjectsComponent {
  projects: Project[] = [
    new Project(
      'Rock-paper-scissors',
      'Rock paper scissors! now in Vision Pro',
      'assets/images/projects/rock-paper-scissors/proj-pic.webp',
      'rps-game'
    ),
    new Project(
      'Rock-paper-scissors',
      'Rock paper scissors! now in Vision Pro',
      'assets/images/projects/rock-paper-scissors/proj-pic.webp',
      'a'
    ),
    new Project(
      'Rock-paper-scissors',
      'Rock paper scissors! now in Vision Pro',
      'assets/images/projects/rock-paper-scissors/proj-pic.webp',
      'a'
    ),
    new Project(
      'Rock-paper-scissors',
      'Rock paper scissors! now in Vision Pro',
      'assets/images/projects/rock-paper-scissors/proj-pic.webp',
      'a'
    ),
    new Project(
      'Rock-paper-scissors',
      'Rock paper scissors! now in Vision Pro',
      'assets/images/projects/rock-paper-scissors/proj-pic.webp',
      'a'
    ),
    new Project(
      'Rock-paper-scissors',
      'Rock paper scissors! now in Vision Pro',
      'assets/images/projects/rock-paper-scissors/proj-pic.webp',
      'a'
    ),
    new Project(
      'Hola',
      'Mierda',
      'assets/images/projects/slot-machine/proj-pic.webp',
      'slot-game'
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
