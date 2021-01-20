import * as React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import Colors from "../../../constants/Colors";
import Header from "../../../components/Header";
import {useRoute} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import DeliveredTabScreen from "./DeliveredTabScreen";
import ProcessingTabScreen from "./ProcessingTabScreen";
import CancelledTabScreen from "./CancelledTabScreen";

const plover_one = require('../../../../assets/images/plover1.png')
const plover_two = require('../../../../assets/images/plover2.png')
const plover_three = require('../../../../assets/images/plover2.png')

export default function OrderDetailScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header headerTitle={{ title: 'Order Details' }}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <Text style={{color: 'white'}}>Order Number: 1947034</Text>
                <Text style={{color: 'white'}}>05-12-2019</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                <Text style={{color: 'white'}}>Tracking number: IW3475453455</Text>
                <Text style={{color: 'white'}}>Delivered</Text>
            </View>
            {/*<View style={styles.container}>*/}
            {/*    <Image source={plover_one} style={styles.categoryImage}/>*/}
            {/*    <Text style={{}}>{categoryList.name}</Text>*/}
            {/*</View>*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
});
