import {ThemeType} from "../../styles/Themes.ts";
import {StyleSheet} from "react-native";

export const BookDetailStyles = (theme: ThemeType) => StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: theme.background,
        borderRadius: 20,
        padding: 20,
        width: '90%',
        maxHeight: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    titleContainer: {
        flex: 1,
        marginRight: 10,
    },
    modalTitle: {
        fontSize: 18,
        color: theme.textColor,
        fontWeight: 'bold',
    },
    modalAuthor: {
        fontSize: 14,
        color: theme.secondaryTextColor,
        marginTop: 4,
    },
    coverImage: {
        width: 80,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        gap: 15
    },
    statusContainer: {
        flex: 1,
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
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.textColor,
        marginLeft: 4,
    },
    averageRating: {
        fontSize: 12,
        color: theme.secondaryTextColor,
        marginLeft: 4,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 12,
        color: theme.textColor,
        marginLeft: 4,
    },
    infoTextGenre: {
        fontSize: 12,
        color: theme.textColor,
        marginLeft: 4,
        maxWidth: 70
    },
    descriptionHeader: {
        color: theme.textColor,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    sectionTitle: {
        fontSize: 16,
        color: theme.textColor,
        fontWeight: 'bold',
    },
    descriptionScroll: {
        borderWidth: 1,
        borderColor: theme.background,
        borderRadius: 8,
        padding: 8,
        marginBottom: 15,
    },
    descriptionText: {
        color: theme.textColor,
        fontSize: 14,
    },
    metadataContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    metadataColumn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 10,
        marginBottom: 20

    },
    metadataTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.textColor,
        marginBottom: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    wishlistButton: {
        backgroundColor: theme.primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
    },
    wishlistButtonDisabled: {
        backgroundColor: '#9ca3af',
    },
    wishlistButtonText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.primaryColor,
        borderRadius: 8,
    },
    closeButtonText: {
        color: theme.primaryColor,
        fontSize: 14,
        fontWeight: 'bold',
    },
});


export const statusColors = {
    reading: '#3b82f6',
    completed: '#22c55e',
    pending: '#eab308',
    wishlist: '#a855f7',
    discarded: '#D61010FF',
    NoStatus: '#9ca3af'
};
