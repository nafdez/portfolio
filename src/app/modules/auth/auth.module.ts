import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

import { HttpService } from '@core/services/http.service';
import { UserService } from '@core/services/user.service';
import { CoreModule } from '@core/core.module';
import { MainAuthComponent } from './pages/main-auth/main-auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    MainAuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    CoreModule,
  ],
  providers: [
    HttpService,
    UserService,
  ] 
})
export class AuthModule { }
