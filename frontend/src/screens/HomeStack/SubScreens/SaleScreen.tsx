import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import ProductGrid from "../Components/ProductGrid";
import Colors from "../../../constants/Colors";
import {width} from "../../../constants/Layout";
import Header from "../../../components/Header";


export default function SaleScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={{title: 'Summer Sale'}}/>
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
