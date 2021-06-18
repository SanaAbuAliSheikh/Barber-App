import React,{useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
import Category from '../screens/authentication/Category';
import Employee from '../screens/authentication/Employee';
import Images from '../screens/authentication/Images';
import Services from '../screens/authentication/Services';
import Payment from '../screens/authentication/Payment';
import ForgotPass from '../screens/authentication/ForgotPass';
import Notification from '../screens/notification/notifiy';

import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import EmployeeDetails from '../screens/authentication/EmployeeDetails';
import DaysAndTime from '../screens/authentication/DaysAndTime';
import TotalShops from '../screens/home/TotalShops';


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

function Routes(props) {
  const getAsycToken = async() => {
    var token = await AsyncStorage.getItem('token')
    
    if(token){
      
      console.log(":");
    } else{
      console.log(":::::::");
    }
  }
  useEffect(async()=>{
    await getAsycToken();
    
  },[])

  const {isToken} = props;

  const isAuthenticated=useSelector(state=>state.auth.user);
  console.log(isAuthenticated, props);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        mode="modal"
        initialRouteName={isToken||isAuthenticated?"All Shop":"SignUp Form"}>
      
        {
          isToken || isAuthenticated ? (
            <>
              <Stack.Screen name="All Shops" component={TotalShops}></Stack.Screen>
              <Stack.Screen name="Tab Menu" component={MyTabs}></Stack.Screen>
              <Stack.Screen name="Notification" component={Notification}></Stack.Screen> 
            </>
          ) : (
            <>
              <Stack.Screen
                name="SignUp Form"
                component={BarberDetailsForm}></Stack.Screen>
              <Stack.Screen name="Login" component={Login}></Stack.Screen>
              <Stack.Screen name="Forgot Password" component={ForgotPass}></Stack.Screen>

              <Stack.Screen name="Account" component={Account}></Stack.Screen>
              <Stack.Screen name="Category" component={Category}></Stack.Screen>
              <Stack.Screen name="Shop Info" component={ShopInfo}></Stack.Screen>
              <Stack.Screen name="Shop Day&Time" component={DaysAndTime}></Stack.Screen>

              <Stack.Screen name="Services" component={Services}></Stack.Screen>

              <Stack.Screen name="Employee Info" component={Employee}></Stack.Screen>
              <Stack.Screen name="Employee Details" component={EmployeeDetails}></Stack.Screen>

              <Stack.Screen name="Images" component={Images}></Stack.Screen>
              <Stack.Screen name="Payment" component={Payment}></Stack.Screen>

              <Stack.Screen
                name="Package Plan"
                component={PackagePlan}></Stack.Screen>

            </>
            
          )
        }
             

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
