import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "hanoi-disk",
  templateUrl: "./hanoi-disk.component.html",
})
export class HanoiDiskComponent implements  OnChanges {
  // Default size is 3
  @Input() size: number = 3;
  @Input() maxSize: number = 3;
  width: any;

  ngOnChanges(changes: SimpleChanges): void {
    let result = (this.size / this.maxSize) * 100;
    this.width = { width: result + "%" };
  }
}
