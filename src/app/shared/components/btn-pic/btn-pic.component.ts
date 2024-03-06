import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-pic',
  templateUrl: './btn-pic.component.html',
  styles: [
  ]
})
export class BtnPicComponent {
  @Input() pic: string = '';
  @Input() text: string = '';
}
