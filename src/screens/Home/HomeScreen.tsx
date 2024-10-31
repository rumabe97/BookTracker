import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import Button from "../../components/Button/Button.tsx";
import Paginator from "../../components/Paginator/Paginator.tsx";
import BookCard from "../../components/BookCard/BookCard.tsx";
import {Book} from "../../core/entities/Book";
import {getBooksNewest} from "../../core/services/Book";
import {SearchBookNewestDto} from "../../core/repositories/Book";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {HomeStyles} from "./HomeStyles.ts";


const categories = ["All", "Fiction", "Non-fiction", "Science Fiction", "Mystery", "Classic"];

const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [bookType, setBookType] = useState("newest");
    const [currentBooks, setCurrentBooks] = useState<Book[]>();
    const {currentTheme} = useTheme();
    const homeStyles = HomeStyles(currentTheme);

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
        <SafeAreaView style={homeStyles.container}>
            <View style={homeStyles.controls}>
                <View style={homeStyles.toggleGroup}>
                    <Button
                        title="Newest"
                        onPress={() => setBookType('newest')}
                        buttonStyle={[
                            homeStyles.toggleButton,
                            bookType === 'newest' && homeStyles.activeToggle
                        ]}
                        textStyle={homeStyles.toggleText}
                    />
                    <Button
                        title="Relevant"
                        onPress={() => setBookType('relevant')}
                        buttonStyle={[
                            homeStyles.toggleButton,
                            bookType === 'relevant' && homeStyles.activeToggle
                        ]}
                        textStyle={homeStyles.toggleText}
                    />
                </View>
                <View style={homeStyles.pickerContainer}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                        dropdownIconColor={currentTheme.textColor}
                        style={homeStyles.picker}
                    >
                        {categories.map((category) => (
                            <Picker.Item key={category} label={category} value={category}/>
                        ))}
                    </Picker>
                </View>
            </View>

            <FlatList
                data={currentBooks}
                renderItem={({item}) => <BookCard {...item} />}
                keyExtractor={(item) => item.idGoogle}
                numColumns={2}
                columnWrapperStyle={homeStyles.bookRow}
            />

            <Paginator/>

        </SafeAreaView>
    );
}

export default HomeScreen;
