export interface BookCountProps {
    completed: number;
    pending: number;
    wishlist: number;
    reading: number;
}

export class BookCount {
    completed: number;
    pending: number;
    wishlist: number;
    reading: number;

    constructor(bookCountProps: BookCountProps) {
        this.completed = bookCountProps.completed;
        this.pending = bookCountProps.pending;
        this.reading = bookCountProps.reading;
        this.wishlist = bookCountProps.wishlist;
    }
}
