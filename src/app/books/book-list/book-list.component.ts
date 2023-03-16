import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Book, BookResponse, Books } from 'src/app/modal/books';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookDetail!: Books;
  addBookToggle = false;

  showAddBook() {
    this.addBookToggle = !this.addBookToggle;
  }
  // bookForm = {
  //   imageUrl: '',
  //   title: '',
  //   purchaseLink: '',
  //   PublishDate: ''
  // }
  constructor(public booksService: BooksService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getBooksList();
  }
  
  public getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl('file://' + url);
  }

  getBooksList() {
    this.booksService.getBooks().subscribe((res: BookResponse) => {
      console.table(res);
      this.bookDetail = res.data;
    })
  }

  addBook(book: Book) {
    debugger
    this.bookDetail.books.unshift(book);
  }
  sortOption = 'title';
  onSort() {

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
}
