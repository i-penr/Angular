import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GetComponent } from './pages/get/get.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    LoginComponent,
    LoginSuccessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
