import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const HeaderStyles = (theme: ThemeType) => StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: theme.containerBackground
    },
    menuIcon: {
        fontSize: 24,
        color: theme.textColor
    },
    darkModeToggle: {
        fontSize: 24,
        color: theme.textColor
    },
});
