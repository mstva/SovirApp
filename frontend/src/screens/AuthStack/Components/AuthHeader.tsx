import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {Title} from "../../../../types";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

export type AuthHeaderTitleProps = { AuthHeaderTitle: Title }

export default function AuthHeader(props: AuthHeaderTitleProps) {
    const {AuthHeaderTitle} = props
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                <Ionicons name="ios-arrow-back" size={30} color="white" />
            </TouchableWithoutFeedback>
            <Text style={styles.headerTitle}>{AuthHeaderTitle.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    headerContainer: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    headerTitle: {
        color: Colors.dark.text,
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 50,
        marginTop: 10
    }
});
