import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./StackParamList.ts";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const SplashScreenLazy = React.lazy(() => import('../../screens/SplashScreen'));
const HomeScreenLazy = React.lazy(() => import('../../screens/Home'));
const SearchScreenLazy = React.lazy(() => import('../../screens/SearchBook'));

const Router = () => {
    return (
        <RootStack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SplashScreen" component={SplashScreenLazy}/>
            <RootStack.Screen name="HomeScreen" component={HomeScreenLazy}/>
            <RootStack.Screen name="SearchBook" component={SearchScreenLazy}/>
        </RootStack.Navigator>
    );
};

export default Router;
