import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";
import { ApiService } from '../../services/api.service';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./get.component.css'],
})
export class GetComponent implements OnInit {

  constructor(private api: ApiService, private modalService: NgbModal) { }

  users: User[];

  ngOnInit() { }


  open (content) {
    this.modalService.open(content);
  }
  getUsers() {
    this.api.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
