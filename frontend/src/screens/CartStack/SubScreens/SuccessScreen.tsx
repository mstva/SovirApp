import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import Colors from "../../../constants/Colors";
import {AntDesign, Entypo} from "@expo/vector-icons";
import CartProduct from "../Components/CartProduct";
import {height, width} from "../../../constants/Layout";
import {useNavigation} from "@react-navigation/native";
import Header from "../../../components/Header";

const SuccessBanner =  require('../../../../assets/images/success_banner.png')

function ContinueShoppingButton() {
    const navigation = useNavigation()
    return(
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('Main')}}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Continue Shopping</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default function SuccessScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: width, height: height }}>
                <Image source={SuccessBanner} style={{ width: width, height: height }}/>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 300, alignItems: "center", justifyContent: 'center', }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold" }}>Success!</Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        Your order will be delivered soon.{"\n"}
                        Thank you for choosing our app!
                    </Text>
                    <ContinueShoppingButton/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: '#EF3651',
        borderRadius: 25,
        width: 200,
        height: 42,
        justifyContent: "center"
    },
    buttonTitle: {
        color: '#F5F5F5',
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    },
});
