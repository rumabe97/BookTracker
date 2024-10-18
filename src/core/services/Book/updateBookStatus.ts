import {BookRepository} from "../../repositories/Book";
import {Book} from "../../entities/Book";
import {BookStatus} from "../../entities/BookStatus";

export async function updateBookStatus(status: BookStatus, id: string): Promise<Book> {
    const book = await BookRepository.updateBookStatus(status, id);

    return new Book({
        _id: book.id,
        createdAt: book.created_at,
        updatedAt: book.updated_at,
        ...book
    });
}
