import {BookStatus} from "../entities/BookStatus";

export type RootStackParamList = {
    SplashScreen: undefined;
    HomeScreen: undefined;
    SearchBook: undefined;
    CompletedBooks: { status: BookStatus };
    PendingBooks: { status: BookStatus };
    WishListBooks: { status: BookStatus };
    DiscardedBooks: { status: BookStatus };
};
