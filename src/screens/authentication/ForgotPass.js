import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

import Header from '../components/Header';

import {forgot_pass} from '../../actions/auth';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
const ForgotPass = props => {
  const [email, setEmail] = useState('');

  return (
    <View style={Styles.background}>
      <Header
        type={2}
        name="EMAIL FOR RECOVERY"
        subname="Enter your email to recover your password. You will receive an email with instructions."
        heading={true}
        image={false}
        subheading={true}
      />

      <View style={{justifyContent: 'center', marginTop: 30}}>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Icon1
            name="email"
            color="#89683d"
            size={25}
            style={{marginTop: 22}}></Icon1>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor={email ? Color.whiteColor : Color.lightGrey}
            style={[
              Styles1.TextInputStyle,
              {
                borderBottomColor: email ? Color.whiteColor : Color.lightGrey,
              },
            ]}></TextInput>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={()=>props.forgot_pass({email})}>
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
};
const mapStateToProps = state => ({
  otp: state.auth.otp
});
export default connect(mapStateToProps,{forgot_pass})(ForgotPass);
