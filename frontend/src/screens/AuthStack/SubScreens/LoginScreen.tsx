import * as React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../../../constants/Colors";
import AuthHeader from "../Components/AuthHeader";
import AuthInput from "../Components/AuthInput";
import AuthAction from "../Components/AuthAction";
import AuthButton from "../Components/AuthButton";
import AuthSocial from "../Components/AuthSocial";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useNavigation, useRoute} from "@react-navigation/native";
import LoginForm from "../Components/LoginForm";

const GoogleIcon = require('../../../../assets/images/icons/ic_google.png')
const FacebookIcon = require('../../../../assets/images/icons/ic_facebook.png')

function LoginHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                <Ionicons name="ios-arrow-back" size={30} color="white" />
            </TouchableWithoutFeedback>
            <Text style={styles.headerTitle}>Login</Text>
        </View>
    )
}

function LoginWithSocial() {
    return(
        <View style={{justifyContent: 'center'}}>
            <Text style={{color: 'white', textAlign: 'center', marginVertical: 10}}>Or Login with social
                account</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <AuthSocial social={{title: GoogleIcon}}/>
                <AuthSocial social={{title: FacebookIcon}}/>
            </View>
        </View>
    )
}

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <LoginHeader/>
            <LoginForm/>
            <LoginWithSocial/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
        marginEnd: 20
    },
    actionTitle: {color: '#F5F5F5'},

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
