import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {ButtonProps} from "./ButtonProps.ts";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

const Button = ({onPress, title, buttonStyle, textStyle, disabled = false, icon}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            disabled={disabled}
        >
            {icon && <FontAwesomeIcon icon={icon} style={textStyle as any}/>}
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
