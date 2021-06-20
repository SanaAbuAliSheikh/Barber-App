import React, {useState, useEffect} from 'react';
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
  PermissionsAndroid,
} from 'react-native';

import { requestOneTimePayment, requestBillingAgreement } from 'react-native-paypal'; 


import Styles from '../../styles/Styles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Icon5 from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { register_employee} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

const EmployeeDetails = props => {
  
    const [shop, setShop] = useState('')
  useEffect(async()=>{
      const shop = await AsyncStorage.getItem('shop_id');
      setShop(shop)
      console.log(props.route.params.empData);
      
  });

  const onSubmit = async() => {
      const {name, phone, fileUri, services,type} = props.route.params.empData[0];
      // console.log(name, phone, expertise,type);
      // const emps = props.route.params.empData[0];
      const shop = await AsyncStorage.getItem('shop_id');
      await props.register_employee({shop,name, phone, services,type})

      const no_of_shops = await AsyncStorage.getItem('no_of_shops');
      console.log(no_of_shops=="5");

      no_of_shops=="1" ? props.navigation.navigate('SignUp Form') : props.navigation.navigate('Category');
      let val = JSON.parse(no_of_shops);
      console.log(no_of_shops==5);
      AsyncStorage.setItem('no_of_shops',JSON.stringify(val-1));
}

  return (
    <View style={Styles.background}>
      <Header
        type={2}
        name="EMPLOYEE'S DETAILS"
        subname="Please enter your personal information to Login on the platform."
        heading={true}
        image={false}
        subheading={true}
      />
      {/* <Text style={{color:'red',marginTop:20,textAlign:'center'}}>{error}</Text> */}
      <ScrollView>
        <View style={{justifyContent: 'center', marginBottom: 10,marginTop:10}}>
          {
              props.route.params.empData&&
              props.route.params.empData.map((emp, index) => {
                  const {fileUri,name, phone, type} = emp;
                  return(
                  <View style={{flexDirection:'row',padding:20,borderColor:Color.golden,borderWidth:1,borderRadius:10,margin:20}}>
                    
                      <Image
                        source={{uri: `data:${fileUri.mime};base64,${fileUri.data}`}}
                        style={{width: 50, height: 50, borderRadius: 25}}></Image>
                        <View style={{marginLeft:20,marginRight:20}}>
                            <Text style={{color:Color.whiteColor, fontSize:20, fontWeight:'bold'}}>{name}</Text>
                            <Text style={{color:Color.lightGrey}}>{type}</Text>
                        </View>
                      
                    </View>);
              })
          }
        </View>
      </ScrollView>

      <TouchableOpacity
       
        onPress={
          ()=>onSubmit()
        }
        style={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          bottom: 30,
        }}>
        <View
          style={{
            alignSelf: 'flex-end',
            borderColor: Color.golden,
            borderWidth: 2,
            borderRadius: 30,
            marginLeft: 90,
            marginRight: 50,
            marginTop: 40,
            alignItems: 'center',
            width: 90,
            padding: 10,
          }}>
          <Icon2 name="chevron-right" color={'white'} size={20} />
        </View>
      </TouchableOpacity>
      
      
    </View>
  );
};
const mapStateToProps = state => ({
  employees: state.auth.employee
});
export default connect(mapStateToProps, {register_employee})(
  EmployeeDetails,
);
