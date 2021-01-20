import * as React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import ProductItem from "../Components/ProductItem";
import products from "../../../data/products";
import Colors from "../../../constants/Colors";
import {width} from "../../../constants/Layout";
import ProductGrid from "../Components/ProductGrid";
import Header from "../../../components/Header";

export default function NewScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={{title: 'New Arrived'}}/>
            <ProductGrid/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        width: width,
    },
});
