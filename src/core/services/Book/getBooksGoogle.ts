import {BookRepository, SearchBookGoogleDto} from "../../repositories/Book";
import {Book} from "../../entities/Book";

export async function getBooksGoogle(searchBook: SearchBookGoogleDto): Promise<Book[]> {
    const books = await BookRepository.getBooksGoogle(searchBook);

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
