import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const SplashPageBackground = (delay: number) => {
    const backgroundColor = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(backgroundColor, {
                    toValue: 0.2,
                    duration: 400,
                    delay,
                    useNativeDriver: false,
                }),
                Animated.timing(backgroundColor, {
                    toValue: 1,
                    duration: 1300 - delay,
                    useNativeDriver: false,
                }),
            ]),
            {iterations: -1}
        ).start();
    }, [backgroundColor]);

    return backgroundColor.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: ['#8455b2', '#4b1e77', '#663399'],
    });
}

export default SplashPageBackground;
