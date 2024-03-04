import { Component, ElementRef, ViewChild } from "@angular/core";
import { UserService } from "@core/services/user.service";
import { ReelComponent } from "@modules-ext/slot-machine-game/components/reel/reel.component";

@Component({
  selector: "app-slot-game",
  templateUrl: "./slot-game.component.html",
  styles: [],
})
export class SlotGameComponent {
  @ViewChild("reelOne") reel: ReelComponent | undefined;
  @ViewChild("reelTwo") reel1: ReelComponent | undefined;
  @ViewChild("reelThree") reel2: ReelComponent | undefined;
  @ViewChild("startButton") startButton: ElementRef | undefined;
  @ViewChild("stopButton") stopButton: ElementRef | undefined;

  // This bool is used to enable/disable start/stop buttons
  isStopEnabled: boolean = true;

  points: number = 500;

  // How many points this game costs
  startCost: number = 15;

  // A set of middle pics from the reels
  reelMiddlePics: Set<string> = new Set<string>();
  reelStoppedCount: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.points = this.userService.getUser().points;
  }

  ngOnDestroy(): void {
    this.userService.updateUser({ points: this.points });
  }

  // handleReelStoppedEvent gets called when a reel is stopped
  // and adds the middle pic of the reel to a set (it doesn't if is duplicated)
  handleReelStoppedEvent(pic: string) {
    this.reelMiddlePics.add(pic);
    // This count is used to know when all the reels are stopped
    this.reelStoppedCount++;
    if (this.reelStoppedCount == 3) {
      this.handleAllReelStopped();
    }
  }

  // handleAllReelStopped called when all three reels are stopped
  // based on Set size, checks how many of them are unique.
  // example: if only 1 picin set, it means all three middle pics
  // are the same
  handleAllReelStopped() {
    let result = this.reelMiddlePics.size;

    switch (result) {
      case 1:
        this.points += 100;
        break;
      case 2:
        this.points += 50;
        break;
      case 3:
        this.points -= 50;
        break;
    }

    // Check if current point are below start cost
    // and adding more points if needed
    // to avoid player from exit this game
    if (this.points <= this.startCost) {
      window.alert(
        "You should not play anymore... You have lost all the points... I am letting this slide for now and lend you more points"
      );
      this.points += 100;
    }

    // Disabling stop right now so user cannot play again until
    // all calculations are done
    this.isStopEnabled = false;
  }

  // start starts the game again and reinitializes some variables
  start() {
    if (this.isStopEnabled) {
      return;
    }
    this.points -= this.startCost;
    this.reelMiddlePics = new Set<string>();
    this.reelStoppedCount = 0;
    this.isStopEnabled = true;
    this.reel?.start();
    this.reel1?.start();
    this.reel2?.start();
  }

  // stop stops the game
  stop() {
    if (!this.isStopEnabled) {
      return;
    }
    this.reel?.stop();
    this.reel1?.stop();
    this.reel2?.stop();
  }
}
