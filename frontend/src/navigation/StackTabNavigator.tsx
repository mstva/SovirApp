import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {CartParamList, CategoryParamList, FavoriteParamList, HomeParamList, ProfileParamList} from "../../types";
import CategoryScreen from "../screens/CategoryStack/MainScreen/CategoryScreen";
import CartScreen from "../screens/CartStack/MainScreen/CartScreen";
import FavoriteScreen from "../screens/FavoriteStack/MainScreen/FavoriteScreen";
import ProfileScreen from "../screens/ProfileStack/MainScreen/ProfileScreen";
import HomeScreen from "../screens/HomeStack/MainScreen/HomeScreen";

const HomeStack = createStackNavigator<HomeParamList>();
const CategoryStack = createStackNavigator<CategoryParamList>();
const CartStack = createStackNavigator<CartParamList>();
const FavoriteStack = createStackNavigator<FavoriteParamList>();
const ProfileStack = createStackNavigator<ProfileParamList>();

export function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}/>
        </HomeStack.Navigator>
    );
}

export function CategoryNavigator() {
    return (
        <CategoryStack.Navigator>
            <CategoryStack.Screen
                name="CategoryScreen"
                component={CategoryScreen}
                options={{ headerShown: false }}/>
        </CategoryStack.Navigator>
    );
}

export function CartNavigator() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{ headerShown: false }}/>
        </CartStack.Navigator>
    );
}

export function FavoriteNavigator() {
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen
                name="FavoriteScreen"
                component={FavoriteScreen}
                options={{ headerTitle: 'Favorite Title' }}/>
        </FavoriteStack.Navigator>
    );
}

export function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}/>
        </ProfileStack.Navigator>
    );
}