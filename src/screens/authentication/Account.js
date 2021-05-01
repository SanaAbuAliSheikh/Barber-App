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
import ImagePicker from 'react-native-image-crop-picker';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/Fontisto';

import Header from '../components/Header';

const {width, height} = Dimensions.get('window');
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      name: '',
      email: '',
      password: '',
      encryptedPass : false,
      error: '',
      selectAvatarType: false,
    };
  }

  chooseImage = async () => {
    this.setState({
      selectAvatarType: false,
    });

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
        includeBase64: true,
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
      selectAvatarType: false,
    });
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
        includeBase64: true,
      }).then(image => {
        console.log(image);
        this.setState({
          fileUri: image,
        });
      });
    }
  };

  validation = () => {
    const {fileUri ,name, email, password} = this.state;
    if(fileUri==''){
      this.setState({
        error:'Missing Avatar'
      })
      return false;
    }
    if(name==''){
      this.setState({
        error:'Missing Parameter Name'
      })
      return false;
    }
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

  onSubmit = async() => {
    // if(this.validation()){
    //   this.props.navigation.navigate('Category');
    // }
    this.props.navigation.navigate('Category');
  }

  render() {
    return (
      <View style={Styles.background}>
        <Header
          type={2}
          name="SIGN UP"
          subname="Please enter your personal information to Login on the platform."
          heading={true}
          image={true}
          subheading={true}
        />
        {/* <Text style={Styles1.error}>{this.state.error}</Text> */}
        <ScrollView>
          <View
            style={{justifyContent: 'center', marginBottom: 10, marginTop: 12}}>
            <TouchableOpacity
              onPress={() => this.setState({selectAvatarType: true})}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 5,
                  alignItems: 'center',
                }}>
                {this.state.fileUri != '' ? (
                  <Image
                    // source={{uri: this.state.fileUri.uri}}
                    source={{
                      uri: `data:${this.state.fileUri.mime};base64,${this.state.fileUri.data}`,
                    }}
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
                value={this.state.name}
                onChangeText={(text)=>this.setState({name:text})}
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
                value={this.state.email}
                onChangeText={(text)=>this.setState({email:text})}
                style={Styles1.TextInputStyle}></TextInput>
            </View>

            <View style={{flexDirection: 'row', margin: 20, marginRight:0}}>
              <Icon4
                name="locked"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon4>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={Color.whiteColor}
                value={this.state.password}
                onChangeText={(text)=>this.setState({password:text})}
                secureTextEntry={this.state.encryptedPass}
                style={Styles1.TextInputStyle}></TextInput>
              <TouchableOpacity onPress={()=>this.setState({encryptedPass:!this.state.encryptedPass})}>
                <Icon2
                name={this.state.encryptedPass?"eye-with-line":"eye"}
                color={Color.golden}
                size={25}
                style={{marginTop: 18,right:10}}></Icon2>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={this.onSubmit}>
          <View
            style={{
              backgroundColor: Color.primaryColor,
              borderColor: Color.golden,
              borderWidth: 1,
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
            marginBottom: 20,
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
                backgroundColor: Color.primaryColor,
                borderColor: Color.golden,
                borderWidth: 1,
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
                  marginTop: 15,
                }}>
                <TouchableOpacity onPress={() => this.chooseImage()}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon3
                      name="camera"
                      color={Color.golden}
                      size={22}
                      style={{marginLeft: 10}}></Icon3>
                    <Text style={[Styles1.subText4]}>Launch Camera</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.chooseGallery()}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon2
                      name="images"
                      color={Color.golden}
                      size={22}
                      style={{marginLeft: 10}}></Icon2>
                    <Text style={[Styles1.subText4]}>Gallery</Text>
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
                  onPress={() => this.setState({selectAvatarType: false})}>
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

      </View>
    );
  }
}

export default Account;
