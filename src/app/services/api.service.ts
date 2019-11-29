import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from "./../classes/user";
import { Book } from "./../classes/book";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private address = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUser(param: string) { // No configurado
    return this.http.get(`${this.address}user/${param}`);
  }

  findBookByParam(param1: string, param2: string) {
    return this.http.get(`${this.address}book/${param2}/${param1}`);
  }

  getUsers() {
    return this.http.get(`${this.address}user/`);
  }

  getBooks() {
    return this.http.get(`${this.address}book/`);
  }

  login(mail: string, password: string) {
    return this.http.post(`${this.address}user/${mail}`, { password });
  }

  loggedIn() {
    return (localStorage.getItem('token') != null);
  }

  register(name: string, surname: string, mail:string, password: string, phone: string) {
    return this.http.post(`${this.address}user/`, { name, surname, mail, password, phone });
  }

}
