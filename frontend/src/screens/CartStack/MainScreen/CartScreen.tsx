import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback, SafeAreaView, TextInput} from 'react-native';
import Colors from "../../../constants/Colors";
import {AntDesign, Entypo} from "@expo/vector-icons";
import CartProduct from "../Components/CartProduct";
import {width} from "../../../constants/Layout";
import {useNavigation} from "@react-navigation/native";

function CheckoutButton() {
    const navigation = useNavigation()
    return(
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('CheckoutScreen')}}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Check Out</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

function PromoCodeInput() {
    return(
        <View style={styles.promoCodeContainer}>
            <TextInput placeholder={'Enter your promo code'} placeholderTextColor={'gray'} style={styles.promoCodeInput}/>
            <Entypo name="arrow-with-circle-right" size={30} color="white" style={styles.arrowIcon} />
        </View>
    )
}

function TotalAmount() {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginVertical: 10 }}>
            <Text style={{ color: 'gray', fontSize: 16, fontWeight: "bold" }}>Total Amount: </Text>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold" }}>$120</Text>
        </View>
    )
}

const Pullover1 = require('../../../../assets/images/plover1.png')
const Pullover2 = require('../../../../assets/images/plover2.png')
const Pullover3 = require('../../../../assets/images/plover3.png')

export default function CartScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.cartTitle}>My Cart</Text>
            <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10, backgroundColor: '#2A2C36', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                <Image source={Pullover1} style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: 150, height: 100 }}/>
                <View>
                    <Text style={{ color: 'white', marginHorizontal: 20, marginTop: 10, fontSize: 16, fontWeight: "bold" }}>Sport Dress</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                        <Text style={{ color: 'white', marginEnd: 20, fontSize: 12 }}>Color: Black</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}>Size: L</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", marginStart: 20, marginEnd: 50 }}>
                            <AntDesign name="minuscircle" size={20} color="white" />
                            <Text style={{ color: 'white', marginHorizontal: 5 }}>1</Text>
                            <AntDesign name="pluscircle" size={20} color="white" />
                        </View>
                        <Text style={{ color: 'white' }}>$30</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10, backgroundColor: '#2A2C36', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                <Image source={Pullover2} style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: 150, height: 100 }}/>
                <View>
                    <Text style={{ color: 'white', marginHorizontal: 20, marginTop: 10, fontSize: 16, fontWeight: "bold" }}>Pullover</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                        <Text style={{ color: 'white', marginEnd: 20, fontSize: 12 }}>Color: Black</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}>Size: L</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", marginStart: 20, marginEnd: 50 }}>
                            <AntDesign name="minuscircle" size={20} color="white" />
                            <Text style={{ color: 'white', marginHorizontal: 5 }}>1</Text>
                            <AntDesign name="pluscircle" size={20} color="white" />
                        </View>
                        <Text style={{ color: 'white' }}>$40</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10, backgroundColor: '#2A2C36', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
                <Image source={Pullover3} style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: 150, height: 100 }}/>
                <View>
                    <Text style={{ color: 'white', marginHorizontal: 20, marginTop: 10, fontSize: 16, fontWeight: "bold" }}>Mini Pullover</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                        <Text style={{ color: 'white', marginEnd: 20, fontSize: 12 }}>Color: Black</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}>Size: L</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{ flexDirection: "row", marginStart: 20, marginEnd: 50 }}>
                            <AntDesign name="minuscircle" size={20} color="white" />
                            <Text style={{ color: 'white', marginHorizontal: 5 }}>1</Text>
                            <AntDesign name="pluscircle" size={20} color="white" />
                        </View>
                        <Text style={{ color: 'white' }}>$50</Text>
                    </View>
                </View>
            </View>
            <PromoCodeInput/>
            <TotalAmount/>
            <CheckoutButton/>
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
        marginTop: 20,
        marginBottom: 10,
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
    promoCodeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width-40,
        marginHorizontal: 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#2A2C36',
        marginVertical: 10
    },
    promoCodeInput: {
        paddingStart: 20,
        width: width-100,
        color: 'gray'
    },
    arrowIcon: {
        alignSelf: "center"
    },

});
