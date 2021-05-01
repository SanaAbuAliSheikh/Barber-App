import React, {Component} from 'react';
import {View, Text, Animated, Dimensions, Image} from 'react-native';

import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }
  onLoad = () => {
    Animated.spring(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      friction:1
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[{
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate(
                {
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }
              ),
            },
          ]},
          this.props.style
        ]}
      />
      
    );
  }
}
class BarberDetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const {category, subCategory} = this.props.route.params;
    return (
      <View style={[Styles1.background,{backgroundColor:Color.primaryColor}]}>
        {/* <ImageBackground source={require('../../assets/images/signUpForm/main.jpg')} style={{width:width,height:height}} > */}
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <ImageLoader
            source={require('../../assets/images/logo.png')}
            style={{width: 120, height: 128}}></ImageLoader>
          <View
            style={{
              width: '85%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[Styles1.headerText,{fontSize:30}]}>BOOK - KING</Text>
            <Text style={[Styles1.subText]}>
              Where you will find the cut, you are looking for!
            </Text>
          </View>
        </View>
        {/* <Text style={Styles1.subText}>Any Style, Any Length, Any Time!</Text> */}
        {/* <View style={{alignItems:'center'}}>
        <View style={{borderTopColor:'white',borderWidth:1.5, marginTop:10, width:'90%'}}></View>

        </View> */}

        <View style={{alignItems: 'center', marginTop: height / 3}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <View
              style={{
                backgroundColor: Color.primaryColor,
                borderRadius: 30,
                marginBottom: 20,
                paddingLeft: 50,
                paddingRight: 50,
                borderColor: '#89683d',
                borderWidth: 1,
              }}>
              <Text style={Styles1.subText1}>Sign In</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Account')}>
            <View
              style={{
                backgroundColor: Color.primaryColor,
                borderColor: '#89683d',
                borderWidth: 1,
                borderRadius: 30,
                paddingLeft: 50,
                paddingRight: 50,
              }}>
              <Text style={Styles1.subText1}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default BarberDetailsForm;
