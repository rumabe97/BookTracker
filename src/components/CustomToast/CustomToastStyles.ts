import {StyleSheet} from "react-native";
import {ThemeType} from "../../styles/Themes.ts";

export const CustomToastStyles = (theme: ThemeType) => StyleSheet.create({
    toast: {
        borderLeftColor: '#F59E0B',
        borderLeftWidth: 5,
        height: 150,
        flexDirection: 'column',
        padding: 10,
        marginTop: 40,
        zIndex:10000000000000
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 10,
        zIndex:10000000000000
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 16,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: '100%',
        flexShrink: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    confirmButton: {
        backgroundColor: theme.deleteColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor:theme.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
