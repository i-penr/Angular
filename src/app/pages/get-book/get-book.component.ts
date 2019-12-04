import { Component, OnInit } from '@angular/core';
import { Book } from '../../classes/book';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'ngbd-alert-basic',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  constructor(private api: ApiService) { }

  books: Book[];
  bookSelected: string;
  paramSelected: string = 'title';
  found = true;
  bookFound: Book;
  activated;

  ngOnInit() {
    this.api.getBooks()
     .subscribe((data: Book[]) => {
       this.books = data;
     });
     this.activated = false;
  }

  findBook() {
    this.api.findBookByParam(this.bookSelected, this.paramSelected)
     .subscribe((data: Book) => {
       console.log(data);
       this.bookFound = data;
     }, err => this.found = false);
  }

  getBooks() {
    this.activated = true;
    this.api.getBooks().subscribe((data: Book[]) => {
      console.log(data);
      this.books = data;
    }, err => alert("No hay libros"));
  }

}
