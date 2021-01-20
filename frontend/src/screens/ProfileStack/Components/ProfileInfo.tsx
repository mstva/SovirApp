import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ProfileAvatar = require('../../../../assets/images/profile_avatar.png')

export default function ProfileInfo() {
    return (
        <View style={styles.profileInfoContainer}>
            <Image source={ProfileAvatar} style={styles.profileAvatar}/>
            <View style={styles.profileInfo}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Matilda Brown</Text>
                <Text style={{ color: 'white' }}>matildabrown@mail.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileInfoContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10
    },
    profileInfo: {
        flexDirection: "column",
        alignSelf: "center",
        alignContent: "center",
        marginStart: 10,
        color: 'white'
    },
    profileAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
});
