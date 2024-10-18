import {BookStatus} from "../BookStatus";

export interface BookProps {
    _id: string;
    title: string;
    subTitle: string;
    description: string;
    author: string;
    genre: string;
    status: BookStatus;
    pages: number;
    rating: number;
    averageRating: number;
    notes: string;
    coverImage: string;
    publishedDate: Date;
    isbn13: string;
    isbn10: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Book {
    _id: string;
    title: string;
    subTitle: string;
    description: string;
    author: string;
    genre: string;
    status: BookStatus;
    pages: number;
    rating: number;
    averageRating: number;
    notes: string;
    coverImage: string;
    publishedDate: Date;
    isbn13: string;
    isbn10: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(book: BookProps) {
        this._id = book._id;
        this.title = book.title;
        this.subTitle = book.subTitle;
        this.description = book.description;
        this.author = book.author;
        this.genre = book.genre;
        this.status = book.status;
        this.pages = book.pages;
        this.rating = book.rating;
        this.averageRating = book.averageRating;
        this.notes = book.notes;
        this.coverImage = book.coverImage;
        this.publishedDate = book.publishedDate;
        this.isbn13 = book.isbn13;
        this.isbn10 = book.isbn10;
        this.createdAt = book.createdAt;
        this.updatedAt = book.updatedAt;
    }
}
