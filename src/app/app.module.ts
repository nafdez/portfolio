import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from '@modules/home/home.module';
import { ProjectsModule } from '@modules/projects/projects.module';
import { ContactModule } from '@modules/contact/contact.module';
import { AboutModule } from '@modules/about/about.module';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpService } from '@core/services/http.service';
import { UserService } from '@core/services/user.service';
import { AuthGuard } from '@core/guard/auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    ProjectsModule,
    ContactModule,
    AboutModule,
  ],
  providers: [
    HttpService,
    UserService,
    AuthGuard,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
