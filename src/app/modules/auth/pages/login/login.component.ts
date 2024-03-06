import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "@core/models/user";
import { UserService } from "@core/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  hasToRemember: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onLoginClick() {
    if (this.username == "" || this.password == "") {
      return;
    }

    if (this.hasToRemember) {
      // Remember
    }

    this.userService.login(
      { username: this.username, password: this.password },
      this,
      (ctx: any, user: User) => {
        if (user.username == '') {
          alert('Username or password incorrect')
          return;
        }
        ctx.router.navigate([''])
      }
    );
  }
}
