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
  Modal,
  PermissionsAndroid
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';


import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Icon5 from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('window');
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showServices: false,
      setSelection: false,
      setSelection1: false,
      selectAvatarType:false,
      fileUri: '',
      empRec: [0],
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

  addEmpRec = () => {
    let joined = this.state.empRec.concat('1');
    this.setState({empRec: joined});
  };

  remEmpRec = index => {
    let joined = this.state.empRec.splice(index, 1);
    this.setState({empRec: joined});
  };

  render() {
    return (
      <View style={Styles.background}>
          <Header type={2} name="EMPLOYEE'S INFO" subname="Please enter your personal information to Login on the platform." heading={true} image={false} subheading= {true}/>
        
          <ScrollView style={{marginTop: 12}}>
            <View style={{justifyContent: 'center', marginBottom: 10}}>
            <TouchableOpacity onPress={()=>this.setState({selectAvatarType:true})}>
            
            <View style={{flexDirection: 'row',alignItems:'center', marginLeft: 5,marginRight:20,marginTop:20,marginBottom:5}}>
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
                <Text style={Styles1.subText3}>Select Employee Avatar</Text>
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
                <Icon4
                  name="locked"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon4>
                <TextInput
                  placeholder="Enter Password"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon3
                  name="phone-iphone"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon3>
                <TextInput
                  placeholder="Enter Phone"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon2
                  name="address"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon2>
                <TextInput
                  placeholder="Enter Address"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              
              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon2
                  name="scissors"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon2>
                <TouchableOpacity
                  style={{width: '92%'}}
                  onPress={() => this.setState({showServices: true})}>
                  <TextInput
                    placeholder="Select Expertise"
                    placeholderTextColor={Color.whiteColor}
                    editable={false}
                    style={Styles1.TextInputStyle}></TextInput>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <Footer redirect="Images" />

          

          <Modal visible={this.state.showServices} transparent={true}>
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
                <Text style={Styles.headerText1}>Select Services</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 15, marginLeft:15, marginRight:15,
                    alignItems: 'center',
                  }}>
                  <Checkbox
                    status={this.state.setSelection ? 'checked' : 'unchecked'}
                    onPress={() =>
                      this.setState({setSelection: !this.state.setSelection})
                    }
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={Styles1.subText5}>Hair Cutting</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    margin: 15,
                    alignItems: 'center',
                  }}>
                  <Checkbox
                    status={this.state.setSelection1 ? 'checked' : 'unchecked'}
                    onPress={() =>
                      this.setState({setSelection1: !this.state.setSelection1})
                    }
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={Styles1.subText5}>Beard</Text>
                </View>

                
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({showServices: false})}>
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
                  <TouchableOpacity onPress={()=>this.chooseImage()}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon5
                        name="camera"
                        color={Color.golden}
                        size={22}
                        style={{marginLeft: 10}}></Icon5>
                      <Text style={[Styles1.subText4]}>Launch Camera</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.chooseGallery()}>
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
        
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default Employee;
