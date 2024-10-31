import {ThemeType} from "../../styles/Themes.ts";
import {StyleSheet} from "react-native";

export const SidebarHeaderStyles = (theme: ThemeType) => StyleSheet.create({
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.background,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: theme.secondaryTextColor,
    },
    statValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.textColor
    },
});
