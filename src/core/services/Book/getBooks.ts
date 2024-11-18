import {Book} from "../../entities/Book";
import {BookRepository, SearchBookDto} from "../../repositories/Book";

export async function getBooks(searchBook: SearchBookDto): Promise<{ data: Book[], count: number }> {
    const books = await BookRepository.getBooks(searchBook);

    const data = books.results.map(
        ({id, created_at, updated_at, ...rest}) => {
            return new Book({
                _id: id,
                createdAt: created_at,
                updatedAt: updated_at,
                ...rest
            });
        }
    );
    const totalItems = books.count;
    return {data, count: totalItems}
}
