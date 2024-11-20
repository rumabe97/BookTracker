import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const ModalListStyles = (theme:ThemeType) => StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        backgroundColor: theme.background,
        borderRadius: 12,
        padding: 20,
    },
    option: {
        padding: 15
    },
    optionText: {
        fontSize: 16,
        color:theme.textColor
    },
});
