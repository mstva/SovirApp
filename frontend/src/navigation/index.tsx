import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NewScreen from "../screens/HomeStack/SubScreens/NewScreen";
import SaleScreen from "../screens/HomeStack/SubScreens/SaleScreen";
import DetailScreen from "../screens/HomeStack/SubScreens/DetailScreen";
import MyOrderScreen from "../screens/ProfileStack/SubScreens/MyOrderScreen";
import ShippingScreen from "../screens/ProfileStack/SubScreens/ShippingScreen";
import PaymentScreen from "../screens/ProfileStack/SubScreens/PaymentScreen";
import PromoScreen from "../screens/ProfileStack/SubScreens/PromoScreen";
import ReviewScreen from "../screens/ProfileStack/SubScreens/ReviewScreen";
import SettingScreen from "../screens/ProfileStack/SubScreens/SettingScreen";
import OrderDetailScreen from "../screens/ProfileStack/SubScreens/OrderDetailScreen";
import RegisterScreen from "../screens/AuthStack/SubScreens/RegisterScreen";
import LoginScreen from "../screens/AuthStack/SubScreens/LoginScreen";
import ForgotPasswordScreen from "../screens/AuthStack/SubScreens/ForgotPasswordScreen";
import WelcomeScreen from "../screens/AuthStack/MainScreen/WelcomeScreen";
import CartScreen from "../screens/CartStack/MainScreen/CartScreen";
import CheckoutScreen from "../screens/CartStack/SubScreens/CheckoutScreen";
import SuccessScreen from "../screens/CartStack/SubScreens/SuccessScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={WelcomeScreen}/>
            <Stack.Screen name="Main" component={BottomTabNavigator}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Screen name="NewScreen" component={NewScreen}/>
            <Stack.Screen name="SaleScreen" component={SaleScreen}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}/>
            <Stack.Screen name="MyOrderScreen" component={MyOrderScreen}/>
            <Stack.Screen name="ShippingScreen" component={ShippingScreen}/>
            <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
            <Stack.Screen name="PromoScreen" component={PromoScreen}/>
            <Stack.Screen name="ReviewScreen" component={ReviewScreen}/>
            <Stack.Screen name="SettingScreen" component={SettingScreen}/>
            <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
            <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
            <Stack.Screen name="SuccessScreen" component={SuccessScreen}/>
        </Stack.Navigator>
    );
}
