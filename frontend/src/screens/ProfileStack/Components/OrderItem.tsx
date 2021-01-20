import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import Colors from "../../../constants/Colors";
import {Order} from "../../../../types";
import {useNavigation} from "@react-navigation/native";


export type OrderItemProps = { order: Order }

export default function OrderItem(props: OrderItemProps) {
    const { order } = props
    const navigation = useNavigation()
    return (
        <View style={styles.orderContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <Text style={styles.text}>Order Number: {order.order_number}</Text>
                <Text style={styles.text}>05-12-2019</Text>
            </View>
            <Text style={[styles.text,{margin: 10}]}>Tracking number: {order.tracking_number}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <Text style={styles.text}>Quantity: {order.quantity}</Text>
                <Text style={styles.text}>Total Amount: ${order.total_amount}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('OrderDetailScreen')}>
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: 'white', padding: 5, width: 100, height: 28, alignContent: 'center'  }}>
                        <Text style={[styles.text, {alignContent: 'center', alignItems: 'center', alignSelf: 'center'}]}>Details</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={{ color: 'green' }}>{order.status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    orderContainer: {
        backgroundColor: '#2A2C36',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
    }
});
