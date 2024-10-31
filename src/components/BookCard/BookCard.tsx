import {Image, Text, View} from "react-native";
import React from "react";
import {BookCardStyles} from "./BookCardStyles.ts";
import Button from "../Button/Button.tsx";
import {Book} from "../../core/entities/Book";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";

const BookCard = (book: Book) => {
    const {currentTheme} = useTheme();
    const bookCardStyles = BookCardStyles(currentTheme);
    return (
        <View style={bookCardStyles.bookCard}>
            <Image source={{uri: book.coverImage ?? "https://via.placeholder.com/130x200.png",}}
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
                        style={bookCardStyles.ratingText}>{book.averageRating}</Text>
                </View>
            </View>
            <Button
                title="See More"
                onPress={() => console.log(`See more for ${book.title}`)}
                buttonStyle={bookCardStyles.seeMoreButton}
                textStyle={bookCardStyles.seeMoreText}
            />
        </View>
    );
}

export default BookCard;
