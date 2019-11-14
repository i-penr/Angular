import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor() { }
  // No sé si esto es necesario para redirigir a otra página desde el login pero bueno
  ngOnInit() {
  }

}
