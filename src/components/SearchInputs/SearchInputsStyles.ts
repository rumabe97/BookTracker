import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const SearchInputsStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom: 16,
        paddingTop: 16,
    },
    searchButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchText: {
        color: theme.textColor
    }
});
