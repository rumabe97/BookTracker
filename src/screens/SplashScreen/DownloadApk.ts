import {Alert, NativeModules} from "react-native";
import RNFS from 'react-native-fs';

const {InstallerModule} = NativeModules;

export const downloadAndInstallAPK = async (downloadUrl: string) => {
    Alert.alert(
        'Nueva actualización disponible',
        'Hay una nueva versión de la aplicación disponible. ¿Quieres descargarla ahora?',
        [
            {
                text: 'Actualizar',
                onPress: () => download(downloadUrl),
            },
        ]
    );
};

const download = async (downloadUrl: string) => {

    try {
        const storageDir = RNFS.DocumentDirectoryPath;
        const downloadPath = `${storageDir}/BookTracker-latest.apk`;

        const downloadResult = await RNFS.downloadFile({
            fromUrl: downloadUrl,
            toFile: downloadPath,
            progressDivider: 1,
            progress: (data) => {
                const percentage = (data.bytesWritten / data.contentLength) * 100;
            },
        }).promise;

        if (downloadResult.statusCode === 200) {
            await openLauncher(downloadPath);
        } else {
            Alert.alert("Error", "No se pudo completar la descarga");
        }
    } catch (error) {
        console.error('Error al descargar el APK:', error);
    }
};

const openLauncher = async (filePath: string) => {
    try {
        await InstallerModule.installApk(filePath);
    } catch (error) {
        console.error("APK installation failed:", error);
    }
};
