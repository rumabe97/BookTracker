import {useEffect, useRef} from "react";
import {Animated} from "react-native";


export const IndicatorAnimation = (activeTab: "newest" | "relevance", width: number) => {
    const indicatorPosition = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(indicatorPosition, {
            toValue: activeTab === 'newest' ? 0 : 1,
            useNativeDriver: true,
        }).start();
    }, [activeTab]);

    return indicatorPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [0, (width - 32) / 2],
    });
}

export default IndicatorAnimation;
