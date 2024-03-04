import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-health-bar",
  templateUrl: "./health-bar.component.html",
  styleUrls: ["./health-bar.component.css"],
})
export class HealthBarComponent {
  @Input() health: number = 5;
  filledHeart: String = "assets/images/projects/rock-paper-scissors/heart-filled.webp";
  voidHeart: String = "assets/images/projects/rock-paper-scissors/heart-void.webp";

  @HostBinding("style.--target-time")
  private targetTime: string = "1s";

  ngOnInit(): void {
    this.calculateTargetTime();
  }

  async calculateTargetTime() {
    while (true) {
      this.targetTime = this.health / 5 + "s";
      await this.sleep(100);
    }
  }

  sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
