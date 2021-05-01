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
} from 'react-native';
import {Checkbox} from 'react-native-paper';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/Header';
import Footer from '../components/Footer';


const {width, height} = Dimensions.get('window');
class ShopInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showServices: false,
      setSelection: false,
      setSelection1: false,

      fileUri: '',
      empRec: [0],
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
          <Header type={2} name="SHOP'S INFO" subname="Please enter your personal information to Login on the platform." heading={true} image={false} subheading= {true}/>

          <ScrollView style={{marginTop: 12}}>
            <View style={{justifyContent: 'center', marginBottom: 10}}>
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
                  name="email"
                  color={Color.golden}
                  size={25}
                  style={{marginTop: 22}}></Icon1>
                <TextInput
                  placeholder="Enter Shop Email"
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
                  placeholder="Enter Shop Phone"
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
                <TouchableOpacity
                  style={{width: '92%'}}
                  onPress={() => this.setState({showServices: true})}>
                  <TextInput
                    placeholder="Select Shop Services"
                    placeholderTextColor={Color.whiteColor}
                    editable={false}
                    style={Styles1.TextInputStyle}></TextInput>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <Footer redirect="Services"/>     

          <Modal visible={this.state.showServices} transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              {/* <View
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
             */}
            </View>
          </Modal>
      </View>
    );
  }
}

export default ShopInfo;
