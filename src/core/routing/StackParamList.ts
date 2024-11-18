import {BookStatus} from "../entities/BookStatus";

export type RootStackParamList = {
    SplashScreen: undefined;
    HomeScreen: undefined;
    SearchBook: undefined;
    CompletedBooks: { status: BookStatus };
};
