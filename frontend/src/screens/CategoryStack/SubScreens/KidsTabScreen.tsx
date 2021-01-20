import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CategoryList from "../Components/CategoryList";
import {kids_categories} from "../../../data/categories";
import Colors from "../../../constants/Colors";

export default function KidsTabScreen() {
  return (
    <View style={styles.container}>
      <CategoryList data={kids_categories}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
});
