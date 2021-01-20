import {AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../../types';
import {
    CartNavigator,
    CategoryNavigator,
    FavoriteNavigator,
    HomeNavigator,
    ProfileNavigator
} from "./StackTabNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, }}>
      <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={{tabBarIcon: () => (<Feather name="home" size={24} color="black" />)}}/>
      <BottomTab.Screen
          name="Category"
          component={CategoryNavigator}
          options={{tabBarIcon: () => (<AntDesign name="appstore-o" size={24} color="black" />)}}/>
      <BottomTab.Screen
          name="Cart"
          component={CartNavigator}
          options={{
              tabBarIcon: () => (<MaterialCommunityIcons name="cart-outline" size={24} color="black" />)}}/>
      <BottomTab.Screen
          name="Favorite"
          component={FavoriteNavigator}
          options={{tabBarIcon: () => (<AntDesign name="hearto" size={24} color="black" />)}}/>
      <BottomTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{tabBarIcon: () => (<FontAwesome5 name="user" size={24} color="black" />)}}/>
    </BottomTab.Navigator>
  );
}