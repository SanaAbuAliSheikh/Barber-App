import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../styles/Styles';
import Color from '../../utils/Colors.json';
import Down from 'react-native-vector-icons/Entypo';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';
import { logout } from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';


const {width, height} = Dimensions.get('window');

const Profile = (props) => {
  const [slideStatus, setSlideStatus] = useState(false);

  const handleLogout = async () => {
    console.log("logouttttttttt");
    await props.logout();
    // const isLoggedIn = await AsyncStorage.getItem('token');

    // !isLoggedIn&&props.navigation.navigate('SignUp Form')
  }
  return (
    <View style={Styles.background1}>
      <ImageBackground
        source={require('../../assets/images/orderBooking/odr.png')}
        style={{width: width, height: height}}>
        <Text style={Styles.headerText}> SETTINGS </Text>
        <View
          style={{
            backgroundColor: Color.darkgray,
            width: width,
            height: height,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 20,
            opacity: 0.7,
            borderColor: Color.golden,
            borderWidth: 2,
            paddingTop: 30,
            paddingLeft: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 20,
            }}>
            <Text style={[Styles.subText4, {fontWeight: 'bold'}]}>
              Settings
            </Text>
            <TouchableOpacity onPress={() => setSlideStatus(!slideStatus)}>
              <Down
                name={slideStatus ? 'chevron-up' : 'chevron-down'}
                color={Color.golden}
                size={25}
              />
            </TouchableOpacity>
          </View>
          {slideStatus && (
            <View
              style={{
                // borderColor: Color.golden,
                // borderWidth: 2,
                borderRadius: 20,
                marginRight: 20,
                paddingLeft:50,
                paddingRight:50,
                padding: 10,
              }}>
              {/* <View style={{flexDirection: 'row',alignItems:'center'}}>
              <Down name="calendar" color={Color.golden} size={23} />

                <Text style={Styles.subText5}>History Order Bookings</Text>
              </View> */}
              <View style={{flexDirection: 'row',alignItems:'center'}}>
                
              <Logout name="post" color={Color.golden} size={23} />
                <TouchableOpacity onPress={()=>props.navigation.navigate('Notification')}>
                  <Text style={Styles.subText5}>Notifications</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row',alignItems:'center'}}>
              <ProfileIcon name="user-edit" color={Color.golden} size={20} />

                <Text style={Styles.subText5}>Edit Profile</Text>
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 20,
            }}>
            <Text style={[Styles.subText4, {fontWeight: 'bold'}]}>Logout</Text>
            <TouchableOpacity onPress={()=>handleLogout()}>
            
              <Logout name="logout" color={Color.golden} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default connect(null,{logout})(Profile);
