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

import {login_owner} from '../../actions/auth';
import {connect} from 'react-redux';


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

  // const [email, setEmail] = 

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
      const {email, password} = this.state;
      await this.props.login_owner({email,password})
      console.log("___________________________________");
      this.props.navigation.navigate('All Shops');
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
                placeholderStyle={{color:'red'}}
                secureTextEntry={this.state.encryptedPass}
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
// const mapStateToProps = state => ({
//   ownerId: state.auth.ownerId
// });
export default connect(null, {login_owner})(Login);
