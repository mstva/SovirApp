import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {Title} from "../../../../types";
import {useNavigation} from "@react-navigation/native";
import {width} from "../../../constants/Layout";

export type ButtonTitleProps = { buttonTitle: Title }

export default function AuthButton(props: ButtonTitleProps) {
    const {buttonTitle} = props
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('Main')}}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>{buttonTitle.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#EF3651',
        borderRadius: 10,
        width: width - 40,
        height: 60,
        justifyContent: "center"
    },
    buttonTitle: {
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: "bold",
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
    }
});
