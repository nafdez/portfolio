import { Component } from "@angular/core";
import { UserService } from "@core/services/user.service";
import { Card } from "@shared/components/bento-card/bento-card.component";
import { ListCardElement } from "@shared/components/list-card/list-card.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {
  username: string = "";

  constructor(private userService: UserService) {
    // Only used sending routing parameters to rps game
    this.username = userService.getUser().username;
  }

  // Just placeholders

  // Projects
  project1 = new Card(
    $localize`Rock Paper Scissors`,
    $localize`Rock paper scissors clone in angular.`,
    "assets/images/projects/rock-paper-scissors/proj-pic.png",
    "projects/rps-game"
  );
  project2 = new Card(
    $localize`Slot machine`,
    $localize`Feel bored when you're away from the bar? Lose all your points playing slot machine.`,
    "assets/images/projects/slot-machine/proj-pic.png",
    "projects/slot-game"
  );
  project3 = new Card(
    $localize`Hanoi tower`,
    $localize`Easy points! Just move disks from one tower to another.`,
    "assets/images/projects/hanoi-towers/proj-pic.png",
    "projects/hanoi-game"
  );

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
