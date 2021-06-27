import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  Modal,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import {get_jobs, create_jobs} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import { color } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Packages = (props) => {
    const data = [
        {
            id:1,
            name:'Facial and Haircut',
            price:'200',
            status:true,
            img:''
        },
        {
            id:1,
            name:'Haircut and Trimming',
            price:'200',
            status:false,
            img:''
        },
        {
            id:1,
            name:'Haircut and Styling',
            price:'300',
            status:true,
            img:''
        },
    ]
    return (
        <View style={Styles.background1}>
        <TouchableOpacity onPress={()=>props.navigation.pop()}>
        <View
        style={{
            alignSelf: 'flex-start',
            marginLeft:20,
            marginTop: 40,
            alignItems: 'center',
            padding: 10,
        }}>
        <Icon2 name="chevron-left" color={'white'} size={20} />
        </View>
        </TouchableOpacity>
        <Text style={[Styles1.topHeaderText,{marginLeft:20}]}>PACKAGES & OFFERS</Text>
        <View style={{marginTop:20}}>
            <View style={{borderColor:Color.darkGolden, borderWidth:2, marginLeft:40, marginRight:40, borderRadius:25}}>
                <View style={{padding:10}}>
                    <Text style={{color:Color.whiteColor, fontWeight:'bold', fontSize:16, textAlign:'center'}}>Haircut and Trim</Text>
                    <Text style={{color:Color.greyColor, textAlign:'center', fontSize:20}}>200$</Text>
                </View>
                <View style={{alignSelf:'center'}}>
                <TouchableOpacity>
                    <Text style={{borderColor:Color.darkGolden,borderWidth:1, width:120, padding:10, borderRadius:25, color:Color.lightGolden1, textAlign:'center', marginBottom:10}}>Inactive</Text>
                </TouchableOpacity>
                </View>
                </View>
        </View>
        </View>
    )
}

export default Packages