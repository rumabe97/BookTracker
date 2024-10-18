import {BookRepository} from "../../repositories/Book";

export async function deleteBook(id: string): Promise<boolean> {
    return await BookRepository.deleteBook(id);
}
