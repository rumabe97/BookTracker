import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";


export const HomeHeaderStyles = (theme: ThemeType, width: number) => StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.containerBackground,
        zIndex: 1000,
    },
    tabBar: {
        flexDirection: 'row',
        position: 'relative',
    },
    tab: {
        flex: 1,
        paddingVertical: 16,
        alignItems: 'center',
    },
    tabText: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeTabText: {
        color: theme.textColor,
    },
    indicator: {
        position: 'absolute',
        bottom: 0,
        width: (width - 32) / 2,
        height: 4,
        backgroundColor: '#007AFF',
    },
    blur: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 24,
        backgroundColor: theme.containerBackground,
        zIndex: 999,
    },
});
