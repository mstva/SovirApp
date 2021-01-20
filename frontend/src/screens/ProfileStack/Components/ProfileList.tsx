import * as React from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import {profile_categories} from "../../../data/categories";
import ProfileItem from "./ProfileItem";

export default function ProfileList() {
    return (
        <ScrollView style={styles.profileList}>
            <FlatList
                data={profile_categories}
                renderItem={({item}) => (<ProfileItem profileCategory={item}/>)}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileList: {},
});
