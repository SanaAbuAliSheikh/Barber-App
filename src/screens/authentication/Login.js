import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  Platform
} from 'react-native';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

import Header from '../components/Header';

import {login_owner,notification_details} from '../../actions/auth';
import {connect} from 'react-redux';

import { getUniqueId, getManufacturer } from 'react-native-device-info';

//Push Notification
import PushNotification from "react-native-push-notification";
import Firebase from '@react-native-firebase/app';

const {width, height} = Dimensions.get('window');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encryptedPass : true,
      email:'',
      password:'',
      error:'',
      val:''
    };
  }


  myToken = (id,os) => {
    this.props.notification_details(id,os)   
    this.setState({
      val:id
    }) 
  }


  componentDidMount = async() => {
    const that = this;
    var myName = null
      // Firebase.initializeApp({apiKey:'AAAArG8J4tA:APA91bG9UZ8s14bRy-hgpIBJg4vSfFHobG-s_9Nm9bOY58f5tBSZOCAcNDagbmws3XXt03CVxeovz4IFRqWWgMRx8J6bJ24LZmawjXNML-QdVM3VqW3qVZC7J5M7MAHZexgL2Ob-4hsM',appId:'1:740597293776:android:863c226be014b4db63f4d5'})
  //   Firebase.initializeApp({apiKey:'AAAArG8J4tA:APA91bG9UZ8s14bRy-hgpIBJg4vSfFHobG-s_9Nm9bOY58f5tBSZOCAcNDagbmws3XXt03CVxeovz4IFRqWWgMRx8J6bJ24LZmawjXNML-QdVM3VqW3qVZC7J5M7MAHZexgL2Ob-4hsM',
  // appId:'1:740597293776:android:b80dca5ec29672be63f4d5'});
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
      const deviceId = token.token;
      const deviceOS = token.os
      if(deviceId){
        that.myToken(deviceId,deviceOS)
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
  }

 







  validation = () => {
    const {email, password} = this.state;
    if(email==''){
      this.setState({
        error:'Missing Parameter Email'
      })
      return false;
    }
    if(password==''){
      this.setState({
        error:'Missing Parameter Password'
      })
      return false;
    }
    return true;
  }

  onSubmit = async() =>{
    if(this.validation()){      
      const {email, password} = this.state;
      await this.props.login_owner({email,password,"deviceId":this.state.val,"deviceType":Platform.OS})
      console.log("___________________________________");
      this.props.navigation.navigate('All Shops');
    }
  }
  render() {
    return (
      <View style={Styles.background}>
          <Header type={2} name="LOGIN" subname="Please enter your personal info to Login on the platform." heading={true} image={true} subheading= {true}/>
          
        <Text style={Styles1.error}>{this.state.error}</Text>

          <View style={{justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="email"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor={this.state.email?Color.whiteColor:Color.lightGrey}
                value={this.state.email}
                onChangeText={(text)=>this.setState({email:text})}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: this.state.email
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}></TextInput>
            </View>

            <View style={{flexDirection: 'row', margin: 20,marginRight:0}}>
              <Icon2
                name="lock"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon2>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={this.state.password?Color.whiteColor:Color.lightGrey}
                // placeholderStyle={{color:'red'}}
                secureTextEntry={(this.state.password.length <= 0 )? false : this.state.encryptedPass}
                value={this.state.password}
                onChangeText={(text)=>this.setState({password:text})}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: this.state.password
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}></TextInput>
                <TouchableOpacity onPress={()=>this.setState({encryptedPass:!this.state.encryptedPass})}>
                <Icon2
                name={this.state.encryptedPass?"eye-with-line":"eye"}
                color={Color.golden}
                size={25}
                style={{marginTop: 18,right:10}}></Icon2>
                </TouchableOpacity>
                
            </View>
            <View style={{alignItems:'flex-end', marginRight:35}}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgot Password')}>
              <Text style={Styles2.subText1}>Forgot Password?</Text>

              </TouchableOpacity>

            </View>
          </View>

          
            <View
              style={Styles.button}>
                <TouchableOpacity onPress={this.onSubmit}>
              <Text style={Styles1.subText1}>Login</Text></TouchableOpacity>
            </View>
          

          <View style={{flexDirection: 'row',justifyContent:'center',marginTop:20}}>
            <Text style={Styles2.subText}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account')}>
              <Text style={Styles2.subText1}>Sign Up</Text>

            </TouchableOpacity>
          </View>
      </View>
    );
  }
}
// const mapStateToProps = state => ({
//   ownerId: state.auth.ownerId
// });
export default connect(null, {login_owner,notification_details})(Login);
