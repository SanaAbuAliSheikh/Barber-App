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

import Icon2 from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Header from '../components/Header';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('window');

const Category = props => {
  const [shop, setShop] = useState([
    {
      label: '',
      value: 0,
    },
  ]);
  const [remote, setRemote] = useState([
    {
      label: '',
      value: 0,
    },
  ]);
  const [barber, setBarber] = useState([
    {
      label: '',
      value: 0,
    },
  ]);
  const [beauty, setBeauty] = useState([
    {
      label: '',
      value: 0,
    },
  ]);

  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState('emai');


  const validation = () => {
    console.log("valid!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    if(shop[0].value!=0||remote[0].value!=0){
      
      setError('Missing Select Category')
      return false;
    }
    if(barber[0].value==1||beauty[0].value==1){
      setError('Missing Select Type')

      return false;
    }
    return true;
  }

  const onSubmit = async() => {
    console.log('onSubmitttttttttttttttttt');
    if(validation()){
      setSubmit(true);
    }
    // this.props.navigation.navigate('Package Plan');
  }
  return (
    <View style={Styles.background}>
      <Header name="SELECT CATEGORY & TYPE" type={1} heading={true} image={false} subheading= {false}/>
      
      {/* <Text style={Styles1.error}>{error}</Text> */}

      <View style={{display: 'flex', marginTop:20,flex:1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <RadioForm
              radio_props={remote}
              initial={-1}
              buttonSize={8}
              onPress={() => setRemote(remote)}
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
            <Icon2 name="home" color={Color.golden} size={20} />
            <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}>
              REMOTE
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Color.golden,
              height: 50,
              width: 4,
            }}></View>
          <View style={{flexDirection: 'row', margin: 20}}>
            <RadioForm
              radio_props={shop}
              initial={-1}
              buttonSize={8}
              onPress={() => setShop(shop)}
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
            <Icon2 name="shop" color="white" size={20} />
            <Text style={{color: 'white', marginLeft: 10, fontWeight: 'bold'}}>
              SHOP
            </Text>
          </View>
        </View>

        <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 8,
        }}>
        <View style={{alignItems: 'center', margin: 20}}>
          <Fontisto name="male" size={90} color={Color.golden} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Barber
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            <RadioForm
              radio_props={barber}
              initial={-1}
              buttonSize={8}
              onPress={() => setBarber(barber)}
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
          <Fontisto name="female" size={90} color={Color.golden} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Beauty & Hair Dresser
          </Text>
          <View style={{position: 'absolute', right: 10}}>
            <RadioForm
              radio_props={beauty}
              initial={-1}
              buttonSize={8}
              onPress={() => setBeauty(beauty)}
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
      
      {/* <Footer redirect="Package Plan" submit={onSubmit} submitValue={submit}/> */}
      <Footer redirect="Package Plan" />

      {/* </ImageBackground> */}
    </View>
  );
};

export default Category;
