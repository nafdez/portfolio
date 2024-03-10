import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "hanoi-disk",
  templateUrl: "./hanoi-disk.component.html",
})
export class HanoiDiskComponent implements  OnChanges {
  // Default size is 3
  @Input() size: number = 3;
  @Input() maxSize: number = 3;
  style: any;

  colors= [
    '#ee82ee',
    '#4b0082',
    '#0000ff',
    '#008000',
    '#ffff00',
    '#ffa500',
    '#ff0000',
    '#ff6781',
    '#0f8974',
    '#000000',
  ]

  ngOnChanges(changes: SimpleChanges): void {
    let result = (this.size / this.maxSize) * 100;
    this.style = { width: result + "%", 'background-color': this.colors.at(this.size - 1) };
  }
}
