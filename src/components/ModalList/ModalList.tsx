import {FlatList, Modal, TouchableWithoutFeedback, View} from "react-native";
import Button from "../Button";
import React from "react";
import {ModalListStyles} from "./ModalList.ts";

const ModalList = ({options, isVisible, onClose, itemSelected}: {
    options: any[];
    isVisible: boolean;
    onClose: () => void,
    itemSelected: (item: any) => void
}) => {

    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={ModalListStyles.modalOverlay}>
                    <TouchableWithoutFeedback>
                        <View style={ModalListStyles.modalContent}>
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item?.value}
                                renderItem={({item}) => (
                                    <Button
                                        title={item.label}
                                        onPress={() => {
                                            itemSelected(item.value);
                                            onClose();
                                        }}
                                        buttonStyle={ModalListStyles.option}
                                        textStyle={ModalListStyles.optionText}
                                    />
                                )}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ModalList;
