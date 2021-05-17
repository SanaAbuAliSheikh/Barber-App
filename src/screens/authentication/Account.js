import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
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

import {register_owner} from '../../actions/auth';
import {connect} from 'react-redux'

const {width, height} = Dimensions.get('window');
const Account = (props) => {
  const [fileUri, setFileUri] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [encryptedPass, setEncryptedPass] = useState(true);
  const [error, setError] = useState('');
  const [selectAvatarType, setSelectAvatarType] = useState('');

  const chooseImage = async () => {
    setSelectAvatarType(false);

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
        setFileUri(image);
      });
    }
  };

  const chooseGallery = async () => {
    setSelectAvatarType(false);
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
        setFileUri(image);
      });
    }
  };

  const validation = () => {
    console.log("VALID");
    if (fileUri == '') {
      setError('Missing Avatar');
      return false;
    }
    if (firstname == '') {
      setError('Missing Parameter Name');
      return false;
    }
    if (lastname == '') {
      setError('Missing Parameter Name');
      return false;
    }
    if (email == '') {
      setError('Missing Parameter Email');
      return false;
    }
    if (password == '') {
      setError('Missing Parameter Password');
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    // if(validation()){
    //   console.log(fileUri.mime, firstname, lastname, email, password);
    //   props.navigation.navigate('Category');
    // }
    console.log("rigisterrrrrrrrrrrr");
    await props.register_owner({firstName:firstname,lastName:lastname,email,password,image:fileUri.data})
    // props.navigation.navigate('Category');
    
  };

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
      <Text style={Styles1.error}>{error}</Text>
      <ScrollView style={{marginTop:5}}>
        <View
          style={{justifyContent: 'center', marginBottom: 10}}>
          <TouchableOpacity onPress={() => setSelectAvatarType(true)}>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                alignItems: 'center',
              }}>
              {fileUri != '' ? (
                <Image
                  // source={{uri: fileUri.uri}}
                  source={{
                    uri: `data:${fileUri.mime};base64,${fileUri.data}`,
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
              placeholder="Enter Firstname"
              placeholderTextColor={Color.whiteColor}
              value={firstname}
              onChangeText={text => setFirstName(text)}
              style={Styles1.TextInputStyle}></TextInput>
          </View>
          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon
              name="user-edit"
              color={Color.golden}
              size={20}
              style={{marginTop: 22}}></Icon>
            <TextInput
              placeholder="Enter Lastname"
              placeholderTextColor={Color.whiteColor}
              value={lastname}
              onChangeText={text => setLastName(text)}
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
              value={email}
              onChangeText={text => setEmail(text)}
              style={Styles1.TextInputStyle}></TextInput>
          </View>

          <View style={{flexDirection: 'row', margin: 20, marginRight: 0}}>
            <Icon4
              name="locked"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon4>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={Color.whiteColor}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={encryptedPass}
              style={Styles1.TextInputStyle}></TextInput>
            <TouchableOpacity onPress={() => setEncryptedPass(!encryptedPass)}>
              <Icon2
                name={encryptedPass ? 'eye-with-line' : 'eye'}
                color={Color.golden}
                size={25}
                style={{marginTop: 18, right: 10}}></Icon2>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={()=> onSubmit()}>
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
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={Styles2.subText1}>Login</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={selectAvatarType} transparent={true}>
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
              <TouchableOpacity onPress={()=>chooseImage()}>
                <View style={{flexDirection: 'row'}}>
                  <Icon3
                    name="camera"
                    color={Color.golden}
                    size={22}
                    style={{marginLeft: 10}}></Icon3>
                  <Text style={[Styles1.subText4]}>Launch Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => chooseGallery()}>
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
              <TouchableOpacity onPress={() => setSelectAvatarType(false)}>
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
};
const mapStateToProps = state => ({
  
})
export default connect(mapStateToProps,{register_owner})(Account);
