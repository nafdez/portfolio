import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { min } from "rxjs";

@Component({
  selector: "app-hanoi-main",
  templateUrl: "./hanoi-main.component.html",
  styles: [],
})
export class HanoiMainComponent {
  totalDiskNumber: number;

  moves: number;
  minimunMoves: number;
  basePoints: number;
  points: number;

  towers: number[][];
  diskOnHand: number | null;
  prevSelectedTower: number | undefined;

  constructor() {
    this.totalDiskNumber = 3;
    this.towers = [[1, 2, 3], [], []];
    this.diskOnHand = null;

    this.moves = 0;
    this.minimunMoves = this.calcMinimunMoves();
    this.basePoints = 150;
    this.points = this.calcPoints();
  }

  changeDifficulty(disks: number) {
    this.moves = 0;
    this.minimunMoves = this.calcMinimunMoves();
    this.totalDiskNumber = disks;
    this.points = this.calcPoints();

    for (let i = 0; i < this.towers.length; i++) {
      this.towers[i] = [];
    }

    for (let i = 1; i <= disks; i++) {
      this.towers[0].push(i);
    }
  }

  onTowerEmit(tower: number) {
    if (this.diskOnHand === null) {
      if (this.towers[tower].length > 0) {
        this.diskOnHand = this.towers[tower].shift() ?? null;
        this.prevSelectedTower = tower;
      }
    } else {
      if ((this.towers[tower].at(0) ?? 1000) >= this.diskOnHand) {
        this.towers[tower].unshift(this.diskOnHand);
        this.diskOnHand = null;

        if (this.prevSelectedTower != tower) {
          this.moves++;
        }

        this.calcWinCondition();
      } else {
        this.alertUser("You cannot move a big disk into a smaller one!");
      }

      if (this.moves > this.minimunMoves) {
        this.points = this.points - Math.floor((this.points * 35) / 100);
      }
    }
  }

  calcWinCondition() {
    // No point on doing more checks if the first tower still has disks
    if (this.towers[0].length > 0) {
      return;
    }
    let winCandidates = this.towers
      .slice(1, this.towers.length)
      .forEach((tower) => {
        console.log(tower);
        if (tower.length == this.totalDiskNumber) {
          if (this.moves == this.minimunMoves) {
            this.alertUser(
              `You won with ${this.moves} moves!\nYou earned ${this.points} points!\nYou also did a perfect game of Hanoi!\nThe minimun set of moves to complete was ${this.minimunMoves}`
            );
          } else {
            this.alertUser(
              `You won with ${this.moves} moves!\nYou earned ${this.points} points!`
            );
          }
          // Reset the game so nobody can earn more point with the same game
          this.changeDifficulty(this.totalDiskNumber);
        }
      });
  }

  calcMinimunMoves(): number {
    return Math.pow(2, this.totalDiskNumber) - 1;
  }

  calcPoints(): number {
    return this.basePoints + this.minimunMoves * 10;
  }

  alertUser(message: string) {
    alert(message);
  }
}
