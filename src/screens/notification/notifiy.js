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

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

import {get_notifications} from '../../actions/auth';
import {connect} from 'react-redux';
import Header from '../components/Header';


const Notification = (props) => {
  
  // const [notification, setNotification] = useState([
  //   {
  //     jobTitle: 'Hair Cutting Job',
  //     jobDescription:
  //       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //     date:'14/Nov/1999'
  //   },
  //   {
  //     jobTitle: 'Shaving Job',
  //     jobDescription:
  //       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //     date:'16/Jan/1999'
  //   },
  //   {
  //     jobTitle: 'Beard Making Job',
  //     jobDescription:
  //       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //       date:'30/June/1999'
  //   },
  // ]);
  const [notification, setNotification] = useState([]);

  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: '#161616',
          borderColor: Color.darkgray,
          borderWidth: 2,
          margin: 20,
          borderRadius: 10,
        }}>
          <View style={{flexDirection:'row',margin:20}}>
            <View style={{backgroundColor:Color.primaryColor,width:50, height:50, borderRadius:25}}></View>
            <Text
          style={{
            color: Color.whiteColor,
            fontSize: 15,
            marginLeft: 20,
            marginRight: 20,
          }}>
          {item.jobDescription}
        </Text>
          </View>
        

        {/* <View
          style={{
            width: '90%',
            borderColor: Color.whiteColor,
            borderWidth: 1,
            margin: 20,
          }}></View> */}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 14,
            marginRight: 26,
            marginBottom: 20,
            alignItems: 'center',
          }}>
          
          <Text
            style={{
              color: Color.golden,
              fontSize: 15,
              textAlign: 'right',
              flex: 1,
              marginLeft: 17,
            //   marginRight: 20,
            marginTop:10,
              fontWeight: 'bold',
            }}>
            {item.date}
          </Text>
        </View>
        
      </View>
    );
  };
  
  useEffect(async()=>{
    await props.get_notifications();
    setNotification(props.notifications);
  })
  return (
    <View style={Styles.background1}>
      {/* <Text style={Styles.headerText}>NOTIFICATIONS</Text> */}
      <Header name="NOTIFICATIONS" type={1} heading={true} image={false} subheading= {false}/>
      
      
      <FlatList
            data={notification}
            renderItem={renderItem}
            style={{marginBottom: 20}}></FlatList>

      </View>
  );
};

const mapStateToProps = state => ({
  notifications: state.auth.notifications
});
export default connect(mapStateToProps, {get_notifications})(Notification);
