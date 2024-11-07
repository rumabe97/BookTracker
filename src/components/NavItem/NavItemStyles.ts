import {ThemeType} from "../../styles/Themes.ts";
import {StyleSheet} from "react-native";

export const NavItemStyles = (theme: ThemeType) => StyleSheet.create({
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: theme.background,
    },
    navLabel: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
        color: theme.textColor
    },
    activeNavItem: {
        backgroundColor: theme.activeNavItem,
    },
    activeNavLabel: {
        color: theme.primaryColor,
        fontWeight: 'bold',
    },
});
