import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
    ErrorComponent,
    NavbarComponent,
    LoadingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(environment.toastConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
