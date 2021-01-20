import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {men_categories, women_categories} from "../../../data/categories";
import Colors from "../../../constants/Colors";
import CategoryList from "../Components/CategoryList";

export default function MenTabScreen() {
  return (
    <View style={styles.container}>
      <CategoryList data={men_categories}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
})
