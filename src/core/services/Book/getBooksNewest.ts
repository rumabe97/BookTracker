import {BookRepository, SearchBookNewestDto} from "../../repositories/Book";
import {Book} from "../../entities/Book";

export async function getBooksNewest(searchBook: SearchBookNewestDto): Promise<Book[]> {
    const books = await BookRepository.getBooksNewest(searchBook);

    return books.map(
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
