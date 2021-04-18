import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignUp from '../../src/screens/authentication/SignUp';
import BarberDetailsForm from '../screens/authentication/BarberDetailsForm';
import Login from '../screens/authentication/Login';
import Account from '../screens/authentication/Account';
import ShopInfo from '../screens/authentication/ShopInfo';
import PackagePlan from '../screens/authentication/packagePlan';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';

import HomeIcon from 'react-native-vector-icons/Entypo';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import PostIcon from 'react-native-vector-icons/FontAwesome';
import JobIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Color from '../utils/Colors.json';
import Post from '../screens/job/Post';
import OrderBooking from '../screens/order/OrderBooking';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      style={{borderTopColor:Color.mediumBrown,borderWidth:2}}
      tabBarOptions={{
        activeTintColor: Color.darkGolden,
        inactiveTintColor: Color.lightGolden,
        activeBackgroundColor: Color.darkgray,
        inactiveBackgroundColor: Color.darkgray,
        style:{borderTopWidth:0}
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <HomeIcon name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Order Booking"
        component={OrderBooking}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <PostIcon name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Job Post"
        component={Post}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <JobIcon name="post" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <ProfileIcon name="settings-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen> */}
        <Stack.Screen
          name="SignUp Form"
          component={BarberDetailsForm}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Account" component={Account}></Stack.Screen>
        <Stack.Screen name="Shop Info" component={ShopInfo}></Stack.Screen>
        <Stack.Screen
          name="Package Plan"
          component={PackagePlan}></Stack.Screen>
        <Stack.Screen name="Tab Menu" component={MyTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
