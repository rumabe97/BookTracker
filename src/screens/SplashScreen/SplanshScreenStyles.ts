import {StyleSheet} from "react-native";

export const SplashScreenStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#663399',
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:5
    },
    heading: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        fontSize: 30,
        position: 'relative',
    },
    loader: {
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#FFFFFF',
        width: 120,
        height: 90,
        position: 'relative',
        transform: [{perspective: 150}],
    }
});
