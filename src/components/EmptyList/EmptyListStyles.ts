import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const EmptyListStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.containerBackground,
        padding: 20,

    },
    iconContainer: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
        color: theme.textColor
    },
    description: {
        fontSize: 16,
        color: theme.secondaryTextColor,
        marginBottom: 24,
        textAlign: 'center',
        maxWidth: 300,
    },
    button: {
        backgroundColor: theme.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    icon: {
        color: theme.textColor
    }
});
