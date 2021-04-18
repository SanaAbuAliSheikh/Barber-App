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
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

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
    };
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    //permission
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          [
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          ],
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
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    launchCamera('options', response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));

        console.log('response', JSON.stringify(response));
        this.setState({
          fileUri: response,
        });
      }
    });
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
            <TouchableOpacity onPress={this.chooseImage}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 5,
                  alignItems: 'center',
                }}>
                {this.state.fileUri != '' ? (
                  <Image
                    source={{uri: this.state.fileUri.uri}}
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
        </ImageBackground>
      </View>
    );
  }
}

export default Account;
