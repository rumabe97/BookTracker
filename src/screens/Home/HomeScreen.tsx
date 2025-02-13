import React, {useEffect, useCallback, useReducer} from 'react';
import {View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import Paginator from "../../components/Paginator";
import BookCard from "../../components/BookCard";
import {getBooksNewest} from "../../core/services/Book";
import {SearchBookNewestDto} from "../../core/repositories/Book";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {HomeStyles} from "./HomeStyles.ts";
import {GoogleResponse} from "../../core/entities/GoogleResponse";
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";
import {initialState, reducer} from "./Reduces.ts";
import {BookCategories, categoryLabels} from "../../core/entities/BookCategory";
import HomeHeader from "../../components/HomeHeader";

const HomeScreen = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {currentTheme} = useTheme();
    const homeStyles = HomeStyles(currentTheme);
    const {showLoader, hideLoader} = useLoader();

    const handlePagination = useCallback((newValue: number) => {
        dispatch({type: 'SET_PAGE', payload: newValue});
    }, [])

    const handleBookType = useCallback((newType: "newest" | "relevance") => {
        dispatch({type: 'SET_BOOK_TYPE', payload: newType});
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            showLoader();
            const searchDto: SearchBookNewestDto = {
                max_results: 10,
                order: state.bookType,
                subject: state.selectedCategory,
                page: state.page,
            }
            const response: GoogleResponse = await getBooksNewest(searchDto);
            dispatch({
                type: 'SET_BOOKS',
                payload: {books: response.data, totalPages: Math.ceil(response.totalItems / 10)},
            });
        };
        fetchData().then(() => hideLoader());
    }, [state.page, state.bookType, state.selectedCategory]);

    return (
        <SafeAreaView style={homeStyles.container}>
            <View style={homeStyles.controls}>
                <HomeHeader handleType={handleBookType}/>
                <View style={homeStyles.pickerContainer}>
                    <Picker
                        selectedValue={state.selectedCategory}
                        onValueChange={(itemValue) => dispatch({type: 'SET_CATEGORY', payload: itemValue})}
                        dropdownIconColor={currentTheme.textColor}
                        style={homeStyles.picker}
                    >
                        {Object.values(BookCategories).map((category) => (
                            <Picker.Item key={category} label={categoryLabels[category]} value={category}/>
                        ))}
                    </Picker>
                </View>
            </View>

            <FlatList
                data={state.currentBooks}
                renderItem={({item}) => <BookCard
                    initialBook={item}
                    handleDeleteBook={()=> {return}}
                />}
                keyExtractor={(item) => item.idGoogle}
                numColumns={2}
                columnWrapperStyle={homeStyles.bookRow}
            />

            <Paginator handlePagination={handlePagination} pages={state.totalPages}/>

        </SafeAreaView>
    );
}

export default HomeScreen;
