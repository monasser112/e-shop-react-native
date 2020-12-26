import React from 'react'

import {Text,View,Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

 import indexScreen from '../../screens/indexScreen'
 import Shop from '../../screens/Shop'
 import Product from '../../screens/Product'
 import Profile from '.../../screens/Profile'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import Icon from 'react-native-vector-icons/Ionicons';




const TabNavigator = createMaterialBottomTabNavigator(
    {
      Home: {
        screen: indexScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#a3c2fa',
          barStyle: { backgroundColor: '#2163f6' },
        }
      },
      Product: {
        screen: Product,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#92c5c2',
          barStyle: { backgroundColor: '#2c6d6a' },
        }
      },
      Shop: {
        screen: Shop,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
            </View>
          ),
          activeColor: '#ffffff',
          inactiveColor: '#ebaabd',
          barStyle: { backgroundColor: '#d13560' },
        }
      },
    },
    {
      //initialRouteName: 'Home',
      activeColor: '#ffffff',
      inactiveColor: '#bda1f7',
      barStyle: { backgroundColor: '#6948f4' },
    }
  );
  const output=createAppContainer(TabNavigator);


  export default output;