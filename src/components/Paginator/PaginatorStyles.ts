import {StyleSheet} from "react-native";

export const PaginatorStyles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    paginationButton: {
        padding: 8,
        borderRadius: 4,
    },
    paginationText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    paginationInfo: {
        fontSize: 14,
    },
});
