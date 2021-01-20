import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import Colors from "../../../constants/Colors";
import {AntDesign, Entypo} from "@expo/vector-icons";
import CartProduct from "../Components/CartProduct";
import {width} from "../../../constants/Layout";
import {useNavigation} from "@react-navigation/native";
import Header from "../../../components/Header";


function ShippingAddress() {
    return (
        <View>
            <Text style={styles.sectionTitle}>Shipping address</Text>
            <View style={styles.addressCardContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>John Doe</Text>
                    <Text style={styles.changeButton}>Change</Text>
                </View>
                <Text style={styles.address}>3 New bridge Court</Text>
                <Text style={styles.address}>Chino Hills, CA 91709, United States</Text>
            </View>
        </View>
    )
}

function SubmitOrderButton() {
    const navigation = useNavigation()
    return(
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('SuccessScreen')}}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Submit Order</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const MasterCardIcon = require('../../../../assets/images/ic_mastercard.png')
const DHLIcon = require('../../../../assets/images/DHL-logo.png')
const UspscomIcon = require('../../../../assets/images/uspscom-logo.png')
const FedexIcon = require('../../../../assets/images/fedex-logo.png')

function Payment() {
    return(
        <View>
            <View style={{ marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: 'white' }}>Payment</Text>
                <Text style={{ color: '#EF3651', marginEnd: 20 }}>Change</Text>
            </View>
            <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
                <View style={{ backgroundColor: 'white', width: 80, height: 50, borderRadius: 10, marginVertical: 10 }}>
                    <Image source={MasterCardIcon} style={{ width: 50, height: 50, alignSelf: "center" }}/>
                </View>
                <Text style={{ alignSelf: "center", color: 'white', marginStart: 20, fontSize: 20 }}>**** **** **** 3947</Text>
            </View>
        </View>
    )
}

function DeliveryMethod() {
    return(
        <View>
            <Text style={{ marginHorizontal: 20, fontWeight: "bold", fontSize: 16, color: 'white', marginVertical: 10 }}>Delivery method</Text>
            <View style={{ marginHorizontal: 20, flexDirection: "row", width: width }}>
                <View style={{ backgroundColor: 'white', width: 80, height: 80, borderRadius: 10, marginVertical: 10, marginEnd: 20 }}>
                    <Image source={UspscomIcon} style={{ width: 60, height: 60, alignSelf: "center", resizeMode: "contain" }}/>
                    <Text style={{ fontSize: 10, color: 'gray', alignSelf: "center" }}>2-3 Days</Text>
                </View>
                <View style={{ backgroundColor: 'white', width: 80, height: 80, borderRadius: 10, marginVertical: 10, marginEnd: 20 }}>
                    <Image source={DHLIcon} style={{ width: 60, height: 60, alignSelf: "center", resizeMode: "contain" }}/>
                    <Text style={{ fontSize: 10, color: 'gray', alignSelf: "center" }}>2-3 Days</Text>
                </View>
                <View style={{ backgroundColor: 'white', width: 80, height: 80, borderRadius: 10, marginVertical: 10 }}>
                    <Image source={FedexIcon} style={{ width: 60, height: 60, alignSelf: "center" }}/>
                    <Text style={{ fontSize: 10, color: 'gray', alignSelf: "center" }}>2-3 Days</Text>
                </View>
            </View>
        </View>
    )
}

function OrderSummary() {
    return(
        <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'gray' }}>Order: </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>$112</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: 'gray' }}>Delivery: </Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white' }}>$17</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color: 'gray' }}>Summary: </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>$127</Text>
            </View>
        </View>
    )
}

export default function CheckoutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={{title: 'Checkout'}}/>
            <ShippingAddress/>
            <Payment/>
            <DeliveryMethod/>
            <OrderSummary/>
            <SubmitOrderButton/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    cartTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginTop: 50,
        marginBottom: 30,
        color: 'white'
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
    sectionTitle: {
        marginHorizontal: 20,
        color: 'white',
        fontWeight: "bold",
        marginVertical: 10,
        fontSize: 16,
    },
    addressCardContainer: {
        backgroundColor: '#2A2C36',
        borderRadius: 10,
        width: width - 40,
        height: 100,
        marginHorizontal: 20,
        marginVertical: 10
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10
    },
    nameText: {fontWeight: "bold", color: 'white'},
    changeButton: {color: '#EF3651'},
    address: {marginHorizontal: 20, color: 'white'},
});
