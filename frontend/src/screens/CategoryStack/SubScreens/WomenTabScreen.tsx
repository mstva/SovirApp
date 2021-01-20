import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Colors from "../../../constants/Colors";
import {women_categories} from "../../../data/categories";
import CategoryList from "../Components/CategoryList";


export default function WomenTabScreen() {
    return (
        <View style={styles.container}>
            <CategoryList data={women_categories}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
});
