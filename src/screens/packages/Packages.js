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
  Image,
  ScrollView
} from 'react-native';
import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import {get_jobs, create_jobs, get_package, delete_package} from '../../actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import { color } from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Packages = (props) => {
    const dispatch = useDispatch()
    const shopData = useSelector(state=>state.auth.shop)
    const packages = useSelector(state=>state.auth.packages)
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

    const getPackages = async() => {
        console.log(shopData)
        const res = await dispatch(get_package(shopData._id))
        console.log(packages,'PACKAGES')

    }

    useEffect(() => {
        getPackages()
    },[])
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
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={[Styles1.topHeaderText,{marginLeft:20}]}>PACKAGES & OFFERS</Text>
            <View style={{marginTop:12, marginRight:10}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('CreatePackage')}>
                    <Icon name="add-circle-outline" color={Color.lightGolden1} size={50}/>
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView>
        {
            packages && packages.map(s => (
                <View style={{marginTop:20}}>
                <View style={{borderColor:Color.darkGolden, borderWidth:2, marginLeft:40, marginRight:40, borderRadius:25}}>
                    <View style={{padding:10}}>
                        <Text style={{color:Color.whiteColor, fontWeight:'bold', fontSize:16, textAlign:'center'}}>{s.title}</Text>
                        <Text style={{color:Color.greyColor, textAlign:'center', padding:10}}>{s.description}</Text>
                        <Text style={{color:Color.lightGolden1, textAlign:'center', fontSize:20}}>{s.charges}$</Text>
                    </View>
                    <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>dispatch(delete_package(s._id,shopData._id))}>
                        <Text style={{borderColor:Color.darkGolden,borderWidth:1, width:120, padding:10, borderRadius:25, color:Color.lightGolden1, textAlign:'center', marginBottom:10}}>Delete</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
            ))
        }
        </ScrollView>
        </View>
    )
}

export default Packages