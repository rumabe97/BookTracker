import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const MyBooksStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        backgroundColor: theme.containerBackground
    },
    bookRow: {
        justifyContent: 'space-between',
    },
    flatContainer: {
        flex:1,
    }
});
