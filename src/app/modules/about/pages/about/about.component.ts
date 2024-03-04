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
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/html_5.svg"
    ),
    new Skill(
      "CSS3",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/css_3.svg"
    ),
    new Skill(
      "Tailwind CSS",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/tailwindcss.svg"
    ),
    new Skill(
      "TypeScript",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/typescript.svg"
    ),
    new Skill(
      "Angular",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/angular.svg"
    ),
  ];

  backendSkills: Skill[] = [
    new Skill(
      "Java",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/java.svg"
    ),
    new Skill(
      "Go",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/golang.svg"
    ),
    new Skill(
      "C#",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/csharp.svg"
    ),
  ];

  dbSkills: Skill[] = [
    new Skill(
      "MySQL",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/mysql.svg"
    ),
    new Skill(
      "MariaDB",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/mariadb.svg"
    ),
    new Skill(
      "MongoDB",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/mongodb.svg"
    ),
  ];
  otherSkills: Skill[] = [
    new Skill(
      "Linux",
      "https://cdn.worldvectorlogo.com/logos/tux.svg"
    ),
    new Skill(
      "Git",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/git.svg"
    ),
    new Skill(
      "Android (Java)",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/android.svg"
    ),
    new Skill(
      "Bash",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/bash.svg"
    ),
  ];
}
