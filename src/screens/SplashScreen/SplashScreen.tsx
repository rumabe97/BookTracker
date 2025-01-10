import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashPage from "../../components/SplashComponents";
import {SplashScreenStyles} from "./SplanshScreenStyles.ts";
import {getHealth} from "../../core/services/HealthCheck/getHealth.ts";
import {useNavigation} from "@react-navigation/native";
import {version} from "../../../package.json";
import {downloadAndInstallAPK} from "./downloadApk.ts";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHealth(version);
            if (result?.downloadUrl) return downloadAndInstallAPK(result.downloadUrl);

            if (result.status === 'healthy') {
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Home' as never}]
                });
            }
        };
        fetchData().then();
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
