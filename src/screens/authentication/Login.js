import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';


import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.background}>
        <ImageBackground
          source={require('../../assets/images/login/login.png')}
          style={{ width: width, height: height}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Image
            source={require('../../assets/images/logo.png')}
            style={{width: 80, height: 98}}></Image>
              <Text style={Styles1.headerText}>LOGIN</Text>
              <Text style={Styles2.subText}>Please enter your personal information to Login on the platform.</Text>
            </View>
          </View>

          <View style={{justifyContent: 'center', marginTop: 30}}>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="email"
                color="#89683d"
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor={Color.whiteColor}
                style={Styles1.TextInputStyle}></TextInput>
            </View>

            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon2
                name="lock"
                color="#89683d"
                size={25}
                style={{marginTop: 22}}></Icon2>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={Color.whiteColor}
                style={Styles1.TextInputStyle}></TextInput>
            </View>
            <View style={{alignItems:'flex-end', marginRight:35}}>
              <Text style={Styles2.subText1}>Forget Password?</Text>

            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: Color.golden,
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 30,
                marginLeft: 90,
                marginRight: 90,
                marginTop: 90,
              }}>
              <Text style={Styles1.subText1}>Login</Text>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row',justifyContent:'center',marginTop:20}}>
            <Text style={Styles2.subText}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account')}>
              <Text style={Styles2.subText1}>Sign Up</Text>

            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
