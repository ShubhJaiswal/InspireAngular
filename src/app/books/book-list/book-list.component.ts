import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book, BookResponse, Books } from 'src/app/modal/books';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  bookDetail!: Books; // To Store the book after receiving from api and display on UI
  sortOption = 'title'; // Default title sort option
  subscriptin!: Subscription; // To unsubscribe subscription

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooksList();
  }


  //To get the item from api through service
  getBooksList() {
    this.subscriptin = this.booksService.getBooks().subscribe((res: BookResponse) => {
      this.bookDetail = res.data;
    })
  }

  //To delete a book from list
  removeBook(book: Book) {
    const index = this.bookDetail.books.indexOf(book);
    if (index >= 0) {
      this.bookDetail.books.splice(index, 1);
    }
  }


  sortData() {
    if (this.sortOption === 'title') {
      // Sort alphabetically by title
      this.bookDetail.books = [...this.bookDetail.books].sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOption === 'date') {
      // Sort chronologically by publish date
      this.bookDetail.books = [...this.bookDetail.books].sort((a: any, b: any) => a.PublishDate - b.PublishDate);
    }
  }

  ngOnDestroy() {
    this.subscriptin.unsubscribe();
  }
}
