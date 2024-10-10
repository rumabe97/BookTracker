import React from 'react';
import {View, Text} from 'react-native';
import SplashPage from "../../components/SplashComponents/SplashPage.tsx";
import {SplashScreenStyles} from "./SplanshScreenStyles.ts";

const SplashScreen: React.FC = () => {
    return (
        <View style={SplashScreenStyles.container}>
            <View style={SplashScreenStyles.loader}>
                <SplashPage></SplashPage>
                <SplashPage></SplashPage>
                <SplashPage></SplashPage>
            </View>
            <Text style={SplashScreenStyles.heading}>Reading</Text>
        </View>
    );
};

export default SplashScreen;
