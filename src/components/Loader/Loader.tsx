import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";

const Loader = () => {
    const {isLoading} = useLoader();

    return (
        <Modal visible={isLoading} transparent>
            <View style={styles.overlay}>
                <ActivityIndicator size="large" color="#007AFF"/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;
