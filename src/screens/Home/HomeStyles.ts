import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const HomeStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        backgroundColor: theme.containerBackground
    },
    controls: {
        marginBottom: 16,
    },
    toggleGroup: {
        flexDirection: 'row',
        marginBottom: 8,
        gap: 10
    },
    toggleButton: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: theme.background
    },
    activeToggle: {
        backgroundColor: '#007AFF',
    },
    toggleText: {
        fontWeight: 'bold',
        color: theme.textColor
    },
    picker: {
        height: 50,
        width: '100%',
        color: theme.textColor
    },
    bookRow: {
        justifyContent: 'space-between',
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 4,
    }
});
