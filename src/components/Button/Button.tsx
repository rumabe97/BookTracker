import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {ButtonProps} from "./ButtonProps.ts";

const Button = ({onPress, title, buttonStyle, textStyle}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
        >
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
