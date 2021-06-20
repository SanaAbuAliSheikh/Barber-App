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
  FlatList,
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
import AddressApi, {getAddressPrediction, getGeoCode} from '../../components/Api';
import axios from 'axios';
import {config} from '../../utils/Static';
import AsyncStorage from '@react-native-community/async-storage';

import {register_shop} from '../../actions/auth';
import {connect} from 'react-redux';

const {width, height} = Dimensions.get('window');
const ShopInfoDup = props => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [owner, setOwner] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [fromDay, setFromDay] = useState('');
  const [toDay, setToDay] = useState('');
  const [fromDayModal, setFromDayModal] = useState(false);
  const [daysData, setDaysData] = useState([{name:'Monday'},{name:'Tuesday'},{name:'Wednesday'},{name:'Thursday'},{name:'Friday'},{name:'Saturday'},{name:'Sunday'}]);
  const [toDayModal, setToDayModal] = useState(false);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [error, setError] = useState('');



  const getAddress = async text => {
    setAddress(text)

    const addressList = await getAddressPrediction(text);
    console.log('A_L', addressList);
    if (addressList&&addressList.length > 0) {
      setShowAddressModal(true);
      setAddressData(addressList);
    }

    if(text==''){
      setShowAddressModal(false);
    }
  };

  const getLatLongFromAdd =  async (address) => {
    const addressInfo = await getGeoCode(address);
    setAddress(address);
    setShowAddressModal(false);
    console.log('Z_C',addressInfo);
    setZipCode(addressInfo.zipCode);
    setCountry(addressInfo.country);
    setLat(addressInfo.lat);
    setLong(addressInfo.lng);
  }

  const validation = () => {
    console.log("VALID");
    if (name == '') {
      setError('Missing Parameter Name');
      return false;
    }
    if (email == '') {
      setError('Missing Parameter Email');
      return false;
    }
    if (phone == '') {
      setError('Missing Parameter Phone');
      return false;
    }
    if (address == '') {
      setError('Missing Parameter Address');
      return false;
    }
    if (zipCode == '') {
      setError('Missing Parameter ZipCode');
      return false;
    }
    if (country == '') {
      setError('Missing Parameter Country');
      return false;
    }
    if (fromDay == '') {
      setError('Missing Parameter From Day');
      return false;
    }
    if (toDay == '') {
      setError('Missing Parameter To Day');
      return false;
    }
    return true;
  };

  const renderItem = ({item, index}) => {
    console.log(item.description);
    return (
      <View
        key={index}
        style={{
          margin: 10,
          marginTop:10,
          borderRadius: 10,
        }}>
          <TouchableOpacity onPress={()=>getLatLongFromAdd(item.description)}>
        <Text
          style={{
            color: Color.whiteColor,
            fontSize: 18,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          {item.description}
        </Text></TouchableOpacity>
      </View>
    );
  };

  const renderItemDays = ({item, index}) => {
    
    return (
      <View
        key={index}
        style={{
          margin: 10,
          
        }}>
          <TouchableOpacity onPress={()=>{fromDayModal&&(setFromDay(item.name),setFromDayModal(false)),toDayModal&&(setToDay(item.name),setToDayModal(false))}}>
            <Text style={{color:Color.whiteColor,borderBottomColor:Color.golden,borderWidth:1,padding:10, borderRadius:2,marginRight:5}}>{item.name}</Text>
        
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(async()=>{
    const ownerId = await AsyncStorage.getItem('owner_id');
    console.log("Owner",ownerId);
  })
  return (
    <View style={Styles.background}>
      <Header
        type={2}
        name="SHOP'S INFO"
        subname="Please enter your personal information to Login on the platform."
        heading={true}
        image={false}
        subheading={true}
      />

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
              placeholderTextColor='#7d7d7d'
              style={[Styles1.TextInputStyle,{borderBottomColor: name? Color.whiteColor:'#7d7d7d',}]}
              value={name}
              onChangeText={(text)=>setName(text)}></TextInput>
                       
          </View>
          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon1
              name="email"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon1>
            <TextInput
              placeholder="Enter Shop Email"
              placeholderTextColor='#7d7d7d'
              style={[Styles1.TextInputStyle,{borderBottomColor: email? Color.whiteColor:'#7d7d7d',}]}
              onChangeText={(text)=>setEmail(text)}></TextInput>
          </View>
          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon3
              name="phone-iphone"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon3>
            <TextInput
              placeholder="Enter Shop Phone"
              placeholderTextColor='#7d7d7d'
              style={[Styles1.TextInputStyle,{borderBottomColor: phone? Color.whiteColor:'#7d7d7d',}]}
              onChangeText={
                text => 
                  {
                    var cleaned = ('' + text).replace(/\D/g, '')
                    cleaned = cleaned.substring(0,10).toString().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                    console.log(cleaned);
                    setPhone( prev => cleaned)
                
                }
              }
              keyboardType="numeric"
              maxLength={14}
              value={phone}
              ></TextInput>
          </View>
          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon2
              name="address"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon2>
            <TouchableOpacity style={{width: '92%'}}>
              <TextInput
                placeholder="Enter Address"
                placeholderTextColor='#7d7d7d'
                style={[Styles1.TextInputStyle,{borderBottomColor: country? Color.whiteColor:'#7d7d7d',}]}
                onChangeText={text => getAddress(text)}
                value={address}
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
              placeholderTextColor='#7d7d7d'
              style={[Styles1.TextInputStyle,{borderBottomColor: country? Color.whiteColor:'#7d7d7d',}]}
              value={zipCode}
              onChangeText={(text)=>setZipCode(text)}
              ></TextInput>
          </View>

          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon2
              name="flag"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon2>
            <TextInput
              placeholder="Enter Country"
              placeholderTextColor='#7d7d7d'
              style={[Styles1.TextInputStyle,{borderBottomColor: country? Color.whiteColor:'#7d7d7d',}]}
              value={country}
              onChangeText={(text)=>setCountry(text)}
              ></TextInput>
          </View>
          <View style={{flexDirection: 'row', margin: 20, alignItems:'center'}}>
          <Icon3
              name="schedule-send"
              color={Color.golden}
              size={25}></Icon3>
            <TouchableOpacity
              style={{width: '92%'}}
              onPress={() => {setFromDayModal(true), console.log(fromDayModal)}}>
              <TextInput
                placeholder={fromDay?fromDay:"Select From Days"}
                placeholderTextColor={fromDay?Color.whiteColor:Color.lightGrey}
                editable={false}
                style={Styles1.TextInputStyle}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', margin: 20, alignItems:'center'}}>
            <Icon3
              name="schedule-send"
              color={Color.golden}
              size={25}></Icon3>
            <TouchableOpacity
              style={{width: '92%'}}
              onPress={() => setToDayModal(true)}>
              <TextInput
                placeholder={toDay?toDay:"Select To Days"}
                placeholderTextColor={toDay?Color.whiteColor:Color.lightGrey}
                editable={false}
                style={Styles1.TextInputStyle}></TextInput>
            </TouchableOpacity>
          </View>
        
          {showAddressModal && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
                position: 'absolute',
                top:30,
                width:'100%',
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
                  flex:1,
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                  width: '80%',
                  height: 220,
                }}>
                <Text style={[Styles.headerText1,{marginBottom:10}]}>Select Addresses</Text>
                <FlatList
                  data={addressData.slice(0,3)}
                  renderItem={renderItem}
                />
              </View>
            </View>
          )}

          {(fromDayModal || toDayModal) && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
                position: 'absolute',
                top:0,
                width:'100%',
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
                  flex:1,
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                  width: '80%',
                }}>
                <Text style={[Styles.headerText1,{marginBottom:10}]}>Select Days</Text>
                <View style={{margin:10, }}>
                  <FlatList
                  data={daysData}
                  renderItem={renderItemDays}
                />
                
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity onPress={() => setFromDayModal(false)}>
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
            </View>
          )}
        </View>
      </ScrollView>
      { name!='' && email!='' && phone!='' && address!='' && zipCode!='' && country!='' && fromDay!='' && toDay!='' &&
      
         <Footer data={{name,email,phone,address,zipCode,country,lat,long,fromDay, toDay}} redirect="Shop Day&Time Dup" />
      }
      {/* <Footer redirect="Services" /> */}
    </View>
  );
};

const mapStateToProps = state => ({
  shop: state.auth.shop
});
export default connect(mapStateToProps, {register_shop})(ShopInfoDup);
