import {StyleSheet} from "react-native";

export const BookCardStyles = StyleSheet.create({
    bookCard: {
        width: '48%',
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    bookImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    bookInfo: {
        padding: 8,
    },
    bookTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    bookAuthor: {
        fontSize: 12,
        marginBottom: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingStar: {
        fontSize: 12,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
    },
    seeMoreButton: {
        padding: 8,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
    },
    seeMoreText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    publishedDate: {
        fontSize: 10,
        marginTop: 4,
    },
});
