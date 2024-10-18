import {BookStatus} from "../BookStatus";

export interface SearchBookProps {
    direction: 'asc' | 'desc';
    page: number;
    quantity: number;
    search: string;
    status: BookStatus;
}

export class SearchBook {
    direction: 'asc' | 'desc';
    page: number;
    quantity: number;
    search: string;
    status: BookStatus;

    constructor(searchBook: SearchBookProps) {
        this.direction = searchBook.direction;
        this.page = searchBook.page;
        this.quantity = searchBook.quantity;
        this.search = searchBook.search;
        this.status = searchBook.status;
    }
}
