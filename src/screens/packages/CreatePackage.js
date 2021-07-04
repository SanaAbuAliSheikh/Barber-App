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

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import {get_jobs, create_jobs, create_package} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import { color } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';

const {width, height} = Dimensions.get('window');


const CreatePackage = (props) => {
    const dispatch = useDispatch()
    const shopData = useSelector(state=>state.auth.shop)
    const [packageName, setPackageName] = useState(null)
    const [packagePrice, setPackagePrice] = useState(null)
    const [packageDescription, setPackageDescription] = useState(null)


    const onSubmit = async() => {
      console.log(shopData._id,'DATA')
      const data = {
        shop:shopData._id,
        title:packageName,
        description:packageDescription,
        charges:packagePrice
      }
      const res = await dispatch(create_package(data))
      if(res.code == 200){
        props.navigation.navigate('Packages')
      }
    }

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
            <Text style={[Styles1.topHeaderText,{marginLeft:20}]}>CREATE PACKAGES & OFFERS</Text>
            <View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="pen"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Package Name"
                placeholderTextColor={packageName?Color.whiteColor:Color.lightGrey}
                value={packageName}
                onChangeText={(text)=>setPackageName(text)}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: packageName
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}
                >
                </TextInput>
            </View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="file"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Package Description"
                placeholderTextColor={packageDescription?Color.whiteColor:Color.lightGrey}
                value={packageDescription}
                onChangeText={(text)=>setPackageDescription(text)}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: packageDescription
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}
                >
                </TextInput>
            </View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon
                name="cash"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon>
              <TextInput
              keyboardType={'number-pad'}
                placeholder="Enter Package Price"
                placeholderTextColor={packagePrice?Color.whiteColor:Color.lightGrey}
                value={packagePrice}
                onChangeText={(text)=>setPackagePrice(text)}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: packagePrice
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}
                >
                </TextInput>
            </View>
            <View
              style={Styles.button}>
              <TouchableOpacity onPress={()=>onSubmit()}>
                <Text style={Styles1.subText1}>Submit</Text>
              </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default CreatePackage