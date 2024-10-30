import {StyleSheet} from "react-native";

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
    },
    activeToggle: {
        backgroundColor: '#007AFF',
    },
    toggleText: {
        fontWeight: 'bold',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    bookRow: {
        justifyContent: 'space-between',
    }
});
