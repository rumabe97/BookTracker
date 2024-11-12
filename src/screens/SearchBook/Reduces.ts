import {Book} from "../../core/entities/Book";

interface State {
    page: number;
    title: string;
    author: string;
    currentBooks: Book[];
    totalPages: number;
}

type ActionType =
    | { type: 'SET_PAGE'; payload: number }
    | { type: 'SET_TITLE_AUTHOR'; payload: string[] }
    | { type: 'SET_BOOKS'; payload: { books: Book[]; totalPages: number } };

export function reducer(state: State, action: ActionType): State {
    if (action.type === "SET_PAGE") return {...state, page: action.payload};
    if (action.type === "SET_TITLE_AUTHOR") return {
        ...state,
        title: action.payload[0],
        author: action.payload[1],
        page: 1
    };
    if (action.type === "SET_BOOKS") return {
        ...state,
        currentBooks: action.payload.books,
        totalPages: action.payload.totalPages
    };
    return state;
}

export const initialState: State = {
    page: 1,
    title: '',
    author: 'newest',
    currentBooks: [] as Book[],
    totalPages: 1,
};
