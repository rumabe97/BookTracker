import {Alert, NativeModules, PermissionsAndroid, Platform} from "react-native";
import RNFS from 'react-native-fs';
import RNBlobUtil from 'react-native-blob-util';

const {InstallerModule} = NativeModules;

export const downloadAndInstallAPK = async (downloadUrl: string) => {
    Alert.alert(
        'Nueva actualización disponible',
        'Hay una nueva versión de la aplicación disponible. ¿Quieres descargarla ahora?',
        [
            {
                text: 'Actualizar',
                onPress: async () => {
                    const hasPermission = await requestPermissions();

                    if (!hasPermission) {
                        Alert.alert('Permiso denegado', 'No se puede proceder sin los permisos necesarios.');
                        return;
                    }
                    await download(downloadUrl);
                },
            },
        ]
    );
};

const requestPermissions = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            // PermissionsAndroid.PERMISSIONS.REQUEST_INSTALL_PACKAGES,
        ]);

        return Object.values(granted).every(status => status === PermissionsAndroid.RESULTS.GRANTED);
    }
    return true;
};

const download = async (downloadUrl: string) => {
    const storageDir = RNFS.DocumentDirectoryPath;
    const downloadPath = `${storageDir}/BookTracker-latest.apk`;
    /*try {
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
    }*/
    RNBlobUtil.config({
        fileCache: true,
        path: downloadPath,
    })
        .fetch('GET', downloadUrl)
        .progress({count: 10}, (received, total) => {
            const percentage = Math.floor((received / total) * 100);
            // setProgress(percentage);
            console.log(`Progreso: ${percentage}%`);
        })
        .then((res) => {
            console.log('Descarga completada. Path:', res.path());
            openLauncher(res.path());
        })
        .catch((err) => {
            console.error('Error al descargar el APK:', err);
            Alert.alert('Error', 'Error al descargar el APK.');
        });
};

const openLauncher = async (filePath: string) => {
    /*try {
        await InstallerModule.installApk(filePath);
    } catch (error) {
        console.error("APK installation failed:", error);
    }*/
    await RNBlobUtil.android.actionViewIntent(
        filePath,
        'application/vnd.android.package-archive',
    );
};
