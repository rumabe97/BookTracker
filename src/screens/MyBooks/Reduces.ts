import {Book} from "../../core/entities/Book";

interface State {
    page: number;
    search: string;
    currentBooks: Book[];
    totalPages: number;
}

type ActionType =
    | { type: 'SET_PAGE'; payload: number }
    | { type: 'SET_SEARCH'; payload: string }
    | { type: 'SET_BOOKS'; payload: { books: Book[]; totalPages: number } };

export function reducer(state: State, action: ActionType): State {
    if (action.type === "SET_PAGE") return {...state, page: action.payload};
    if (action.type === "SET_SEARCH") return {
        ...state,
        search: action.payload,
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
    search: '',
    currentBooks: [] as Book[],
    totalPages: 1,
};
