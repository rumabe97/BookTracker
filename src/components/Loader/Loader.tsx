import React from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {useLoader} from "../../context/Loader/LoaderProvider.tsx";
import {LoaderStyles} from "./LoaderStyles.ts";

const Loader = () => {
    const {isLoading} = useLoader();

    return (
        <Modal visible={isLoading} transparent>
            <View style={LoaderStyles.overlay}>
                <ActivityIndicator size="large" color="#007AFF"/>
            </View>
        </Modal>
    );
};

export default Loader;
