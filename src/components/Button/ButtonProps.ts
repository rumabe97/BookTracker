import {StyleProp, TextStyle, ViewStyle} from "react-native";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export interface ButtonProps {
    onPress: () => void;
    title: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
    icon?: IconDefinition;
}
