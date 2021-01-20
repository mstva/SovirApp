import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CategoryList from "../../CategoryStack/Components/CategoryList";
import {kids_categories} from "../../../data/categories";
import Colors from "../../../constants/Colors";

export default function CancelledTabScreen() {
  return (
    <View style={styles.container}>
      <Text>Cancelled</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background
  },
});
