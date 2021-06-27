/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import Routes from './src/routes/Route';
import {Provider} from 'react-redux';
import store from './src/store';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import Colors from './src/utils/Colors.json';
import setAuthToken from './src/utils/setAuthToken';

//Push Notification
import PushNotification from "react-native-push-notification";
import Firebase from '@react-native-firebase/app';
import { notification_details } from './src/actions/auth';


const App: () => Node = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAsycToken = async() => {
    var token = await AsyncStorage.getItem('token')
    // var ownertoken = await AsyncStorage.getItem('owner-token')

    // if(ownertoken){
    //   setAuthToken(ownertoken);
    // }
    if(token){
      setAuthToken(token);
      setLoggedIn(true)
      
    } else{
      setLoggedIn(false)
    }
  }

  const myToken = (id,os) => {
    console.log(id,os)
  }
  useEffect(async()=>{
    // Firebase.initializeApp({apiKey:'AAAArG8J4tA:APA91bG9UZ8s14bRy-hgpIBJg4vSfFHobG-s_9Nm9bOY58f5tBSZOCAcNDagbmws3XXt03CVxeovz4IFRqWWgMRx8J6bJ24LZmawjXNML-QdVM3VqW3qVZC7J5M7MAHZexgL2Ob-4hsM',appId:'1:740597293776:android:863c226be014b4db63f4d5'})
  //   Firebase.initializeApp({apiKey:'AAAArG8J4tA:APA91bG9UZ8s14bRy-hgpIBJg4vSfFHobG-s_9Nm9bOY58f5tBSZOCAcNDagbmws3XXt03CVxeovz4IFRqWWgMRx8J6bJ24LZmawjXNML-QdVM3VqW3qVZC7J5M7MAHZexgL2Ob-4hsM',
  // appId:'1:740597293776:android:b80dca5ec29672be63f4d5'});
    var myName = PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        // console.log("TOKEN:", token);
        const deviceId = token.token;
        const deviceOS = token.os
        if(deviceId){
          myToken(deviceId,deviceOS)
        }

      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
        notification.foreground;
        notification.userInteraction=true;
        notification.message="New Notification";
        notification.alert=notification.message;
        PushNotification.localNotification(notification)
               
        // foreground: false, // BOOLEAN: If the notification was received in foreground or not
        // userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
        // message: 'My Notification Message',
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });



    await getAsycToken();
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    loading?
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor: Colors.primaryColor}}>
      <ActivityIndicator size="small" color={Colors.lightGolden}/>
    </View>
    :
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: Colors.primaryColor}}>
        <Routes isToken={loggedIn}/>
      </View>
    </Provider>
  );
};

export default App;
