import {StyleSheet} from "react-native";

export const SplashPageStyles = StyleSheet.create({
    page: {
        width: 60,
        height: 90,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        borderLeftWidth: 1,
        borderLeftColor: '#8455b2',
        position: 'absolute',
        right: -4,
        top: -4,
        overflow: 'hidden',
        backgroundColor: '#8455b2',
        transformOrigin: 'left',
        transform: [
            {perspective: 150},
            {rotateY: '0deg'},
        ],
    }
});
