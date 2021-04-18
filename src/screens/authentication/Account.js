import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';


import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      selectAvatarType: false
    };
  }

  chooseImage = async () => {
    this.setState({
      selectAvatarType:false,
    })
    
    let granted = ''; 
    let granted1 = '';
    //permission
    try {
       granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,

        {
          title: 'Barber App Camera & Storage Permission',
          message:
            'Barber App needs access to your camera ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      granted1 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,

        {
          title: 'Barber App Storage Permission',
          message:
            'Barber App needs access to your storage ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
    }

    if (granted && granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        // cropping: true,
        // multiple:true,
        includeBase64: true
      }).then(image => {
        console.log(image);
        this.setState({
          fileUri: image,
        });
      });
    }
  };

  chooseGallery = async () => {
    this.setState({
      selectAvatarType:false,
    })
    let granted = ''; 
    let granted1 = '';
    //permission
    try {
       granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,

        {
          title: 'Barber App Camera & Storage Permission',
          message:
            'Barber App needs access to your camera ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      granted1 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,

        {
          title: 'Barber App Storage Permission',
          message:
            'Barber App needs access to your storage ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
    }

    if (granted && granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        // cropping: true,
        // multiple:true,
        includeBase64: true
      }).then(image => {
        console.log(image);
        this.setState({
          fileUri: image,
        });
      });
    }
  };

  render() {
    return (
      <View style={Styles.background}>
        <ImageBackground
          source={require('../../assets/images/login/login.png')}
          style={{width: width, height: height}}>
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
              <Text style={Styles1.headerText}>Owner's Info</Text>
              <Text style={Styles2.subText}>
                Please enter your personal information to Sign Up on the
                platform.
              </Text>
            </View>
          </View>

          <View
            style={{justifyContent: 'center', marginBottom: 10, marginTop: 12}}>
            <TouchableOpacity onPress={()=>this.setState({selectAvatarType:true})}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 5,
                  alignItems: 'center',
                }}>
                {this.state.fileUri != '' ? (
                  <Image
                    // source={{uri: this.state.fileUri.uri}}
                    source = {{uri: `data:${this.state.fileUri.mime};base64,${this.state.fileUri.data}`}}
                    style={{width: 50, height: 50, borderRadius: 25}}></Image>
                ) : (
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      backgroundColor: 'transparent',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon2 name="edit" color={Color.golden} size={20}></Icon2>
                  </View>
                )}
                <Text style={Styles1.subText3}>Select Your Avatar</Text>
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon
                name="user-edit"
                color={Color.golden}
                size={20}
                style={{marginTop: 22}}></Icon>
              <TextInput
                placeholder="Enter Name"
                placeholderTextColor={Color.whiteColor}
                style={Styles1.TextInputStyle}></TextInput>
            </View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="email"
                color={Color.golden}
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
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon2>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={Color.whiteColor}
                style={Styles1.TextInputStyle}></TextInput>
            </View>
          </View>

          {/* <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 116, marginTop: 15}}>
              <View
                style={{
                  backgroundColor: Color.darkgray,
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon1 name="arrow-back" color={Color.golden} size={25}></Icon1>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: Color.primaryColor,
                  borderColor: 'black',
                  borderWidth: 3,
                  borderRadius: 35,
                  width: 70,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon2 name="plus" color={Color.golden} size={30}></Icon2>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 116, marginTop: 15}}>
              <View
                style={{
                  backgroundColor: Color.darkgray,
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon1
                  name="arrow-forward"
                  color={Color.golden}
                  size={25}></Icon1>
              </View>
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Shop Info')}>
            <View
              style={{
                backgroundColor: '#89683d',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 30,
                marginLeft: 90,
                marginRight: 90,
                marginTop: 20,
              }}>
              <Text style={Styles1.subText1}>Next</Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 30,
            }}>
            <Text style={Styles2.subText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={Styles2.subText1}>Login</Text>
            </TouchableOpacity>
          </View>
          <Modal visible={this.state.selectAvatarType} transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                  backgroundColor: Color.darkgray,
                  borderColor: Color.golden,
                  borderWidth: 2,
                  borderRadius: 15,
                  padding: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                  width: '80%',
                }}>
                <Text style={Styles.headerText1}>Select Avatar Type</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 15,
                  }}>
                  <TouchableOpacity onPress={()=>this.chooseImage()}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="paypal"
                        color="#001f6b"
                        size={22}
                        style={{marginLeft: 10}}></Icon>
                      <Text style={Styles1.subText4}>Launch Camera</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chooseGallery()}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon1
                        name="stripe"
                        color="#6772e5"
                        size={22}
                        style={{marginLeft: 10}}></Icon1>
                      <Text style={Styles1.subText4}>Gallery</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({paymentMethod: false})}>
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: Color.golden,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon2
                        name="arrow-left"
                        color={Color.whiteColor}
                        size={24}></Icon2>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        
        </ImageBackground>
      </View>
    );
  }
}

export default Account;
