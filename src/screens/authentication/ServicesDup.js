import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import Color from '../../utils/Colors.json';
import Styles from '../../styles/Styles';
import {Checkbox} from 'react-native-paper';

import Header from '../components/Header';
import Footer from '../components/Footer';

import {get_services, edit_shopInfos} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

const ServicesDup = props => {
  const [selection, setSelection] = useState(false);
  const [ownerId, setOwnerId] = useState('');
  const [shopServices, setShopServices] = useState([]);
  const [services1, setServices1] = useState([]);

  const services = [
    {
      image: require('../../assets/images/home/photos3.jpg'),
      icon: 'hair-dryer-outline',
      text: 'Hair Dryer',
    },
    {
      image: require('../../assets/images/home/photos4.jpg'),
      icon: 'chair-rolling',
      text: 'Beard',
    },
    {
      image: require('../../assets/images/home/photos2.jpg'),
      icon: 'scissors-cutting',
      text: 'Trimming',
    },
    {
      image: require('../../assets/images/home/photos3.jpg'),
      icon: 'hair-dryer-outline',
      text: 'Hair 123',
    },
    {
      image: require('../../assets/images/home/photos4.jpg'),
      icon: 'chair-rolling',
      text: 'Beard 123',
    },
    {
      image: require('../../assets/images/home/photos2.jpg'),
      icon: 'scissors-cutting',
      text: 'Trimming 123',
    },
  ];
  
  useEffect( async()=>{
    await props.get_services();
    
    setServices1(props.services);
 },[]);

 const submit = async() => {
     console.log(shopServices)
   await props.edit_shopInfos({'services':shopServices})
    props.navigation.navigate('Home')
  }

  const handleService = index => {
    props.services.data[index].is_checked = !props.services.data[index].is_checked;
    setServices1(prev => services1);
    const ifIdFound = shopServices.indexOf(props.services.data[index]._id);
    // console.log(ifIdFound);
    if (ifIdFound == -1) {
      //not found
      console.log('add');
      shopServices.push(props.services.data[index]._id);
      setShopServices(shopServices);
    } else {
      const isCheck = props.services.data[index].is_checked;
      if (isCheck == false) {
        // console.log(typeof shopServices, shopServices);
        shopServices.splice(ifIdFound, 1);
      }
    }
    console.log(
      'expertiseeeeeeeeeeee',
      props.services.data
    );
  };

  return (
    <View style={Styles.background1}>
      <Header
        name="SELECT SERVICES"
        type={1}
        heading={true}
        image={false}
        subheading={false}
      />
      

      <ScrollView style={{marginTop: 20}}>
        {props.services&&props.services.data&&props.services.data.map((service, index) => {
          console.log(props.services.data[index].is_checked);
          return (
            index<(props.services.data.length/2)&&
            <View
              style={{
                backgroundColor: Color.primaryColor,
                margin: 20,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Checkbox
                  status={props.services.data[index].is_checked == true
                    ? 'checked'
                    : 'unchecked'}
                  onPress={() => handleService(index)}
                  color="white"
                  uncheckedColor="white"
                />
                <View
                  style={{
                    backgroundColor: Color.primaryColor,
                    width: '32%',
                    height: 107,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: Color.golden,
                    borderWidth: 1,
                    padding: 10,
                    marginRight: 10,
                    marginLeft: 10,
                  }}>
                  <Image
                    source={{uri:index==0?props.services.data[index].images[0]:props.services.data[(index*2)].images[0]}}
                    style={{width:30,height:30}}
                  />
                  <Text style={[Styles.subText2, {marginTop: 10}]}>
                    {index==0?props.services.data[index].title:props.services.data[(index*2)].title}
                  </Text>

                </View>


  

                <View style={{
                  marginLeft:10,
                  marginRight:10
                }}></View>


                {props.services.data[(index*2)+1]&&(
                  <>
                <Checkbox
                  status={props.services.data[(index*2)+1].is_checked == true
                    ? 'checked'
                    : 'unchecked'}
                  onPress={() => handleService((index*2)+1)}
                  color="white"
                  uncheckedColor="white"
                />
                <View
                  style={{
                    backgroundColor: Color.primaryColor,
                    width: '32%',
                    height: 107,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: Color.golden,
                    borderWidth: 1,
                    padding: 10,
                    marginRight: 10,
                    marginLeft: 10,
                  }}>
                  {/* <Icon2
                    name={service.icon}
                    color={Color.whiteColor}
                    size={50}
                  /> */}
                  <Image
                    source={{uri:props.services.data[(index*2)+1].images[0]}}
                    style={{width:40,height:40}}
                  />
                  <Text style={[Styles.subText2, {marginTop: 10}]}>
                    {props.services.data[(index*2)+1].title}
                  </Text>
                </View></>)}
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* <Footer method={true} redirect="Employee Info" /> */}
      {shopServices&&
      <TouchableOpacity
        onPress={
          ()=>submit()
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
const mapStateToProps = state => ({
    services: state.auth.services
  });
export default connect(mapStateToProps, {get_services,edit_shopInfos})(ServicesDup);