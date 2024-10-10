import React from 'react';
import {View} from 'react-native';
import Router from "../core/routing/AppRouting.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {AppLayoutStyles} from "./AppLayoutStyles.ts";


const AppLayout: React.FC = () => {

    return (
        <NavigationContainer>
            <View style={AppLayoutStyles.container}>
                <Router></Router>
            </View>
        </NavigationContainer>
    );
};

export default AppLayout;
