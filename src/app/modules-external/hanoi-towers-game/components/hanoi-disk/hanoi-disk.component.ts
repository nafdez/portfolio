import { Component, Input } from "@angular/core";

@Component({
  selector: "hanoi-disk",
  templateUrl: "./hanoi-disk.component.html",
})
export class HanoiDiskComponent {
  // Default size is 3
  @Input() size: number = 3;
}
