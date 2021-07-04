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
} from 'react-native';
import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import {get_jobs, create_jobs, contact} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native'

const {width, height} = Dimensions.get('window');


const Contact = (props) => {
    const dispatch = useDispatch()
    const shopData = useSelector(state=>state.auth.shop)
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [msg, setMsg] = useState(null)
    const [userMsg, setUserMsg] = useState(null)

    const onSubmit = async() => {
      const data = {
        name:name,
        email:email,
        message:msg
      }
      const res = await dispatch(contact(data))
      if(res){
        console.log(res)
        setUserMsg(res.message)
        setName(null)
        setEmail(null)
        setMsg(null)
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
            <Text style={[Styles1.topHeaderText,{marginLeft:20}]}>CONTACT US</Text>
            <Text style={{color:Color.greyColor, marginLeft:20}}>Provide Your Information And Our Representative Will Contact You</Text>
            <View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon
                name="user"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon>
              <TextInput
                placeholder="Enter Name"
                placeholderTextColor={name?Color.whiteColor:Color.lightGrey}
                value={name}
                onChangeText={(text)=>setName(text)}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: name
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}
                >
                </TextInput>
            </View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="email"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor={email?Color.whiteColor:Color.lightGrey}
                value={email}
                onChangeText={(text)=>setEmail(text)}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: email
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}
                >
                </TextInput>
            </View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <Icon1
                name="message"
                color={Color.golden}
                size={25}
                style={{marginTop: 22}}></Icon1>
              <TextInput
                placeholder="Enter Message"
                placeholderTextColor={msg?Color.whiteColor:Color.lightGrey}
                value={msg}
                multiline={true}
                numberOfLines={4}
                onChangeText={(text)=>setMsg(text)}
                style={[Styles1.TextInputStyle,{
                  borderBottomColor: msg
                    ? Color.whiteColor
                    : Color.lightGrey,
                }]}
                >
                </TextInput>
            </View>

            <View>
              {
                userMsg && (
                  <Text style={{color:Color.whiteColor, textAlign:'center'}}>{userMsg}</Text>
                )
              }
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

export default Contact