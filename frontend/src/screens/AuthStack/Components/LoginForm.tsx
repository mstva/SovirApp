import * as React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Colors from "../../../constants/Colors";
import {width} from "../../../constants/Layout";
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import axios from "axios";

function ActionButton() {
    const navigation = useNavigation()
    return(
        <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <View style={styles.actionContainer}>
                <Text style={styles.actionTitle}>Forgot your password?</Text>
                <AntDesign name="arrowright" size={24} color='#EF3651'/>
            </View>
        </TouchableWithoutFeedback>
    )
}

// @ts-ignore
function LoginButton({ email, password }) {
    const navigation = useNavigation()
    const onLoginPress = () => {
        axios.post('http://localhost:5000/api/login', {email, password})
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    return (
        <TouchableWithoutFeedback onPress={onLoginPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Login</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default class LoginForm extends React.Component {

    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    // @ts-ignore
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    // @ts-ignore
    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        // @ts-ignore
        const {email, password} = this.state
        return (
            <View>
                <View>
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor={'#abb4bd'}
                        style={styles.input}
                        value={email}
                        onChange={this.onEmailChange}
                    />
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor={'#abb4bd'}
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChange={this.onPasswordChange}
                    />
                </View>
                <ActionButton/>
                <LoginButton email={email} password={password}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
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
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 5,
        marginEnd: 20
    },
    actionTitle: {color: '#F5F5F5'},
});
