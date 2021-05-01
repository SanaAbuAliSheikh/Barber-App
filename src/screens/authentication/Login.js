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

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

import Header from '../components/Header';


const {width, height} = Dimensions.get('window');
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encryptedPass : true,
      email:'',
      password:'',
      error:''
    };
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
    // if(this.validation()){
      this.props.navigation.navigate('Tab Menu');
    // }
  }
  render() {
    return (
      <View style={Styles.background}>
          <Header type={2} name="LOGIN" subname="Please enter your personal info to Login on the platform." heading={true} image={true} subheading= {true}/>
          
        {/* <Text style={Styles1.error}>{this.state.error}</Text> */}

          <View style={{justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="email"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor={Color.whiteColor}
                value={this.state.email}
                onChangeText={(text)=>this.setState({email:text})}
                style={Styles1.TextInputStyle}></TextInput>
            </View>

            <View style={{flexDirection: 'row', margin: 20,marginRight:0}}>
              <Icon2
                name="lock"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon2>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={Color.whiteColor}
                placeholderStyle={{fontFamily:'LibreBaskerville-Regular',color:'red'}}
                secureTextEntry={this.state.encryptedPass}
                value={this.state.password}
                onChangeText={(text)=>this.setState({password:text})}
                style={Styles1.TextInputStyle}></TextInput>
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

          <TouchableOpacity onPress={this.onSubmit}>
            <View
              style={Styles.button}>
              <Text style={Styles1.subText1}>Login</Text>
            </View>
          </TouchableOpacity>

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

export default Login;
