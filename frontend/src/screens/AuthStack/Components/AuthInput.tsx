import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, TextInput} from 'react-native';
import {Title} from "../../../../types";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import {width} from "../../../constants/Layout";

export type InputTitleProps = { inputTitle: Title }

export default function AuthInput(props: InputTitleProps) {
    const {inputTitle} = props
    const navigation = useNavigation()
    return (
        <View style={styles.inputContainer}>
            {inputTitle.title == 'Password'
                ?
                <TextInput
                    placeholder={inputTitle.title}
                    placeholderTextColor={'#abb4bd'}
                    style={styles.input}
                    secureTextEntry={true}
                />
                :
                <TextInput
                    placeholder={inputTitle.title}
                    placeholderTextColor={'#abb4bd'}
                    style={styles.input}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    inputContainer: {
        marginHorizontal: 20,
        marginVertical: 5
    },
    input: {
        color: Colors.dark.text,
        backgroundColor: '#2A2C36',
        borderRadius: 5,
        width: width - 40,
        height: 60,
        paddingStart: 20
    }
});
