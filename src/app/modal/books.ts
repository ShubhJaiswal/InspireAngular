export interface Books {
    author: string;
    birthday: string;
    birthPlace: string;
    books: Book[];
}

export interface BookResponse {
    data: Books;
}

export interface Book {
    imageUrl: string;
    title: string;
    PublishDate: string;
    purchaseLink: string;
}
