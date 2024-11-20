import {BookStatus} from "../../../entities/BookStatus";

export interface BookDto {
    id: string;
    idGoogle: string;
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
    created_at: Date;
    updated_at: Date;
}

export interface SearchBookDto {
    direction: 'asc' | 'desc';
    page: number;
    quantity: number;
    search?: string;
    status?: BookStatus;
}

export interface SearchBookNewestDto {
    subject: string;
    order: 'newest' | 'relevance';
    page: number;
    max_results: number;
}

export interface SearchBookGoogleDto {
    title: string;
    author: string;
    page: number;
    max_results: number;
}

export interface CreateBookDto {
    idGoogle: string;
    status: BookStatus;
}

export interface StatusCountDto {
    completed: number;
    pending: number;
    wishlist: number;
    reading: number;
    discarded: number;
}
