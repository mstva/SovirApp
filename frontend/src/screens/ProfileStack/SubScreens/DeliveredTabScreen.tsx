import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from "../../../constants/Colors";
import OrderList from "../Components/OrderList";

export default function DeliveredTabScreen() {
    return (
        <View style={styles.container}>
            <OrderList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
});
