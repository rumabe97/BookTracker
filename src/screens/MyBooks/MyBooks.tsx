import React, {useCallback, useEffect, useReducer} from "react";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";
import {SearchBookDto} from "../../core/repositories/Book";
import {getBooks} from "../../core/services/Book";
import {SafeAreaView} from "react-native-safe-area-context";
import SearchInputs from "../../components/SearchInputs";
import {FlatList, View} from "react-native";
import BookCard from "../../components/BookCard";
import EmptyList from "../../components/EmptyList";
import Paginator from "../../components/Paginator";
import {Book} from "../../core/entities/Book";
import {initialState, reducer} from "./Reduces.ts";
import {MyBooksStyles} from "./MyBooksStyles.ts";
import {RootStackParamList, SearchBookRouteProp} from "../../core/routing/StackParamList.ts";
import {useRoute} from "@react-navigation/native";


const MyBooks = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {currentTheme} = useTheme();
    const myBooksStyles = MyBooksStyles(currentTheme);
    const {showLoader, hideLoader} = useLoader();

    const route = useRoute<SearchBookRouteProp<keyof RootStackParamList>>();
    const {status, secondStatus} = route.params as any;

    const handlePagination = useCallback((newValue: number) => {
        dispatch({type: 'SET_PAGE', payload: newValue});
    }, [])

    const handleSearch = useCallback((newValue: string[]) => {
        dispatch({type: 'SET_SEARCH', payload: newValue[0]});
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            showLoader();
            const searchDto: SearchBookDto = {
                direction: 'desc',
                quantity: 10,
                search: state.search,
                status,
                page: state.page,
            }
            if (secondStatus) searchDto.secondStatus = secondStatus;
            const {data, count}: { data: Book[], count: number } = await getBooks(searchDto);
            dispatch({
                type: 'SET_BOOKS',
                payload: {books: data, totalPages: Math.ceil(count / 10)},
            });
        };
        fetchData().then(() => hideLoader());
    }, [state.page, state.search]);

    return (
        <SafeAreaView style={myBooksStyles.container}>
            <SearchInputs handleTitleAuthor={handleSearch} options={['Search']}/>
            <View style={myBooksStyles.flatContainer}>
                <FlatList
                    data={state.currentBooks}
                    renderItem={({item}) => <BookCard {...item} />}
                    ListEmptyComponent={<EmptyList title={"No books to display"}
                                                   description={"Enter a title or author to find books. If nothing appears, try refining your search."}/>}
                    keyExtractor={(item) => item.idGoogle}
                    numColumns={2}
                    columnWrapperStyle={myBooksStyles.bookRow}
                    contentContainerStyle={{flexGrow: 1}}
                />
            </View>
            <Paginator handlePagination={handlePagination} pages={state.totalPages}/>

        </SafeAreaView>
    );
}

export default MyBooks;
