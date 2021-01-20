import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import {Title} from "../../../../types";
import {useNavigation} from "@react-navigation/native";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

export type SocialProps = { social: Title }

export default function AuthSocial(props: SocialProps) {
    const {social} = props
    const navigation = useNavigation()
    return (
        <View style={styles.imageContainer}>
            <Image
                // @ts-ignore
                source={social.title}
                style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    image: { 
        width: 50,
        height: 50
    }
});
