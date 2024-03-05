import { Component } from "@angular/core";
import { Card } from "@shared/components/bento-card/bento-card.component";
import { ListCardElement } from "@shared/components/list-card/list-card.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {

  // Projects
  project1 = new Card('Rock Paper Scissors', 'Small project for PMDM', 'assets/images/projects/rock-paper-scissors/proj-pic.webp', 'projects/rps-game')

  frontendSkills: ListCardElement[] = [
    new ListCardElement(
      "HTML5",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/html_5.svg"
    ),
    new ListCardElement(
      "CSS3",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/css_3.svg"
    ),
    new ListCardElement(
      "Tailwind CSS",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/tailwindcss.svg"
    ),
    new ListCardElement(
      "TypeScript",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/typescript.svg"
    ),
    new ListCardElement(
      "Angular",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/angular.svg"
    ),
  ];

  backendSkills: ListCardElement[] = [
    new ListCardElement(
      "Java",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/java.svg"
    ),
    new ListCardElement(
      "Go",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/golang.svg"
    ),
    new ListCardElement(
      "C#",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/csharp.svg"
    ),
  ];

  dbSkills: ListCardElement[] = [
    new ListCardElement(
      "MySQL",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/mysql.svg"
    ),
    new ListCardElement(
      "MariaDB",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/mariadb.svg"
    ),
    new ListCardElement(
      "MongoDB",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/mongodb.svg"
    ),
  ];
  otherSkills: ListCardElement[] = [
    new ListCardElement(
      "Linux",
      "https://cdn.worldvectorlogo.com/logos/tux.svg"
    ),
    new ListCardElement(
      "Git",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/git.svg"
    ),
    new ListCardElement(
      "Android (Java)",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/android.svg"
    ),
    new ListCardElement(
      "Bash",
      "https://raw.githubusercontent.com/nafdez/nafdez/main/icons/bash.svg"
    ),
  ];
}
