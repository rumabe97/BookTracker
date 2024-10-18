import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

const SplashPageRotation = (delay: number) => {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const runAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(rotation, {
                        toValue: 0.8,
                        duration: 700,
                        delay: delay,
                        easing: Easing.bezier(0, 0.39, 1, 0.68),
                        useNativeDriver: false,
                    }),
                    Animated.timing(rotation, {
                        toValue: 1,
                        duration: 1000 - delay,
                        easing: Easing.bezier(0, 0.39, 1, 0.68),
                        useNativeDriver: false,
                    }),
                ]),
                {iterations: -1}
            ).start();
        };

        runAnimation();
    }, [rotation]);

    return rotation.interpolate({
        inputRange: [0, 0.8, 1],
        outputRange: ['0deg', '-180deg', '-180deg'],
    });
}

export default SplashPageRotation;
