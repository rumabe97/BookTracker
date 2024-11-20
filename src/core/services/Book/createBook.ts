import {BookRepository, CreateBookDto} from "../../repositories/Book";
import {Book} from "../../entities/Book";

export async function createBook(createBook: CreateBookDto): Promise<Book> {
    const book = await BookRepository.createBook(createBook);

    return new Book({
        _id: book.id,
        createdAt: book.created_at,
        updatedAt: book.updated_at,
        ...book,
        coverImage: book.coverImage.replace('http://', 'https://'),
    });
}
