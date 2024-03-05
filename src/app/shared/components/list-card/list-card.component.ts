import { Component, Input } from "@angular/core";

@Component({
  selector: "list-card",
  templateUrl: "./list-card.component.html",
  styles: [],
})
export class ListCardComponent {
  @Input() title = "";
  @Input() elements: ListCardElement[] = [];
}

export class ListCardElement {
  name: string;
  icon: string;

  constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }
}
