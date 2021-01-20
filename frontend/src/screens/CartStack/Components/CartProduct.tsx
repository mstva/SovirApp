import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Colors from "../../../constants/Colors";
import {AntDesign, Entypo} from "@expo/vector-icons";


type Cart = { image: string }
type cartProps = { cart: Cart }

export default function CartProduct(props: cartProps) {
    const { cart } = props
    return (
        <View style={{ flexDirection: "row", marginHorizontal: 20, marginVertical: 10, backgroundColor: '#2A2C36', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}>
            <Image source={{uri: cart.image}} style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: 150, height: 100 }}/>
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
                    <Text style={{ color: 'white' }}>$30</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
});
