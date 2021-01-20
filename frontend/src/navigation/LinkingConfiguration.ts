import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {screens: {HomeScreen: 'home',},},
          Category: {screens: {CategoryScreen: 'category',},},
          Cart: {screens: {CartScreen: 'cart',},},
          Favorite: {screens: {FavoriteScreen: 'favorite',},},
          Profile: {screens: {ProfileScreen: 'profile',},},
        },
      },
      NotFound: '*',
    },
  },
};
