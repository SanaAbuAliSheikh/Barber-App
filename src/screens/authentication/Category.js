import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import RadioForm , {RadioButton} from 'react-native-simple-radio-button';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon2 from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-community/async-storage';


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
  const [type, setType] = useState([
    {
      label: '',
      value: 1,
    },
    {
      label: '',
      value: 2,
    },
  ]);
  const [shopExist, setShopExist] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  useEffect(async()=>{
    const shopId = await AsyncStorage.getItem('shop_id');
    
    if(shopId){   
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",shopId); 
    }
    const no_of_shops = await AsyncStorage.getItem('no_of_shops');
      console.log("jnn",no_of_shops);
    if(no_of_shops!=0&&shopId){
      setShopExist(true);
      // setShowPlan(true);
      console.log(shopExist);
    } else{
      setShopExist(false);

    }
    console.log(shopExist);

    // setShowPlan(true)
 },[]);
 
 const onSubmit = async() => {
  const shopId = await AsyncStorage.getItem('shop_id');
  const no_of_shops = await AsyncStorage.getItem('no_of_shops');
  console.log("on Submit",no_of_shops,shopId);
  if(no_of_shops!=0&&shopId){
    setShopExist( prev => true);
    console.log(shopExist);
  } else{
    setShopExist(false);

  }
   const redirect = shopExist?"Shop Info":"Package Plan";
  props.navigation.navigate(redirect,{type:barber[0].value==1?'barber':'beauty', category:shop[0].value==1?'physical':'remote'})
 }
  return (
    <View style={Styles.background}>
      <Header name="SELECT CATEGORY & TYPE" type={1} heading={true} image={false} subheading= {false}/>
      

      <View style={{display: 'flex', marginTop:20,flex:1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', margin: 20}}>
            <RadioButton
              obj={remote}
              isSelected={remote[0].value!=0?true:false}
              onPress={(value) => {setShop([{label:'',value:0}]),setRemote([{label:'',value:1}])}}
              formHorizontal={true}
              labelStyle={{fontSize: 20}}
              labelHorizontal={true}
              buttonColor={Color.golden}
              selectedButtonColor={Color.golden}
              buttonInnerColor={Color.primaryColor}
              buttonSize={8}
              buttonOuterSize={20}
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
            <RadioButton
              obj={shop}
              buttonSize={8}
              buttonOuterSize={20}
              isSelected={shop[0].value!=0?true:false}
              onPress={(value) => {setShop([{label:'',value:1}]),setRemote([{label:'',value:0}])}}
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
            <RadioButton
              obj={barber}
              initial={-1}
              buttonSize={8}
              buttonOuterSize={20}
              isSelected={barber[0].value!=0?true:false}
              onPress={(value) => {setBeauty([{label:'',value:0}]),setBarber([{label:'',value:1}])}}
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
            <RadioButton
              obj={beauty}
              initial={-1}
              buttonSize={8}
              buttonOuterSize={20}
              isSelected={beauty[0].value!=0?true:false}
              onPress={(value) => {setBeauty([{label:'',value:1}]),setBarber([{label:'',value:0}])}}
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
      
      {
        ((shop[0].value==0&&remote[0].value==0)||(barber[0].value==0&&beauty[0].value==0))?console.log("Category"):
        // <Footer redirect={showPlan?"Shop Info":"Package Plan"} category={shop[0].value==1?'physical':'remote'} type={barber[0].value==1?'barber':'beauty'} />
        <TouchableOpacity
        // onPress={() =>  props.submit ? props.submitValue ? navigation.navigate(redirect) : null : null}
        
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
      }

    </View>
  );
};

export default Category;
