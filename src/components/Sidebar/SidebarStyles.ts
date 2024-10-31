import {ThemeType} from "../../styles/Themes.ts";
import {StyleSheet} from "react-native";

export const SidebarStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        zIndex: 999,
    },
    sidebar: {
        flex: 1,
        backgroundColor: theme.containerBackground,
        width: 300,
    },
    navContainer: {
        flex: 1,
    },
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
        color: theme.textColor
    },
    activeNavItem: {
        backgroundColor: theme.activeNavItem,
    },
    activeNavLabel: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
});
