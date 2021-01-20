import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import ProductItem from "./ProductItem";
import products from "../../../data/products";
import Colors from "../../../constants/Colors";
import {width} from "../../../constants/Layout";
import {allProducts} from "../../../config/axios";

const formatData = (data: any, numColumns: number) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 2;

export default function ProductGrid() {
    return (
        <View style={styles.container}>
            <FlatList
                data={formatData(allProducts, numColumns)}
                renderItem={({ item }) => <ProductItem product={item}/>}
                // @ts-ignore
                keyExtractor={item => item._id}
                numColumns={numColumns}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        width: width,
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center"
    },
});
