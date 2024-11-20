import {BookRepository} from "../../repositories/Book";
import {Book} from "../../entities/Book";

export async function getBook(id: string): Promise<Book> {
    const book = await BookRepository.getBook(id);

    return new Book({
        _id: book.id,
        createdAt: book.created_at,
        updatedAt: book.updated_at,
        ...book,
        coverImage: book.coverImage.replace('http://', 'https://'),
    });
}
