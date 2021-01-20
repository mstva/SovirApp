import * as React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import {ProductsList} from "../../../../types";
import products from "../../../data/products";
import ProductItem from "./ProductItem";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import axios from "axios";
import {api} from "../../../config/urlConfig";
import {allProducts} from "../../../config/axios";

export type ProductListProps = { productsList: ProductsList }

export default class ProductList extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {
            isLoaded: false,
            allProducts: []
        }
    }

    componentDidMount() {
        axios.get(`${api}/products`)
            .then(response => {
                this.setState({allProducts: response.data.products})
            })
            .catch(error => console.log(error))

        // @ts-ignore
        if (this.state.allProducts.length != 0) {
            this.setState({ isLoaded: true })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    // @ts-ignore
                    this.state.allProducts.length === 0
                        ?
                        <Text>loading</Text>
                        :
                        <FlatList
                            // @ts-ignore
                            data={this.state.allProducts}
                            renderItem={({item}) => (<ProductItem product={item}/>)}
                            // @ts-ignore
                            keyExtractor={item => item._id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 20
    },
});
