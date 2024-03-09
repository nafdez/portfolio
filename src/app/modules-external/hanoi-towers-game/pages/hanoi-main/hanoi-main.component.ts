import { Component } from '@angular/core';

@Component({
  selector: 'app-hanoi-main',
  templateUrl: './hanoi-main.component.html',
  styles: [
  ]
})
export class HanoiMainComponent {

  points: number = 250;
  moves: number = 0;

  // Default size is 3 disks
  tower1: number[] = [0, 1, 2];
  tower2: number[] = [];
  tower3: number[] = []

  changeDifficulty(disks: number) {
    this.tower1 = [];
    for (let i = 0; i < disks; i++) {
      this.tower1.push(i);
    }
  }
}
