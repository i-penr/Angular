import { GetComponent } from './pages/get/get.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginSuccessComponent } from './pages/login-success/login-success.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {
    path: 'get',
    component: GetComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'success',
    component: LoginSuccessComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }