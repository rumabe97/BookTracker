import React from "react";
import {Animated, View} from "react-native";
import {SplashPageStyles} from "./SplahsPageStyles.ts";
import SplashPageRotation from "./animations/SplashPageRotation.ts";
import SplashPageBackground from "./animations/SplashPageBackground.ts";

const SplashPage: React.FC<{ delay: number }> = ({delay}) => {
    const rotateY = SplashPageRotation(delay);
    const bgColor = SplashPageBackground(delay);

    return (
        <View>
            <Animated.View
                style={[SplashPageStyles.page, {backgroundColor: bgColor, transform: [{rotateY}]}]}>
            </Animated.View>
        </View>
    );
};

export default SplashPage;
