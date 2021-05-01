import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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

import Header from '../components/Header';


const {width, height} = Dimensions.get('window');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={Styles.background}>
          <Header type={2} name="EMAIL FOR RECOVERY" subname="Enter your email to recover your password. You will receive an email with instructions." heading={true} image={false} subheading= {true}/>
          

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


          </View>

        <View >
          <TouchableOpacity >
            <View
              style={{
                backgroundColor: Color.primaryColor,
                borderColor: Color.golden,
                borderWidth: 1,
                borderRadius: 30,
                marginLeft: 90,
                marginRight: 90,
                marginTop: 90,
              }}>
              <Text style={Styles1.subText1}>Continue</Text>
            </View>
          </TouchableOpacity>
</View>
          
      </View>
    );
  }
}

export default Login;
