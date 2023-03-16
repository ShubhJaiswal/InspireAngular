import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResponse } from '../modal/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url: string = 'https://s3.amazonaws.com/api-fun/books.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<Observable<BookResponse>>(this.url);
  }
}
