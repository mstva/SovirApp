import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {CategoryList} from "../../../../types";
import {width} from "../../../constants/Layout";

export type CategoryItemProps = { categoryList: CategoryList }

export default function CategoryItem(props: CategoryItemProps) {
    const { categoryList } = props
    return (
        <View style={styles.container}>
            <Text style={styles.categoryName}>{categoryList.name}</Text>
            <Image
                // @ts-ignore
                source={categoryList.image}
                style={styles.categoryImage}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row" ,
        width: width-20,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#2A2C36',
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    categoryName: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginStart: 20,
        color: 'white'
    },
    categoryImage: {
        width: 200,
        height: 100,
        borderRadius: 10
    }
});
