import {useEffect, useRef} from "react";
import {Animated} from "react-native";

export const LabelAnimation = (toValue: number) => {
    const labelAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(labelAnimation, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [labelAnimation, toValue]);

    return labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 0],
    });
}

export default LabelAnimation;
