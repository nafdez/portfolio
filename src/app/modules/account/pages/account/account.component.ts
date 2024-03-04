import { Component } from '@angular/core';
import { User } from '@core/models/user';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styles: [
  ]
})
export class AccountComponent {
  user: User;

  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }
}
