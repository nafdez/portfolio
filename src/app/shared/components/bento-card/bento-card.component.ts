import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "bento-card",
  templateUrl: "./bento-card.component.html",
  styles: [],
})
export class BentoCardComponent implements OnInit {
  @Input() card: Card = new Card('', '', '', '');
  @Input() size: string = 'small';
  colSpan: string = '';

  ngOnInit(): void {
      switch (this.size) {
        case 'small':
          this.colSpan = 'col-span-1';
          break;
        case 'medium':
          this.colSpan = 'col-span-2';
          break;
        case 'large':
          this.colSpan = 'col-span-3';
          break;
        default:
          this.colSpan = 'col-span-1';
      }
  }

}

export class Card {
  title: string;
  description: string;
  picture: string;
  route: string;

  constructor(
    title: string,
    description: string,
    picture: string,
    route: string
  ) {
    this.title = title;
    this.description = description;
    this.picture = picture;
    this.route = route;
  }
}
