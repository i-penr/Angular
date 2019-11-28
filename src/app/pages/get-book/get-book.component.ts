import { Component, OnInit } from '@angular/core';
import { Book } from '../../classes/book';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  constructor(private api: ApiService) { }

  books: Book[];
  bookSelected: string;
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
    this.api.findBookByTitle(this.bookSelected)
     .subscribe((data: Book) => {
       console.log(data);
       this.bookFound = data;
     });
  }

  getBooks() {
    this.activated = true;
    this.api.getBooks().subscribe((data: Book[]) => {
      console.log(data);
      this.books = data;
    });
  }


}
