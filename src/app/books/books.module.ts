import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';


@NgModule({
  declarations: [
    BookListComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [BookListComponent]
})
export class BooksModule { }
