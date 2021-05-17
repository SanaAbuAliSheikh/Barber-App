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


import Styles from '../../styles/Styles';

import Color from '../../utils/Colors.json';

import Icon2 from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';


const {width, height} = Dimensions.get('window');

const Footer = props => {
  const redirect = props.redirect;
  const navigation = useNavigation();
  
  return (
      <TouchableOpacity
        // onPress={() =>  props.submit ? props.submitValue ? navigation.navigate(redirect) : null : null}
        
        onPress={
          (props.type&&props.category)?
            ()=>navigation.navigate(redirect,{type:props.type, category:props.category})
          :
          ()=>navigation.navigate(redirect)
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
  );
};

export default Footer;
