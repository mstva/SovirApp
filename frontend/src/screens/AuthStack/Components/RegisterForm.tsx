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
        <TouchableWithoutFeedback onPress={()=> navigation.navigate('LoginScreen')}>
            <View style={styles.actionContainer}>
                <Text style={styles.actionTitle}>Already have an account?</Text>
                <AntDesign name="arrowright" size={24} color='#EF3651'/>
            </View>
        </TouchableWithoutFeedback>
    )
}

// @ts-ignore
function RegisterButton({ name, email, password }) {
    const navigation = useNavigation()
    const onRegisterPress = () => {
        axios.post('http://localhost:5000/api/register', {name, email, password})
            .then(response => {
                navigation.navigate('LoginScreen', { msg: response.data.msg })
            })
            .catch(error => console.log(error))
    }
    return (
        <TouchableWithoutFeedback onPress={onRegisterPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Register</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default class RegisterForm extends React.Component {

    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    // @ts-ignore
    onNameChange = (e) => {
        this.setState({name: e.target.value})
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
        const {name, email, password} = this.state
        return (
            <View>
                <View>
                    <TextInput
                        placeholder={'Full Name'}
                        placeholderTextColor={'#abb4bd'}
                        style={styles.input}
                        value={name}
                        onChange={this.onNameChange}
                    />
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
                <RegisterButton name={name} email={email} password={password}/>
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
