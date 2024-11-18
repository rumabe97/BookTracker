import {BookStatus} from "../entities/BookStatus";

export type RootStackParamList = {
    SplashScreen: undefined;
    Home: undefined;
    SearchBook: undefined;
    CompletedBooks: { status: BookStatus };
    PendingBooks: { status: BookStatus };
    WishlistBooks: { status: BookStatus };
    DiscardedBooks: { status: BookStatus };
};
