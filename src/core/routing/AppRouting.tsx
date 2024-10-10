import SplashScreen from "../../screens/SplashScreen/SplashScreen.tsx";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./StackParamList.ts";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {
    return (
        <RootStack.Navigator initialRouteName="SplashScreen">
            <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        </RootStack.Navigator>
    );
};

export default Router;
