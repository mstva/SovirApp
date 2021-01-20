import * as React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Colors from "../../../constants/Colors";
import ProfileList from "../Components/ProfileList";
import ProfileInfo from "../Components/ProfileInfo";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileTextContainer}>
                <Text style={styles.profileText}>My Profile</Text>
            </View>
            <ProfileInfo/>
            <ProfileList/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    profileTextContainer: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    profileText: {
        fontWeight: "bold",
        fontSize: 30,
        color: 'white'
    },
});
