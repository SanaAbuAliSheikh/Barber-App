import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon1 from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Header = props => {
  const navigation = useNavigation();
  return (
    <View>
      {/* <ImageBackground
          source={require('../../assets/images/orderBooking/odr.png')}
          style={{width: width, height: height}}> */}

      <View
        style={{
          display: 'flex',
          margin: 20,
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{flexDirection: 'row'}}>
            <Icon1 name="chevron-left" color={Color.whiteColor} size={20} />
            {/* <Text style={{color:Color.whiteColor, fontWeight:'bold'}}>Back</Text> */}
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}>
        {props.image && (
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{width: 60, height: 78}}></Image>
          </View>
        )}
        <View
          style={{
            width: '95%',
            marginLeft: 20,
            marginRight: 20,
          }}>
          {props.heading && (
            <Text style={[Styles1.topHeaderText,{marginLeft:props.type==1?0:20}]}>{props.name}</Text>
          )}
          {props.subheading && (
            <Text style={Styles2.topSubText}>
              {props.subname}
            </Text>
          )}
        </View>
      </View>

      {/* </ImageBackground> */}
    </View>
  );
};

export default Header;
