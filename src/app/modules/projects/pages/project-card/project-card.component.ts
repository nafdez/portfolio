import { Component, Input } from '@angular/core';
import { Project } from '../projects/projects.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styles: [],
})
export class ProjectCardComponent {
  @Input() project: Project = new Project('', '', '', '');
}
