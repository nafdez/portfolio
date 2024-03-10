import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "hanoi-tower",
  templateUrl: "./hanoi-tower.component.html",
  styles: [],
})
export class HanoiTowerComponent {
  @Output() towerChange = new EventEmitter<number[]>();
  @Input() disks: number[] = [];
  @Input() totalDiskNumber: number = 3;

  @Output() towerEmitter: EventEmitter<undefined> =
    new EventEmitter<undefined>();

  onTowerClick() {
    let firstDisk = document.getElementsByTagName("hanoi-disk").item(0);
    if (firstDisk == null) {
      return;
    }
    // firstDisk.classList.add('bg-yellow-500');
    this.towerEmitter.emit();
  }
}
