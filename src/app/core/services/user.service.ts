import { Injectable } from "@angular/core";
import { LoginRequest } from "@core/models/requests/login-request";
import { RegisterRequest } from "@core/models/requests/register-request";
import { UpdateRequest } from "@core/models/requests/update-request";
import { User } from "@core/models/user";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // User info
  private user: User;

  // For reseting purposes
  private blankUser: User = {
    _id: "",
    username: "",
    email: "",
    name: "",
    role: "",
    token: "",
    points: 500,
    since: "",
    last_seen: "",
  };

  // Injecting HttpService
  constructor(private http: HttpService) {
    let localUser = localStorage.getItem("user");
    this.user = localUser != null ? JSON.parse(localUser) : this.blankUser;
  }

  public isAuthenticated(): boolean {
    return this.user != this.blankUser;
  }

  public getUser(): User {
    return this.user;
  }

  public resetUser(): void {
    // Reinitializing user
    this.user = this.blankUser;
    localStorage.removeItem("user");
  }

  public getBlankUser(): User {
    return this.blankUser;
  }

  public login(
    loginReq: LoginRequest,
    context: any,
    callback: (context: any, user: User) => void
  ) {
    this.http.authUser(loginReq).subscribe((response: any) => {
      this.user.token = response["token"];
      this.fetchUser(context, callback);
    });
  }

  public logout(): Observable<any> {
    return this.http.logout(this.user.token);
  }

  public register(
    registerReq: RegisterRequest,
    context: any,
    callback: (context: any, user: User) => void
  ) {
    this.http.registerUser(registerReq).subscribe((response: any) => {
      this.user.token = response["token"];
      this.fetchUser(context, callback);
    });
  }

  public fetchUser(context: any, callback: (context: any, user: User) => void) {
    this.http.fetchUser(this.user.token).subscribe((response: User) => {
      localStorage.setItem("user", JSON.stringify(response));
      this.user = response;
      callback(context, this.user);
    });
  }

  public updateUser(updateReq: UpdateRequest) {
    this.http.updateUser(updateReq, this.user.token).subscribe(() => {
      this.user.points = updateReq.points;
    });
  }

  // No plan to implement this on short plazo
  public removeAccount() {}

  private loginWithToken() {}
}
