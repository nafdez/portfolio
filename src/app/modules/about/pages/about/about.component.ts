import { Component } from "@angular/core";
import { Skill } from "@modules/about/components/stack-card/stack-card.component";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styles: [],
})
export class AboutComponent {
  frontendSkills: Skill[] = [
    new Skill(
      "HTML5",
      "assets/images/projects/slot-machine/symbols/html_5.svg"
    ),
    new Skill("CSS3", "assets/images/projects/slot-machine/symbols/css_3.svg"),
    new Skill(
      "TypeScript",
      "assets/images/projects/slot-machine/symbols/ts.svg"
    ),
    new Skill(
      "Angular",
      "assets/images/projects/slot-machine/symbols/angular.svg"
    ),
  ];
}
