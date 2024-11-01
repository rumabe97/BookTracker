import {
    BookDto,
    SearchBookDto,
    CreateBookDto,
    SearchBookNewestDto,
    SearchBookGoogleDto, StatusCountDto
} from "./@types/Book.types.ts";
import {cleanParams} from "../utils/CleanParams.ts";
import {BookStatus} from "../../entities/BookStatus";
import {authFetch} from "../utils/authFetch.ts";

const {API_URL = 'https://book-tracker-api-dev.vercel.app'} = process.env;

type Response<T> = { count: number; next: null; previous: null; results: T[] };
type ResponseGoogleSearch<T> = { totalItems: number; data: T[] };

const getBooks = async (searchBook: SearchBookDto): Promise<Response<BookDto>> => {
    try {
        const params = new URLSearchParams();
        if (searchBook.direction) params.append('direction', searchBook.direction);
        if (searchBook.search) params.append('search', searchBook.search);
        if (searchBook.quantity) params.append('quantity', searchBook.quantity.toString());
        if (searchBook.page) params.append('page', searchBook.page.toString());
        if (searchBook.status) params.append('page', searchBook.status)

        const response = await authFetch(`${API_URL}/v0/book?${params.toString()}`);

        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to fetch books');
    }
};

const createBook = async (book: CreateBookDto): Promise<BookDto> => {
    try {
        const response = await authFetch(`${API_URL}/v0/book`, {
            method: 'POST',
            body: JSON.stringify(cleanParams(book)),
        });

        if (!response.ok) {
            throw new Error('Failed to create book');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to create book');
    }
};

const getBook = async (id: string): Promise<BookDto> => {
    try {
        const response = await authFetch(`${API_URL}/v0/book/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch book');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to fetch book');
    }
};

const deleteBook = async (id: string): Promise<boolean> => {
    try {
        const response = await authFetch(`${API_URL}/v0/book/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete book');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to delete book');
    }
};

const updateBookStatus = async (status: BookStatus, id: string): Promise<BookDto> => {
    try {
        const response = await authFetch(`${API_URL}/v0/book/${id}/update_status`, {
            method: 'PATCH',
            body: JSON.stringify({status}),
        });

        if (!response.ok) {
            throw new Error('Failed to update book status');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to update book status');
    }
};

const getBooksNewest = async (searchBook: SearchBookNewestDto): Promise<ResponseGoogleSearch<BookDto>> => {
    try {
        const params = new URLSearchParams();
        if (searchBook.order) params.append('order', searchBook.order);
        if (searchBook.subject) params.append('subject', searchBook.subject);
        if (searchBook.max_results) params.append('max_results', searchBook.max_results.toString());
        if (searchBook.page) params.append('page', searchBook.page.toString());

        const response = await authFetch(`${API_URL}/v0/book/get_newest_relevance?${params.toString()}`);

        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to fetch books');
    }
};

const getBooksGoogle = async (searchBook: SearchBookGoogleDto): Promise<ResponseGoogleSearch<BookDto>> => {
    try {
        const params = new URLSearchParams();
        if (searchBook.title) params.append('title', searchBook.title);
        if (searchBook.author) params.append('subject', searchBook.author);
        if (searchBook.max_results) params.append('max_results', searchBook.max_results.toString());
        if (searchBook.page) params.append('page', searchBook.page.toString());

        const response = await authFetch(`${API_URL}/v0/book/search_google_api?${params.toString()}`);

        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to fetch books');
    }
};

const getCountStatus = async (): Promise<StatusCountDto> => {
    try {

        const response = await authFetch(`${API_URL}/v0/book/get_status_count/`);

        if (!response.ok) {
            throw new Error('Failed to fetch status count');
        }

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('Failed to fetch status count');
    }
};

export const BookRepository = {
    getBooks,
    createBook,
    getBook,
    deleteBook,
    updateBookStatus,
    getBooksNewest,
    getBooksGoogle,
    getCountStatus
};
