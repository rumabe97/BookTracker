import {Image, Text, View} from "react-native";
import React, {useState} from "react";
import {BookCardStyles} from "./BookCardStyles.ts";
import Button from "../Button";
import {Book} from "../../core/entities/Book";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import BookDetail from "../BookDetail";

const BookCard = (book: Book) => {
    const {currentTheme} = useTheme();
    const [modalVisible, setModalVisible] = useState(false);

    const bookCardStyles = BookCardStyles(currentTheme);
    return (
        <View style={bookCardStyles.bookCard}>
            <Image source={{uri: book.coverImage ? book.coverImage : "https://via.placeholder.com/130x200.png",}}
                   style={bookCardStyles.bookImage}/>
            <View style={bookCardStyles.bookInfo}>
                <Text style={bookCardStyles.bookTitle}
                      numberOfLines={1}>{book.title}</Text>
                <Text style={bookCardStyles.bookAuthor}>{book.author}</Text>
                <Text style={bookCardStyles.publishedDate}>
                    Published: {new Date(book.publishedDate).toLocaleDateString()}
                </Text>
                <View style={bookCardStyles.ratingContainer}>
                    <Text style={bookCardStyles.ratingStar}>★</Text>
                    <Text
                        style={bookCardStyles.ratingText}>{book.averageRating ?? 'No rating'}</Text>
                </View>
            </View>
            <Button
                title="See More"
                onPress={() => setModalVisible(true)}
                buttonStyle={bookCardStyles.seeMoreButton}
                textStyle={bookCardStyles.seeMoreText}
            />
            <BookDetail
                book={book}
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

export default BookCard;
