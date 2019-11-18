import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private api: ApiService) { }

  user: User;
  users: User[];

  ngOnInit() {}

  getUser() {
    this.api.getUser(this.user.name).subscribe((data: User) =>{
      console.log(data);
      this.user = data;
    });
  }

  getUsers() {
    this.api.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
