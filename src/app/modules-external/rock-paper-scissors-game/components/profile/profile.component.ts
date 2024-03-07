import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  @Input() isAi: boolean = true;
  aiProfilePics: string[] = [
    "assets/images/projects/rock-paper-scissors/profiles/Luke.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Matthew.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Liam.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Gabriel.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Aiden.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Victoria.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Carter.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Caleb.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Emma.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Caden.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Oliver.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Aria.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Nathan.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Evelyn.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Elijah.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Scarlett.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Zoe.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Chloe.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Jackson.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Harper.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Olivia.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Mia.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Sophia.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Grace.webp",
    "assets/images/projects/rock-paper-scissors/profiles/James.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Abigail.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Benjamin.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Lucas.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Henry.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Isaac.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Emily.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Mason.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Dylan.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Sebastian.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Amelia.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Ava.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Owen.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Noah.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Alexander.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Lily.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Ethan.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Samuel.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Daniel.webp",
    "assets/images/projects/rock-paper-scissors/profiles/William.webp",
    "assets/images/projects/rock-paper-scissors/profiles/Isabella.webp",
  ];

  pic: string = "assets/images/ai-profile-pic/William.web"; // By default
  name: string = "William";
  @Input() username: string | null = null;

  ngOnInit() {
    this.randomAiPic();

    if (this.username != null) {
      this.name = this.username;
      return
    }

    this.name = this.getAiName(this.pic);
  }

  randomAiPic() {
    const randomIndex = Math.floor(Math.random() * this.aiProfilePics.length);
    this.pic = this.aiProfilePics[randomIndex];
  }

  getAiName(imgPath: string): string {
    const nombreConExtension = imgPath.split("/").pop(); // Obtiene el nombre con extensión
    if (nombreConExtension) {
      return nombreConExtension.split(".").slice(0, -1).join("."); // Elimina la extensión
    } else {
      return "";
    }
  }
}
