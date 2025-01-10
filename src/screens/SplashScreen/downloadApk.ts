import {Alert, Linking} from "react-native";
import i18n from "../../lib/i18n.ts";

export const downloadAndInstallAPK = async (downloadUrl: string) => {
    Alert.alert(
        i18n.t('title', {ns:'downloadAlert'}),
        i18n.t('subTitle', {ns:'downloadAlert'}),
        [
            {
                text: i18n.t('button', {ns:'downloadAlert'}),
                onPress: () => download(downloadUrl),
            },
        ]
    );
};

const download = async (url: string) => {
    try {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`${i18n.t('error', {ns:'downloadAlert'})} ${url}`);
        }
    } catch (error) {
        console.error(i18n.t('error', {ns:'downloadAlert'}), error);
    }
};
