import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconShop from 'react-native-vector-icons/Entypo';

import Styles from '../../styles/Styles';
import Color from '../../utils/Colors.json';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      imageStyling: false,
      imageStyling1: false,
    };
  }
  render() {
    return (
      <View style={Styles.background}>
        
        {/* <Image source={require('../../assets/images/logo.png')} style={{width:100,height:100}}></Image> */}
        <Text style={Styles.headerText}>Create an Account</Text>
        <Text style={Styles.subText}>Please select the Categories</Text>

        <View style={{flexDirection: 'row', justifyContent:'center'}}>
          <Image
            source={require('../../assets/images/mainCategory/barber.jpg')}
            style={
              !this.state.imageStyling
                ? Styles.mainCategoryImage
                : Styles.mainCategoryImageChanged
            }></Image>

          {this.state.imageStyling && (
            <View style={Styles.barberOtherHalf}>
              <View style={Styles.barberOtherHalf1}>
                <Text style={Styles.subText1}>Select a Category</Text>
                <View
                  style={{marginTop: 15, marginLeft: 10, flexDirection: 'row'}}>
                  <Icon name="settings-remote" color="#947244" size={25}></Icon>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp Form',{category:"Barber",subCategory:"Remote"})}>
                    <Text style={Styles.subText2}>Remote</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{marginTop: 15, marginLeft: 10, flexDirection: 'row'}}>
                  <IconShop name="shop" color="#947244" size={25}></IconShop>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp Form',{category:"Barber",subCategory:"Shop"})}>
                    <Text style={Styles.subText2}>Shop</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={{flexDirection: 'row'}}>
          
          {this.state.imageStyling1 && (
            <View style={Styles.barberOtherHalf2}>
              <View style={Styles.barberOtherHalf3}>
                <Text style={Styles.subText1}>Select a Category</Text>
                <View
                  style={{marginTop: 15, marginLeft: 10, flexDirection: 'row'}}>
                  <Icon name="settings-remote" color="#947244" size={25}></Icon>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp Form',{category:"Beauty",subCategory:"Remote"})}>
                    <Text style={Styles.subText2}>Remote</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{marginTop: 15, marginLeft: 10, flexDirection: 'row'}}>
                  <IconShop name="shop" color="#947244" size={25}></IconShop>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp Form',{category:"Beauty",subCategory:"Shop"})}>
                    <Text style={Styles.subText2}>Shop</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          <Image
            source={require('../../assets/images/mainCategory/beauty.jpg')}
            style={
              !this.state.imageStyling1
                ? Styles.mainCategoryImage1
                : Styles.mainCategoryImageChanged1
            }></Image>
        </View>

        <View style={Styles.circle}>
          <TouchableOpacity
            onPress={() =>
              this.setState({imageStyling: !this.state.imageStyling})
            }>
            <Icon name="arrow-back" color={Color.whiteColor} size={30}></Icon>
          </TouchableOpacity>
        </View>

        <View style={Styles.circle1}>
          <TouchableOpacity
            onPress={() =>
              this.setState({imageStyling1: !this.state.imageStyling1})
            }>
            <Icon name="arrow-forward" color={Color.whiteColor} size={30}></Icon>
          </TouchableOpacity>
        </View>
        <Text style={Styles.mainCategorySubHeadingPosition1}>Barber</Text>
        <Text style={Styles.mainCategorySubHeadingPosition2}>Beauty</Text>
      </View>
    );
  }
}

export default SignUp;
