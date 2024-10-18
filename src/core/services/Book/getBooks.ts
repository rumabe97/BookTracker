import {Book} from "../../entities/Book";
import {BookRepository, SearchBookDto} from "../../repositories/Book";

export async function getBooks(searchBook: SearchBookDto): Promise<Book[]> {
    const books = await BookRepository.getBooks(searchBook);

    return books.results.map(
        ({id, created_at, updated_at, ...rest}) => {
            return new Book({
                _id: id,
                createdAt: created_at,
                updatedAt: updated_at,
                ...rest
            });
        }
    );
}
