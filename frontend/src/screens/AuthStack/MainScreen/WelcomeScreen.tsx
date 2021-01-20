import * as React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../../../constants/Colors";
import AuthButton from "../Components/AuthButton";
import {height, width} from "../../../constants/Layout";
import {useNavigation} from "@react-navigation/native";

const SovirLogo = require('../../../../assets/images/sovir_logo.png')

export default function WelcomeScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.welcomeTitleContainer}>
                <Text style={styles.welcomeTitle}>Welcome to Sovir!</Text>
                <Text style={styles.subTitle}>shop your brand</Text>
            </View>
            <View style={{ justifyContent: 'center', marginBottom: 150 }}>
                <Image source={SovirLogo} style={{ width: 200, height: 200, alignSelf: "center" }}/>
            </View>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('RegisterScreen')}}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('LoginScreen')}}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    welcomeTitleContainer: {
        marginHorizontal: 20,
        marginTop: 50
    },
    welcomeTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    subTitle: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center'
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
