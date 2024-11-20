import {BookRepository, SearchBookNewestDto} from "../../repositories/Book";
import {Book} from "../../entities/Book";
import {GoogleResponse} from "../../entities/GoogleResponse";

export async function getBooksNewest(searchBook: SearchBookNewestDto): Promise<GoogleResponse> {
    const response = await BookRepository.getBooksNewest(searchBook);

    const books = response.data.map(
        ({id, created_at, updated_at, ...rest}) => {
            return new Book({
                _id: id,
                createdAt: created_at,
                updatedAt: updated_at,
                ...rest,
                coverImage: rest.coverImage.replace('http://', 'https://'),
            });
        }
    );
    return {
        ...response,
        data: books
    }
}
