import React, {useEffect, useState} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Button from "../Button";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {HomeHeaderStyles} from "./HomeHeaderStyles.tsx";
import IndicatorAnimation from "./animations/IndicatorAnimation.ts";


const HomeHeader = ({handleType}: { handleType: (newType: "newest" | "relevance") => void }) => {
    const [activeTab, setActiveTab] = useState('newest');
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const insets = useSafeAreaInsets();

    const {currentTheme} = useTheme();
    const homeHeaderStyles = HomeHeaderStyles(currentTheme, screenWidth);
    const indicatorAnimation = IndicatorAnimation(activeTab as any, screenWidth);
    useEffect(() => {
        const handleOrientationChange = () => {
            setScreenWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', handleOrientationChange);
    }, []);

    return (
        <View style={homeHeaderStyles.container}>
            <Animated.View style={[
                homeHeaderStyles.header,
                {paddingTop: insets.top},
            ]}>
                <View style={homeHeaderStyles.tabBar}>
                    <Button
                        title="Newest"
                        onPress={() => {
                            setActiveTab('newest');
                            handleType('newest');
                        }
                        }
                        buttonStyle={homeHeaderStyles.tab}
                        textStyle={[homeHeaderStyles.tabText, activeTab === 'newest' && homeHeaderStyles.activeTabText]}
                    />
                    <Button
                        title="Relevant"
                        onPress={() => {
                            setActiveTab('relevance');
                            handleType('relevance');
                        }
                        }
                        buttonStyle={homeHeaderStyles.tab}
                        textStyle={[homeHeaderStyles.tabText, activeTab === 'relevance' && homeHeaderStyles.activeTabText]}
                    />
                    <Animated.View
                        style={[
                            homeHeaderStyles.indicator,
                            {transform: [{translateX: indicatorAnimation}]}
                        ]}
                    />
                </View>
            </Animated.View>
            <Animated.View
                style={[
                    homeHeaderStyles.blur,
                    {top: insets.top + 100}
                ]}
            />
        </View>
    );
};

export default HomeHeader;
