import ShippingScreen from "./src/screens/ProfileStack/SubScreens/ShippingScreen";
import PaymentScreen from "./src/screens/ProfileStack/SubScreens/PaymentScreen";
import PromoScreen from "./src/screens/ProfileStack/SubScreens/PromoScreen";
import ReviewScreen from "./src/screens/ProfileStack/SubScreens/ReviewScreen";
import SettingScreen from "./src/screens/ProfileStack/SubScreens/SettingScreen";
import * as React from "react";
import OrderDetailScreen from "./src/screens/ProfileStack/SubScreens/OrderDetailScreen";
import RegisterScreen from "./src/screens/AuthStack/SubScreens/RegisterScreen";
import CheckoutScreen from "./src/screens/CartStack/SubScreens/CheckoutScreen";

export type RootStackParamList = {
  Root: undefined;
  Main: undefined;
  NotFound: undefined;
  NewScreen: undefined;
  SaleScreen: undefined;
  DetailScreen: undefined;
  MyOrderScreen: undefined;
  ShippingScreen: undefined;
  PaymentScreen: undefined;
  PromoScreen: undefined;
  ReviewScreen: undefined;
  SettingScreen: undefined;
  OrderDetailScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  CheckoutScreen: undefined;
  SuccessScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};

export type HomeParamList = { HomeScreen: undefined; };
export type CategoryParamList = { CategoryScreen: undefined; };
export type CartParamList = { CartScreen: undefined; };
export type FavoriteParamList = { FavoriteScreen: undefined; };
export type ProfileParamList = { ProfileScreen: undefined; };

export type Product = {
  id: string,
  name: string,
  brand: string,
  description: string,
  cover_image: string,
  product_images: [
    {
      id: string,
      image_name: string,
      path: string
    }
  ],
  price: string,
  rating: string
}

export type ProductsList = {
  label: string,
  description: string,
}

export type Title = {
  title: string
}

export type CategoryList = {
  id: string,
  name: string,
  image: string
}

export type ProfileCategories = {
  id: string,
  name: string,
  info: string
}

export type Order = {
  id: string,
  order_number: string,
  tracking_number: string,
  quantity: string,
  total_amount: string,
  date: string,
  status: string
}
