import React, {useState, useEffect} from 'react';
import {View, FlatList, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import Button from "../../components/Button/Button.tsx";
import Paginator from "../../components/Paginator/Paginator.tsx";
import {HomeStyles} from "./HomeStyles.ts";
import BookCard from "../../components/BookCard/BookCard.tsx";
import {Book} from "../../core/entities/Book";
import {getBooksNewest} from "../../core/services/Book";
import {SearchBookNewestDto} from "../../core/repositories/Book";


const categories = ["All", "Fiction", "Non-fiction", "Science Fiction", "Mystery", "Classic"];

const HomeScreen = () => {
    const colorScheme = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [bookType, setBookType] = useState("newest");
    const [currentBooks, setCurrentBooks] = useState<Book[]>();

    useEffect(() => {
        const fetchData = async () => {
            const searchDto: SearchBookNewestDto = {
                max_results: 10,
                order: "newest",
                subject: "fiction",
                page: 1
            }
            const data: Book[] = await getBooksNewest(searchDto);
            setCurrentBooks(data)
        };
        fetchData().then();
    }, []);

    return (
        <SafeAreaView style={[HomeStyles.container, {backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'}]}>
            <View style={HomeStyles.controls}>
                <View style={HomeStyles.toggleGroup}>
                    <Button
                        title="Newest"
                        onPress={() => setBookType('newest')}
                        buttonStyle={[
                            HomeStyles.toggleButton,
                            bookType === 'newest' && HomeStyles.activeToggle,
                            {backgroundColor: isDarkMode ? '#3a3a3a' : '#e0e0e0'}
                        ]}
                        textStyle={[HomeStyles.toggleText, {color: isDarkMode ? '#ffffff' : '#333333'}]}
                    />
                    <Button
                        title="Relevant"
                        onPress={() => setBookType('relevant')}
                        buttonStyle={[
                            HomeStyles.toggleButton,
                            bookType === 'relevant' && HomeStyles.activeToggle,
                            {backgroundColor: isDarkMode ? '#3a3a3a' : '#e0e0e0'}
                        ]}
                        textStyle={[HomeStyles.toggleText, {color: isDarkMode ? '#ffffff' : '#333333'}]}
                    />
                </View>
                <Picker
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                    style={[HomeStyles.picker, {color: isDarkMode ? '#ffffff' : '#333333'}]}
                >
                    {categories.map((category) => (
                        <Picker.Item key={category} label={category} value={category}/>
                    ))}
                </Picker>
            </View>

            <FlatList
                data={currentBooks}
                renderItem={BookCard}
                keyExtractor={(item) => item.idGoogle}
                numColumns={2}
                columnWrapperStyle={HomeStyles.bookRow}
            />

            <Paginator/>

        </SafeAreaView>
    );
}

export default HomeScreen;
