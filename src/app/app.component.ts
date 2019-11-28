import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./classes/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Página básica Angular';

  constructor(private router: Router) {}

  toGet() {
    this.router.navigateByUrl('/get');
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }

  toRegister() {
    this.router.navigateByUrl('/register');
  }

  toBooks() {
    this.router.navigateByUrl('/books');
  }

}
