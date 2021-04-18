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
  FlatList,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

import RadioForm from 'react-native-simple-radio-button';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
class ShopInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: '  Barber                                    ',
          value: 0,
        },
        {
          label: '  Beauty',
          value: 1,
        },
      ],
      data1: [
        {
          label: '  Mobile                                   ',
          value: 0,
        },
        {
          label: '  Shop',
          value: 1,
        },
      ],
      fileUri: '',
      empRec:[0]
    };
  }

  chooseImage = () => {
    console.log('image picker');
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


  addEmpRec = () =>{
    let joined = this.state.empRec.concat('1');
    this.setState({ empRec: joined })
  }

  remEmpRec = (index) =>{
    let joined = this.state.empRec.splice(index, 1)
    this.setState({ empRec: joined })
  }
  
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
              <Text style={Styles1.headerText}>Shop's Info</Text>
              <Text style={Styles2.subText}>
                Please enter your personal information to Sign Up on the
                platform.
              </Text>
            </View>
          </View>

          <ScrollView style={{marginTop: 12}}>
            <View style={{justifyContent: 'center', marginBottom: 10}}>
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
                  <Text style={Styles1.subText3}>Select Avatar for Shop</Text>
                </View>
              </TouchableOpacity>
              <View style={{width: '50%', marginLeft: 10}}>
                <RadioForm
                  radio_props={this.state.data}
                  initial={-1}
                  onPress={value => {
                    this.setState({value: this.state.data.value});
                  }}
                  buttonSize={8}
                  formHorizontal={true}
                  labelStyle={{fontSize: 20, marginLeft: 16}}
                  labelHorizontal={true}
                  buttonColor={Color.golden}
                  selectedButtonColor={Color.golden}
                  buttonInnerColor={Color.golden}
                  labelColor={Color.whiteColor}
                  selectedLabelColor={Color.whiteColor}
                  style={{marginRight: 30, marginLeft: 12, marginTop: 30}}
                />
              </View>

              <View style={{width: '50%', marginLeft: 10}}>
                <RadioForm
                  radio_props={this.state.data1}
                  initial={-1}
                  onPress={value => {
                    this.setState({value: this.state.data1.value});
                  }}
                  buttonSize={8}
                  formHorizontal={true}
                  labelStyle={{fontSize: 20, marginLeft: 16}}
                  labelHorizontal={true}
                  buttonColor={Color.golden}
                  selectedButtonColor={Color.golden}
                  buttonInnerColor={Color.golden}
                  labelColor={Color.whiteColor}
                  selectedLabelColor={Color.whiteColor}
                  style={{marginRight: 30, marginLeft: 10, marginTop: 30}}
                />
              </View>

              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon
                  name="user-edit"
                  color={Color.golden}
                  size={20}
                  style={{marginTop: 22}}></Icon>
                <TextInput
                  placeholder="Enter Shop Name"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon1
                  name="form-textbox-password"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon1>
                <TextInput
                  placeholder="Enter Zip Code"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>

              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon2
                  name="flag"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon2>
                <TextInput
                  placeholder="Enter Country"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <View style={{flexDirection: 'row', margin: 20}}>
                <Icon2
                  name="scissors"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon2>
                <TextInput
                  placeholder="Select Shop Services"
                  placeholderTextColor={Color.whiteColor}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <FlatList
                data={this.state.empRec}
                keyExtractor = {(item,index)=>{index.toString()}}
                renderItem={(item,index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: Color.golden,
                        marginTop: 20,
                        margin: 20,
                      }}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: Color.darkgray,
                          position: 'absolute',
                          top: -20,
                          left: width - 97,
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1,
                        }}>
                        <TouchableOpacity onPress={()=>this.addEmpRec()}>
                          <Icon3
                            name="add-outline"
                            color={Color.golden}
                            size={30}></Icon3>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: Color.darkgray,
                          position: 'absolute',
                          top: -20,
                          left: 15,
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 1,
                        }}>
                        <TouchableOpacity onPress={()=>this.remEmpRec(index)}>
                          <Icon2
                            name="minus"
                            color={Color.golden}
                            size={30}></Icon2>
                        </TouchableOpacity>
                      </View>

                      <View style={{flexDirection: 'row', margin: 20}}>
                        <Icon
                          name="user-edit"
                          color={Color.golden}
                          size={20}
                          style={{marginTop: 22}}></Icon>
                        <TextInput
                          placeholder="Enter Employee Name"
                          placeholderTextColor={Color.whiteColor}
                          style={Styles1.TextInputStyle}></TextInput>
                      </View>
                      <View style={{flexDirection: 'row', margin: 20}}>
                        <Icon3
                          name="time"
                          color={Color.golden}
                          size={25}
                          style={{marginTop: 22}}></Icon3>
                        <TextInput
                          placeholder="Enter Employee Shift"
                          placeholderTextColor={Color.whiteColor}
                          style={Styles1.TextInputStyle}></TextInput>
                      </View>
                      <View style={{flexDirection: 'row', margin: 20}}>
                        <Icon2
                          name="scissors"
                          color={Color.golden}
                          size={25}
                          style={{marginTop: 22}}></Icon2>
                        <TextInput
                          placeholder="Select Employee Expertise"
                          placeholderTextColor={Color.whiteColor}
                          style={Styles1.TextInputStyle}></TextInput>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>


          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Package Plan')}>
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

export default ShopInfo;
