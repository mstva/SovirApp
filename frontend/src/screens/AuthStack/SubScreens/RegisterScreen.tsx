import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../../../constants/Colors";
import AuthSocial from "../Components/AuthSocial";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {width} from "../../../constants/Layout";
import RegisterForm from "../Components/RegisterForm";

const GoogleIcon = require('../../../../assets/images/icons/ic_google.png')
const FacebookIcon = require('../../../../assets/images/icons/ic_facebook.png')

function RegisterHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                <Ionicons name="ios-arrow-back" size={30} color="white" />
            </TouchableWithoutFeedback>
            <Text style={styles.headerTitle}>Register</Text>
        </View>
    )
}

function RegisterWithSocial() {
    return(
        <View style={{justifyContent: 'center'}}>
            <Text style={{color: 'white', textAlign: 'center', marginVertical: 10}}>Or sign up with social account</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <AuthSocial social={{title: GoogleIcon}}/>
                <AuthSocial social={{title: FacebookIcon}}/>
            </View>
        </View>
    )
}

export default class RegisterScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <RegisterHeader/>
                    <RegisterForm/>
                    <RegisterWithSocial/>
                </ScrollView>
            </SafeAreaView>
        );
    }
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
    },
    input: {
        color: Colors.dark.text,
        backgroundColor: '#2A2C36',
        borderRadius: 5,
        width: width - 40,
        height: 60,
        paddingStart: 20,
        marginHorizontal: 20,
        marginVertical: 5
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
