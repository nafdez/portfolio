import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@core/services/user.service";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styles: [],
})
export class MainpageComponent implements OnInit {
  username: string = "";
  drawerState: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.userService.getUser().username;
  }

  onLogoutClick() {
    this.userService.logout().subscribe((data) => {
      this.userService.resetUser();
      window.location.reload();
    });
  }

  closeDrawer() {
    this.drawerState = false;
  }

  themeChange(theme: string) {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }
}
