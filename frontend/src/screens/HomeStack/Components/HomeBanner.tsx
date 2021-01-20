import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {width} from "../../../constants/Layout";

const homeBanner = require('../../../../assets/images/banners/home_banner.jpg')

export default function HomeBanner() {
    return (
        <View>
            <Image source={homeBanner} style={styles.banner}/>
            <View style={styles.overlayContainer}>
                <Text style={styles.overlayText}>Street Clothes</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 0,
        height: 330,
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    overlayText: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold"
    },
    banner: {
        width: width,
        height: 200
    },
});
