import {FlatList, Modal, TouchableWithoutFeedback, View} from "react-native";
import Button from "../Button";
import React from "react";
import {ModalListStyles} from "./ModalList.ts";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";

const ModalList = ({options, isVisible, onClose, itemSelected}: {
    options: any[];
    isVisible: boolean;
    onClose: () => void,
    itemSelected: (item: any) => void
}) => {
    const {currentTheme} = useTheme();
    const modalListStyles = ModalListStyles(currentTheme);
    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={modalListStyles.modalOverlay}>
                    <TouchableWithoutFeedback>
                        <View style={modalListStyles.modalContent}>
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
                                        buttonStyle={modalListStyles.option}
                                        textStyle={modalListStyles.optionText}
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
