import * as React from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {ProductsList} from "../../../../types";
import {height, width} from "../../../constants/Layout";

const newCollectionBanner = require('../../../../assets/images/banners/new_collection_banner.png')
const menHatsBanner = require('../../../../assets/images/banners/men_hats_collection_banner.png')
const blackBanner = require('../../../../assets/images/banners/black_collection_banner.png')

export default function CollectionGrid() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={newCollectionBanner} style={styles.banner1}/>
                <View style={styles.newCollectionTextContainer}>
                    <Text style={styles.newCollectionText}>New Collection</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ backgroundColor: '#1E1F28', width: width/2, height: height/4  }}>
                        <Text style={{ color: '#EF3651', fontSize: 35, fontWeight: 'bold', margin: 20 }}>Summer Sale</Text>
                    </View>
                    <View>
                        <Image source={blackBanner} style={{ width: width/2, height: height/4 }}/>
                        <View style={[styles.blackTextContainer, {height: 270,}]}>
                            <Text style={styles.blackText}>Black</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={menHatsBanner} style={{ width: width/2, height: height/2 }}/>
                    <View style={styles.menHatsTextContainer}>
                        <Text style={styles.menHatsText}>Men's Hats</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: "column"
    },
    menHatsTextContainer: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 0,
        height: 70,
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    menHatsText: {
        color: 'white',
        fontSize: 30,
        fontWeight: "bold"
    },
    newCollectionTextContainer: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 0,
        height: 300,
        alignItems: "center",
        justifyContent: 'center',
    },
    newCollectionText: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold"
    },
    blackTextContainer: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 0,
        height: 330,
        alignItems: "flex-start",
        justifyContent: 'center',
    },
    blackText: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold"
    },
    banner1: {
        width: width,
        height: height / 2,
    },
    banner2: {
        width: width/2,
        height: height/2
    },
    banner3: {

    },
    bottomGrid: {
        flexDirection: "row"
    },
    start: {
        flexDirection: "column"
    }
});
