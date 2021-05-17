import React, {useEffect, useState} from 'react';
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

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AddressApi, { getAddressPrediction } from '../../components/Api';
import axios from 'axios';
import { config } from '../../utils/Static';

const {width, height} = Dimensions.get('window');
const ShopInfo = (props) => {
  const [showAddressModal, setShowAddressModal] = useState(false)

  const {category, type, id} = props.route.params;
  console.log(category, type, id);

  const getBreeds = async () => {
    try {
      console.log("breed");
       let resp = await axios.get("https://dog.ceo/api/breeds/list/all",config)
       console.log("sssssss");
    } catch (error) {
      console.error(error)
    }
  }
  getBreeds();
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
                <TouchableOpacity style={{width:'92%'}} onPress={()=>{AddressApi.getAddressPrediction(2)}}>
                  <TextInput
                    placeholder="Enter Address"
                    placeholderTextColor={Color.whiteColor}
                    style={Styles1.TextInputStyle}
                    onChangeText={(text)=>getAddressPrediction(text)}
                    // editable={false}
                    ></TextInput>
                </TouchableOpacity>

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
              {
                showAddressModal&&
                <Modal visible={false}>
                  <View>
                    <Text>ADDRESSES</Text>
                  </View>
                </Modal>
              }
            </View>
          </ScrollView>

          <Footer redirect="Services"/>     

          
      </View>
    );
  }

export default ShopInfo;
