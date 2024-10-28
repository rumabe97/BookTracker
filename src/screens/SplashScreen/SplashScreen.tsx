import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SplashPage from "../../components/SplashComponents/SplashPage.tsx";
import {SplashScreenStyles} from "./SplanshScreenStyles.ts";
import {HealthCheck} from "../../core/entities/HealthCheck";
import {getHealth} from "../../core/services/HealthCheck/getHealth.ts";

const SplashScreen = () => {
    const [healthData, setData] = useState<HealthCheck>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHealth();
            setData(result);
        };
        fetchData().then(() => console.log(healthData));
    }, []);
    return (
        <View style={SplashScreenStyles.container}>
            <View style={SplashScreenStyles.loader}>
                <SplashPage delay={600}></SplashPage>
                <SplashPage delay={400}></SplashPage>
                <SplashPage delay={200}></SplashPage>
                <SplashPage delay={0}></SplashPage>
            </View>
            <Text style={SplashScreenStyles.heading}>Reading</Text>
        </View>
    );
};

export default SplashScreen;
