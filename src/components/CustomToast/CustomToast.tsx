import React from "react";
import {View} from "react-native";
import Toast, {BaseToast, ErrorToast, ToastConfig} from "react-native-toast-message";
import {CustomToastStyles} from "./CustomToastStyles.ts";
import Button from "../Button";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";

const CustomToast = () => {
    const {currentTheme} = useTheme();
    const customToastStyles = CustomToastStyles(currentTheme);

    const toastConfig: ToastConfig = {
        error: (props) => (
            <ErrorToast
                {...props}
                style={{borderLeftColor: 'red', maxHeight: 500, height: undefined}}
                contentContainerStyle={{padding: 20, backgroundColor: 'rgba(214,16,16,0.1)'}}
                text1Style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
                text2Style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    flexWrap: 'wrap',
                    width: '100%',
                    flexShrink: 1,
                }}
                text2NumberOfLines={0}
            />
        ),
        success: (props) => (
            <BaseToast
                {...props}
                style={{borderLeftColor: 'green', maxHeight: 500, height: undefined}}
                contentContainerStyle={{padding: 20, backgroundColor: 'rgba(0,166,0,0.1)'}}
                text1Style={customToastStyles.text1}
                text2Style={customToastStyles.text2}
                text2NumberOfLines={0}
            />
        ),
        deleteConfirmation: ({text1, text2, props}) => (
            <BaseToast
                style={customToastStyles.toast}
                contentContainerStyle={customToastStyles.contentContainer}
                text1Style={customToastStyles.text1}
                text2Style={customToastStyles.text2}
                text1={text1}
                text2={text2}
                text2NumberOfLines={0}
                renderTrailingIcon={() => (
                    <View style={customToastStyles.buttonContainer}>
                        <Button
                            title="Confirm"
                            onPress={props.onConfirm}
                            buttonStyle={customToastStyles.confirmButton}
                            textStyle={customToastStyles.buttonText}
                        />
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                            buttonStyle={customToastStyles.cancelButton}
                            textStyle={customToastStyles.buttonText}
                        />
                    </View>
                )}
            />
        ),
    };

    return (
        <Toast config={toastConfig}/>
    );
};

export default CustomToast;
