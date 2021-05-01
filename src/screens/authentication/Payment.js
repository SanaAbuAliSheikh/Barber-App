import React, {useState} from 'react';
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

import RadioForm from 'react-native-simple-radio-button';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';



import Header from '../components/Header';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('window');

const Payment = props => {
  
  const [paypal, setPaypal] = useState([
    {
      label: '',
      value: 0,
    },
  ]);
  const [stripe, setStripe] = useState([
    {
      label: '',
      value: 0,
    },
  ]);

  return (
    <View style={Styles.background}>
      <Header name="SELECT PAYMENT METHOD" type={1} heading={true} image={false} subheading= {false}/>
      
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
            <RadioForm
              radio_props={paypal}
              initial={-1}
              buttonSize={8}
              onPress={() => setPaypal(Paypal)}
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
            <RadioForm
              radio_props={stripe}
              initial={-1}
              buttonSize={8}
              onPress={() => setStripe(stripe)}
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
      
      <Footer redirect="Tab Menu"/>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Payment;
