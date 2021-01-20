import * as React from 'react';
import {StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';
import ProductItem from "../../HomeStack/Components/ProductItem";
import products from "../../../data/products";
import Colors from "../../../constants/Colors";
import {width} from "../../../constants/Layout";
import ProductGrid from "../../HomeStack/Components/ProductGrid";
import Header from "../../../components/Header";
import {useRoute} from "@react-navigation/native";

export default function SettingScreen() {
    const routes = useRoute()
    // @ts-ignore
    const { name } = routes.params
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={{ title: name }}/>
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
