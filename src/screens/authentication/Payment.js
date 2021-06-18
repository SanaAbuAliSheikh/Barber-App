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
  FlatList,
} from 'react-native';

import RadioForm , {RadioButton} from 'react-native-simple-radio-button';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';

import stripe from 'tipsi-stripe';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../utils/api';

const {width, height} = Dimensions.get('window');

const Payment = props => {

  const [error, setError] = useState('')
  const [paypal, setPaypal] = useState([
    {
      label: '',
      value: 0,
    },
  ]);
  const [stripes, setStripes] = useState([
    {
      label: '',
      value: 0,
    },
  ]);
  const [shop, setShop] = useState('')


  useEffect(async()=>{
    const shp = await AsyncStorage.getItem('plan_id');
    if(shp){
      setShop(shp)
    }
  },[]);

  const requestPayment = async() => {
    const ownerToken = await AsyncStorage.getItem('owner-token');
   
    if(ownerToken){
      api.defaults.headers.common['Authorization'] = `Bearer ${ownerToken}`;
    }
    stripe.setOptions({
      publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
    });
    return stripe
      .paymentRequestWithCardForm()
      .then(async(stripeTokenInfo) => {
        console.log(stripeTokenInfo);
        const body={
          "plan": shop,
          "payment_method": "stripe",
          "card_expiry":"11/2021",
          "card_number":"4242424242424242",
          "cvv":"424"
        }
        
        let body2 = JSON.stringify({body});
        
        try{
          console.log("hitttt",body);
          const res=await api.post('/payments/buy',body2)
          console.log(res.data,"res");
          
        }
        catch(err){
          console.log(err);
          setError(err)

        }
      }).then(()=>{
        console.log("successfuly");
        // props.navigation.navigate('Home')
      })
      .catch(error => {
        setError(error)
      });
  };

  return (
    <View style={Styles.background}>
      <Header name="SELECT PAYMENT METHOD" type={1} heading={true} image={false} subheading= {false}/>
      <Text style={Styles1.error}>{error}</Text>
      <View style={{display: 'flex', marginTop: 30,flex:1}}>
        <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 8,
        }}>
        <View style={{alignItems: 'center', margin: 20}}>
          <Icon2 name="cc-paypal" size={90} color={Color.golden} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Paypal
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            <RadioButton
              obj={paypal}
              isSelected={paypal[0].value!=0?true:false}
              buttonSize={8}
              onPress={(value) => {setStripes([{label:'',value:0}]),setPaypal([{label:'',value:1}])}}
              formHorizontal={true}
              labelStyle={{fontSize: 20}}
              labelHorizontal={true}
              buttonColor={Color.golden}
              selectedButtonColor={Color.golden}
              buttonInnerColor={Color.golden}
              labelColor={Color.whiteColor}
              selectedLabelColor={Color.whiteColor}
              style={{marginTop: 2}}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: Color.whiteColor,
            height: 4,
            width: width - 100,
            alignSelf: 'center',
          }}></View>
        <View style={{alignItems: 'center', margin: 20}}>
          <Icon3 name="v-card" size={110} color={Color.golden} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Credit Card
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            <RadioButton
              obj={stripes}
              isSelected={stripes[0].value!=0?true:false}
              onPress={(value) => {setPaypal([{label:'',value:0}]),setStripes([{label:'',value:1}])}}
              buttonSize={8}
              formHorizontal={true}
              labelStyle={{fontSize: 20}}
              labelHorizontal={true}
              buttonColor={Color.golden}
              selectedButtonColor={Color.golden}
              buttonInnerColor={Color.golden}
              labelColor={Color.whiteColor}
              selectedLabelColor={Color.whiteColor}
              style={{marginTop: 2}}
            />
          </View>
        </View>
      </View>
      
      </View>
      
      {/* <Footer redirect="Tab Menu"/> */}
      <TouchableOpacity
        // onPress={() =>  props.submit ? props.submitValue ? navigation.navigate(redirect) : null : null}
        
        onPress={
          ()=>requestPayment()
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

export default Payment;
