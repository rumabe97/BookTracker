import {BookRepository} from "../../repositories/Book";
import {BookCount} from "../../entities/BookCount";

export async function getStatusCount(): Promise<BookCount> {
    const book = await BookRepository.getCountStatus();

    return new BookCount({
        ...book
    });
}
