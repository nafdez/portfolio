import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-reel",
  templateUrl: "./reel.component.html",
  styles: [],
})
export class ReelComponent {
  paths: Queue<string | undefined> = new Queue();
  pathsRaw: string[] = [
    "assets/images/projects/slot-machine/symbols/java.svg",
    "assets/images/projects/slot-machine/symbols/angular.svg",
    "assets/images/projects/slot-machine/symbols/html_5.svg",
    "assets/images/projects/slot-machine/symbols/js.svg",
    "assets/images/projects/slot-machine/symbols/php.svg",
    "assets/images/projects/slot-machine/symbols/python.svg",
    "assets/images/projects/slot-machine/symbols/swift.svg",
    "assets/images/projects/slot-machine/symbols/css_3.svg",
    "assets/images/projects/slot-machine/symbols/react.svg",
    "assets/images/projects/slot-machine/symbols/vs_code.svg",
    "assets/images/projects/slot-machine/symbols/node_js.svg",
    "assets/images/projects/slot-machine/symbols/mariadb.svg",
    "assets/images/projects/slot-machine/symbols/mongodb.svg",
    "assets/images/projects/slot-machine/symbols/mysql.svg",
    "https://cdn.worldvectorlogo.com/logos/rust.svg"
  ];

  imgSrcTop: string | undefined = this.pathsRaw[0];
  imgSrc: string | undefined = this.pathsRaw[1];
  imgSrcBottom: string | undefined = this.pathsRaw[2];
  delay1: number = 350;
  delay2: number = 350;
  delay3: number = 350;

  randomPic: number = 0;

  @Input() isStopped: boolean = false;

  // Event gets called when reel is stopped and emits the middle pic path
  @Output() middlePicEvent: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.pathsRaw.forEach((item) => {
      this.paths.enqueue(item);
    });
    this.start();
  }

  start() {
    this.isStopped = false;
    this.startFirst(); // TOP
    this.startSecond(); // Middle
    this.startThird(); // Bottom
  }

  stop() {
    this.isStopped = true;
  }

  /*
    Thinking on switch to an array instead of a Queue
    no idea what I was thinking about when I wrote this
  */

  async startFirst() {
    this.delay1 = Math.floor(Math.random() * 250 + 100);
    while (!this.isStopped) {
      this.imgSrcTop = this.paths.dequeue();
      this.paths.enqueue(this.imgSrcTop);
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), this.delay3)
      );
    }
  }

  async startSecond() {
    // Calculate delay
    this.delay2 = Math.floor(Math.random() * 250 + 100);

    while (!this.isStopped) {
      // Get next pic
      this.imgSrc = this.paths.dequeue();

      // Add previous pic to queue
      this.paths.enqueue(this.imgSrc);

      // Just wait
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), this.delay3)
      );
    }
    // Emit the current picture
    this.middlePicEvent.emit(this.imgSrc);
  }

  async startThird() {
    this.delay3 = Math.floor(Math.random() * 250 + 100);
    while (!this.isStopped) {
      this.imgSrcBottom = this.paths.dequeue();
      this.paths.enqueue(this.imgSrcBottom);
      await new Promise<void>((resolve) =>
        setTimeout(() => resolve(), this.delay3)
      );
    }
  }
}

class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
