import React from "react";
import {Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "../../context/DarkMode/DarkModeProvider.tsx";
import {EmptyListStyles} from "./EmptyListStyles.ts";

const EmptyList = ({title, description}: { title: string, description: string }) => {
    const {currentTheme} = useTheme();
    const emptyListStyles = EmptyListStyles(currentTheme);

    return (
        <View style={[emptyListStyles.container]}>
            <View style={emptyListStyles.iconContainer}>
                <FontAwesomeIcon icon={faBookOpen} size={96} style={emptyListStyles.icon}/>
            </View>
            <Text style={emptyListStyles.title}>{title}</Text>
            <Text style={emptyListStyles.description}>{description}</Text>
        </View>
    );
}

export default EmptyList;
