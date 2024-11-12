import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const SearchInputStyles = (theme: ThemeType) => StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginRight: 8,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#D1D5DB',
        paddingVertical: 8,
        fontSize: 16,
        color: theme.textColor,
    },
    label: {
        position: 'absolute',
        left: 0,
        top: 8,
    }
});
