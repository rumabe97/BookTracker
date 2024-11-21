import {BookStatus} from "../entities/BookStatus";
import {RouteProp} from "@react-navigation/native";

export type RootStackParamList = {
    SplashScreen: undefined;
    Home: undefined;
    SearchBook: undefined;
    CompletedBooks: { status: BookStatus };
    PendingBooks: { status: BookStatus, secondStatus: BookStatus };
    WishlistBooks: { status: BookStatus };
    DiscardedBooks: { status: BookStatus };
};

export type SearchBookRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>;
