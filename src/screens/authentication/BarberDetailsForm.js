import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';

import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import {TouchableOpacity} from 'react-native-gesture-handler';

const {width,height} = Dimensions.get('window');
class BarberDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const {category, subCategory} = this.props.route.params;
    return (
      <View style={Styles1.background}>
        <ImageBackground source={require('../../assets/images/signUpForm/bg2.png')} style={{width:width,height:height}} >
        <View style={{flexDirection: 'column',alignItems:'center',marginTop:100}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{width: 140, height: 148}}></Image>
          <View
            style={{
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={Styles1.headerText}>BOOK - KING</Text>
            <Text style={Styles1.subText}>Where you will find the cut, you are looking for!</Text>

          </View>
        </View>
        {/* <Text style={Styles1.subText}>Any Style, Any Length, Any Time!</Text> */}
        {/* <View style={{alignItems:'center'}}>
        <View style={{borderTopColor:'white',borderWidth:1.5, marginTop:10, width:'90%'}}></View>

        </View> */}

        <View style={{alignItems:'center', marginTop:height/3.5}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
            <View style={{backgroundColor: '#89683d',borderRadius:30,marginBottom:20,paddingLeft:50,paddingRight:50}}>
              <Text style={Styles1.subText1}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Account')}>
            <View style={{backgroundColor: Color.primaryColor,borderColor:'#89683d', borderWidth:1, borderRadius:30,paddingLeft:50,paddingRight:50}}>
              <Text style={Styles1.subText1}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>

        
        </ImageBackground>
      </View>
    );
  }
}

export default BarberDetailsForm;
