import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RegisterRequest } from "@core/models/requests/register-request";
import { User } from "@core/models/user";
import { UserService } from "@core/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styles: [],
})
export class SignupComponent {
  username: string = "";
  email: string = "";
  name: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router) {}

  onSignUpClick() {
    let request: RegisterRequest = {
      username: this.username,
      email: this.email,
      name: this.name,
      password: this.password,
    };

    this.userService.register(request, this, (ctx: any, user: User) => {
      if (user.username == "") {
        alert("Unable to register");
        return;
      }
      ctx.router.navigate(['']);
    });
  }
}
