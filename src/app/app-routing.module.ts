import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainpageComponent } from "./layout/mainpage/mainpage.component";
import { HomeModule } from "@modules/home/home.module";
import { ProjectsModule } from "@modules/projects/projects.module";
import { ContactModule } from "@modules/contact/contact.module";
import { AuthModule } from "@modules/auth/auth.module";
import { AccountModule } from "@modules/account/account.module";
import { AuthGuard } from "@core/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MainpageComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("@modules/home/home.module").then(
            (m): typeof HomeModule => m.HomeModule
          ),
      },
      {
        path: "projects",
        loadChildren: () =>
          import("@modules/projects/projects.module").then(
            (m): typeof ProjectsModule => m.ProjectsModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("@modules/contact/contact.module").then(
            (m): typeof ContactModule => m.ContactModule
          ),
      },
      {
        path: "auth",
        loadChildren: () =>
          import("@modules/auth/auth.module").then(
            (m): typeof AuthModule => m.AuthModule
          ),
      },
      {
        path: "account",
        loadChildren: () =>
          import("@modules/account/account.module").then(
            (m): typeof AccountModule => m.AccountModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
