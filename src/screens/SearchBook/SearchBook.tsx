import React, {useCallback, useEffect, useReducer} from "react";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";
import {SearchBookGoogleDto} from "../../core/repositories/Book";
import {GoogleResponse} from "../../core/entities/GoogleResponse";
import {getBooksGoogle} from "../../core/services/Book";
import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, View} from "react-native";
import BookCard from "../../components/BookCard";
import Paginator from "../../components/Paginator";
import {SearchBookStyles} from "./SearchBookStyles.ts";
import {initialState, reducer} from "./Reduces.ts";
import SearchInputs from "../../components/SearchInputs";
import EmptyList from "../../components/EmptyList";

const SearchBook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {currentTheme} = useTheme();
    const searchBookStyles = SearchBookStyles(currentTheme);
    const {showLoader, hideLoader} = useLoader();

    const handlePagination = useCallback((newValue: number) => {
        dispatch({type: 'SET_PAGE', payload: newValue});
    }, [])

    const handleTitleAuthor = useCallback((newValue: string[]) => {
        dispatch({type: 'SET_TITLE_AUTHOR', payload: newValue});
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            showLoader();
            const searchDto: SearchBookGoogleDto = {
                max_results: 10,
                title: state.title,
                author: state.author,
                page: state.page,
            }
            const response: GoogleResponse = await getBooksGoogle(searchDto);
            dispatch({
                type: 'SET_BOOKS',
                payload: {books: response.data, totalPages: Math.ceil(response.totalItems / 10)},
            });
        };
        fetchData().then(() => hideLoader());
    }, [state.page, state.title, state.author]);

    return (
        <SafeAreaView style={searchBookStyles.container}>
            <SearchInputs handleTitleAuthor={handleTitleAuthor}/>
            <View style={searchBookStyles.flatContainer}>
                <FlatList
                    data={state.currentBooks}
                    renderItem={({item}) => <BookCard {...item} />}
                    ListEmptyComponent={<EmptyList title={"No books to display"}
                                                   description={"Enter a title or author to find books. If nothing appears, try refining your search."}/>}
                    keyExtractor={(item) => item.idGoogle}
                    numColumns={2}
                    columnWrapperStyle={searchBookStyles.bookRow}
                    contentContainerStyle={{flexGrow: 1}}
                />
            </View>
            <Paginator handlePagination={handlePagination} pages={state.totalPages}/>

        </SafeAreaView>
    );
}

export default SearchBook;
