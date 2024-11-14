import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const BookCardStyles = (theme: ThemeType) => StyleSheet.create({
    bookCard: {
        width: '48%',
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: theme.cardBackground
    },
    bookImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    bookInfo: {
        padding: 8,
        flexGrow: 1
    },
    bookTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        color: theme.textColor
    },
    bookAuthor: {
        fontSize: 12,
        marginBottom: 4,
        color: theme.secondaryTextColor
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingStar: {
        fontSize: 12,
        marginRight: 4,
        color: '#FFD700'
    },
    ratingText: {
        fontSize: 10,
        color: theme.secondaryTextColor
    },
    seeMoreButton: {
        padding: 8,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        backgroundColor: theme.background
    },
    seeMoreText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.textColor
    },
    publishedDate: {
        fontSize: 10,
        marginTop: 4,
        color: theme.secondaryTextColor
    },
    statusContainer: {
        flex: 1,
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 9999
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    statusText: {
        color: theme.textColor,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
