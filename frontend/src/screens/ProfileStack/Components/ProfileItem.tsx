import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import Colors from "../../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {ProfileCategories} from "../../../../types";

export type ProfileCategoryProps = { profileCategory: ProfileCategories }

export default function ProfileItem(props: ProfileCategoryProps) {
    const { profileCategory } = props
    const navigation = useNavigation()

    function screen(name: string): string {
        switch (name) {
            case 'My orders':
                return 'MyOrderScreen'
            case 'Shipping addresses':
                return 'ShippingScreen'
            case 'Payment methods':
                return 'PaymentScreen'
            case 'Promo codes':
                return 'PromoScreen'
            case 'My reviews':
                return 'ReviewScreen'
            case 'Settings':
                return 'SettingScreen'
            default:
                return ''
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(screen(profileCategory.name), {name: profileCategory.name})}>
            <View style={styles.list}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 2 }}>{profileCategory.name}</Text>
                        <Text style={{ color: 'white', fontSize: 12, marginBottom: 10 }}>{profileCategory.info}</Text>
                    </View>
                    <Ionicons name="ios-arrow-forward" size={24} color="white" />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 10}}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    list: {
        marginVertical: 5,
        marginHorizontal: 20
    }
});
