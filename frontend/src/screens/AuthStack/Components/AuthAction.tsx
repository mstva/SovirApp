import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {Title} from "../../../../types";
import {useNavigation} from "@react-navigation/native";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

export type ActionProps = { actionTitle: Title }

export default function AuthAction(props: ActionProps) {
    const {actionTitle} = props
    const navigation = useNavigation()
    return (
        <View style={styles.actionContainer}>
            <Text style={styles.actionTitle}>{actionTitle.title}</Text>
            <AntDesign name="arrowright" size={24} color='#EF3651' />
        </View>
    );
}

const styles = StyleSheet.create({
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
        marginEnd: 20
    },
    actionTitle: { color: '#F5F5F5' }
});
