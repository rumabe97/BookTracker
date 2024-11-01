import {Book} from "../../core/entities/Book";

interface State {
    page: number;
    selectedCategory: string;
    bookType: "newest" | "relevance";
    currentBooks: Book[];
    totalPages: number;
}

type ActionType =
    | { type: 'SET_PAGE'; payload: number }
    | { type: 'SET_CATEGORY'; payload: string }
    | { type: 'SET_BOOK_TYPE'; payload: "newest" | "relevance"; }
    | { type: 'SET_BOOKS'; payload: { books: Book[]; totalPages: number } };

export function reducer(state: State, action: ActionType): State {
    if (action.type === "SET_PAGE") return {...state, page: action.payload};
    if (action.type === "SET_CATEGORY") return {...state, selectedCategory: action.payload, page: 1};
    if (action.type === "SET_BOOK_TYPE") return {...state, bookType: action.payload, page: 1};
    if (action.type === "SET_BOOKS") return {
        ...state,
        currentBooks: action.payload.books,
        totalPages: action.payload.totalPages
    };
    return state;
}

export const initialState: State = {
    page: 1,
    selectedCategory: 'fiction',
    bookType: 'newest',
    currentBooks: [] as Book[],
    totalPages: 1,
};
