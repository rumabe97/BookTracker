import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const PaginatorStyles = (theme: ThemeType) => StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    paginationButton: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: theme.background
    },
    paginationText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.textColor
    },
    paginationInfo: {
        fontSize: 14,
        color: theme.textColor
    },
});
