import {StyleSheet} from "react-native";

export const ModalListStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    option: {
        padding: 15
    },
    optionText: {
        fontSize: 16,
    },
});
