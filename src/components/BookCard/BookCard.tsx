import {Image, Text, View} from "react-native";
import React from "react";
import {BookCardStyles} from "./BookCardStyles.ts";
import Button from "../Button/Button.tsx";

const BookCard = (bookt: any) => {
    const book = bookt.item;
    return (
        <View style={[BookCardStyles.bookCard, {backgroundColor: false ? '#2a2a2a' : '#f0f0f0'}]}>
            <Image source={{uri: book.coverImage ?? "https://via.placeholder.com/130x200.png",}}
                   style={BookCardStyles.bookImage}/>
            <View style={BookCardStyles.bookInfo}>
                <Text style={[BookCardStyles.bookTitle, {color: false ? '#ffffff' : '#333333'}]}
                      numberOfLines={1}>{book.title}</Text>
                <Text style={[BookCardStyles.bookAuthor, {color: false ? '#cccccc' : '#666666'}]}>{book.author}</Text>
                <View style={BookCardStyles.ratingContainer}>
                    <Text style={[BookCardStyles.ratingStar, {color: '#FFD700'}]}>★</Text>
                    <Text
                        style={[BookCardStyles.ratingText, {color: false ? '#ffffff' : '#333333'}]}>{book.averageRating}</Text>
                </View>
            </View>
            <Button
                title="See More"
                onPress={() => console.log(`See more for ${book.title}`)}
                buttonStyle={[BookCardStyles.seeMoreButton, {backgroundColor: false ? '#3a3a3a' : '#e0e0e0'}]}
                textStyle={[BookCardStyles.seeMoreText, {color: false ? '#ffffff' : '#333333'}]}
            />
        </View>
    );
}

export default BookCard;
