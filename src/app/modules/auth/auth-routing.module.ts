import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { MainAuthComponent } from "./pages/main-auth/main-auth.component";

const routes: Routes = [
  {
    path: "",
    component: MainAuthComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
