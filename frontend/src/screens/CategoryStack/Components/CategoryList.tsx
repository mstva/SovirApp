import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {width} from "../../../constants/Layout";
import CategoryItem from "./CategoryItem";

// @ts-ignore
export default function CategoryList({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>SUMMER SALES</Text>
                <Text style={styles.bannerDescription}>Up to 50% sale</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item}) => (<CategoryItem categoryList={item}/>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    bannerContainer: {
        flexDirection: "column",
        width: width - 20,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#FF3E3E',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10
    },
    bannerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    bannerDescription: {
        fontSize: 14
    }
});
