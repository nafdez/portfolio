import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hanoi-main',
  templateUrl: './hanoi-main.component.html',
  styles: [
  ]
})
export class HanoiMainComponent {

  totalDiskNumber: number = 3;

  points: number = 250;
  moves: number = 0;
  minimunMoves: number = 0;

  // Default size is 3 disks
  tower1: number[] = [1, 2, 3];
  tower2: number[] = [];
  tower3: number[] = []

  changeDifficulty(disks: number) {
    this.minimunMoves = Math.pow(2, this.totalDiskNumber) - 1;
    this.totalDiskNumber = disks;
    this.tower1 = [];
    for (let i = 1; i <= disks; i++) {
      this.tower1.push(i);
    }
  }
}
