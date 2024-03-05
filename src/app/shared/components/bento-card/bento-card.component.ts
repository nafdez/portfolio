import { Component, Input } from "@angular/core";

@Component({
  selector: "bento-card",
  templateUrl: "./bento-card.component.html",
  styles: [],
})
export class BentoCardComponent {
  @Input() card: Card = new Card("", "", "", "");
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
