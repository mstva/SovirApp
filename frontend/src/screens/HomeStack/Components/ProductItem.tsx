import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {Product} from "../../../../types";
import {AntDesign, FontAwesome, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {generatePublicUrl} from "../../../config/urlConfig";

export type ProductItemProps = { product: Product }

export default function ProductItem(props: ProductItemProps) {
    const { product } = props
    const navigation = useNavigation()
    const onPress = () => {navigation.navigate('DetailScreen', {
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        cover_image: product.cover_image,
        product_images: product.product_images,
        price: product.price,
        rating: product.rating
    })}
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: generatePublicUrl(product.cover_image) }} style={styles.productImage}/>
                    </View>
                    <View style={{ flexDirection: "row", marginStart: 10 }}>
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <Text style={{ fontSize: 10, color: 'white' }}>({product.rating})</Text>
                    </View>
                    <Text style={styles.productBrand}>{product.brand}</Text>
                    <Text style={styles.productName}>{product.name}</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.footer}>
                <Text style={styles.productPrice}>${product.price}</Text>
                <View style={styles.iconContainer}>
                    <FontAwesome name="heart-o" size={22} color="white"  style={styles.icon}/>
                    <MaterialIcons name="add-shopping-cart" size={24} color="white" style={styles.icon} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        margin: 2,
    },
    productImage: {
        width: 150,
        height: 200,
        resizeMode: "contain",
        borderRadius: 20,
    },
    productBrand: {
        marginStart: 10,
        fontSize: 10,
        color: '#ffffff'
    },
    productName: {
        marginStart: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: '#ffffff'
    },
    productPrice: {
        fontWeight: "bold",
        color: '#ffffff'
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10
    },
    iconContainer: {
        flexDirection: "row",
    },
    icon: {
        marginEnd: 5
    },
});
