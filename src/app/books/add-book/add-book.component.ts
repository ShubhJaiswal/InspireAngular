import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  @Output() newBook = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  selectedFile: any;
  onFileSelected(event: any)  {

    if(!(event.target?.files[0].type.match(/image.*/))){
      alert('Please upload images only');
      return;
}
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.selectedFile = e.target.result;
      }
    }

    this.selectedFile = event.target.files[0];
  }

  onSubmit(bookForm: any) {
    
    if (bookForm) {
      bookForm.imageUrl = this.selectedFile;
      this.newBook.emit(bookForm);
    
    }
    

  }

}
