import { Component, Input } from "@angular/core";

@Component({
  selector: "app-stack-card",
  templateUrl: "./stack-card.component.html",
  styles: [],
})
export class StackCardComponent {
  @Input() title = "";
  @Input() skills: Skill[] = [];
}

export class Skill {
  name: string;
  icon: string;

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }
}
