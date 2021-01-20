import * as React from 'react';
import {StyleSheet, ScrollView, SafeAreaView, View, Text, TouchableWithoutFeedback} from 'react-native';
import ProductList from "../Components/ProductList";
import CollectionGrid from "../Components/CollectionGrid";
import Colors from "../../../constants/Colors";
import HomeBanner from "../Components/HomeBanner";
import {useNavigation} from "@react-navigation/native";
import {ProductsList} from "../../../../types";

export type ProductListProps = { productsList: ProductsList }

function LabelSection(props: ProductListProps) {
    const {productsList} = props
    const navigation = useNavigation()
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{productsList.label}</Text>
                <Text style={styles.description}>{productsList.description}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate(productsList.label + 'Screen')}>
                <Text style={styles.action}>View all</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default function HomeScreen() {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <HomeBanner/>
                <LabelSection productsList={{label: 'Sale', description: 'Super Summer Sale'}}/>
                <ProductList/>
                <LabelSection productsList={{label: 'New', description: 'You’ve never seen it before!'}}/>
                <ProductList/>
                <CollectionGrid/>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.background
    },

    sectionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: "center",
        alignContent: "center"
    },
    labelContainer: {
        flexDirection: "column"
    },
    label: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#ffffff'
    },
    description: {
        fontSize: 14,
        color: '#ffffff'
    },
    action: {
        justifyContent: "center",
        alignSelf: "center",
        color: '#ffffff'
    }
});
