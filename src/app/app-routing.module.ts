import { GetComponent } from './pages/get/get.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { GetBookComponent } from './pages/get-book/get-book.component';
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
    path: 'books',
    component: GetBookComponent,
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