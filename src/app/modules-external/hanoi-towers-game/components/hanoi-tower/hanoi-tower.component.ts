import { Component, Input } from '@angular/core';

@Component({
  selector: 'hanoi-tower',
  templateUrl: './hanoi-tower.component.html',
  styles: [
  ]
})
export class HanoiTowerComponent {

  @Input() disks: number[] = [];
  @Input() totalDiskNumber: number = 3;

}
