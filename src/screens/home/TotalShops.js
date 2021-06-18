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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';

import Color from '../../utils/Colors.json';
import Styles from '../../styles/Styles';

import {get_owner_shops} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const TotalShops = props => {
  const handleSingleShop = async(index) => {

    console.log("shop id",props.shops[index]._id);
    const shop = AsyncStorage.setItem('shop_id',props.shops[index]._id)
    props.navigation.navigate('Tab Menu')
  }

  const renderItem = ({item,index}) => {
    return (
      <TouchableOpacity onPress={()=>handleSingleShop(index)}>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 10,
            borderWidth: 2,
            borderBottomColor: Color.golden,
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            padding: 20,
            borderRadius: 20,
          }}>
          <Text style={[Styles.subText,{fontWeight:'bold'}]}>{item.address}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <View style={{width: 50, height: 50, borderRadius: 25}}>
              <Image
                source={{uri: item.images[0]}}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: Color.primaryColor,
                position: 'absolute',
                left: '41%',
              }}></View>

            {item.images[1] ? (
              <View style={{width: 50, height: 50, borderRadius: 25}}>
                <Image
                  source={{uri: item.images[1]}}
                  style={{width: 50, height: 50, borderRadius: 25}}
                />
              </View>
            ) : (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: Color.whiteColor,
                }}></View>
            )}
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: Color.primaryColor,
                position: 'absolute',
                left: '42%',
              }}></View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(async () => {
    await props.get_owner_shops();
    console.log('all shops', props.shops);
  }, []);
  return (
    <View style={Styles.background1}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: Color.darkgray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={{justifyContent: 'center', marginTop: 20}}>
          <View
            style={{
              backgroundColor: Color.primaryColor,
              width: 80,
              height: 80,
              borderRadius: 40,
            }}></View>
        </View>
        <View style={{marginTop: 10, marginBottom: 20}}>
          <Text style={[Styles.subText8, {fontWeight: 'bold'}]}>
            Mr. John Doe
          </Text>
        </View>
      </View>

      <FlatList data={props.shops} renderItem={renderItem} />
    </View>
  );
};
const mapStateToProps = state => ({
  shops: state.auth.allShops,
});
export default connect(mapStateToProps, {get_owner_shops})(TotalShops);
