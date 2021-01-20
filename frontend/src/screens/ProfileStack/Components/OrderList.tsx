import * as React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import orders from "../../../data/orders";
import OrderItem from "./OrderItem";

export default function OrderList() {
    return (
        <FlatList data={orders} renderItem={({item}) => (<OrderItem order={item}/>)}/>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});
