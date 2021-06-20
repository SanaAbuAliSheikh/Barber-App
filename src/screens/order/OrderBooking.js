import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Styles from '../../styles/Styles';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import Color from '../../utils/Colors.json';
import CalendarStrip from 'react-native-calendar-strip';
import Icon2 from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('window');

import {get_appointment, status_appointment} from '../../actions/auth';
import {connect} from 'react-redux';

const OrderBooking = props => {
  const [tableHead, setTableHead] = useState([
    'Order ID',
    // 'Customer',
    'Customer Name',
    'Customer Email',
    'Customer Phone',
    'Appointment Timings',
    'Service Type',
    'Pref Employee',
    'Shop Area',
  ]);
  const [tableTitle, setTableTitle] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);
  const [tableData, setTableData] = useState([
    [
      '0001',
      'Ali',
      'ali@gmail.com',
      12345,
      '2 - 2:30',
      'Hair Cut',
      'NA',
      'NA',
      'REQUESTED',
    ],
    [
      '0002',
      'Sumbal',
      'smbl@gmail.com',
      56789,
      '1 - 2',
      'Hair Cut',
      'Shariq',
      'Clifton',
      'COMPLETED',
    ],
    [
      '0003',
      'John',
      'john@gmail.com',
      12345,
      '2 - 2:30',
      'Shave',
      'NA',
      'Nazimabad',
      'CANCELLED',
    ],
    [
      '0004',
      'M. Ali',
      'm_ali@gmail.com',
      12345,
      '5 - 6',
      'Hair Cut',
      'NA',
      'NA',
      'REQUESTED',
    ],
    [
      '0005',
      'Ismail',
      'milo@gmail.com',
      12345,
      '8 - 9',
      'Hair Cut',
      'NA',
      'NA',
      'REQUESTED',
    ],
    [
      '0006',
      'Amin',
      'amin@gmail.com',
      12345,
      '8 - 9',
      'Facial',
      'Mikael',
      'NA',
      'CANCELLED',
    ],
    [
      '0007',
      'Owais',
      'owais@gmail.com',
      12345,
      '10 - 11',
      'Pedicure',
      'NA',
      'Clifton',
      'CANCELLED',
    ],
    [
      '0008',
      'Ali',
      'ali@gmail.com',
      12345,
      '2 - 2:30',
      'Hair Cut',
      'NA',
      'NA',
      'CANCELLED',
    ],
    [
      '0009',
      'Sumbal',
      'smbl@gmail.com',
      56789,
      '1 - 2',
      'Hair Cut',
      'Shariq',
      'Clifton',
      'REQUESTED',
    ],
  ]);
  const [date, setDate] = useState('');
  const [statusReq, setStatusReq] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [status, setStatus] = useState('');

  useEffect(async () => {
    await props.get_appointment();
    console.log('APPOINTMENTS', props.appointments);
  }, []);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginLeft: 40,
          marginBottom: 0,
          marginTop: 20,
          padding: 10,
          borderLeftColor:
            (item.status == 'Cancelled' && '#7E191B') ||
            (item.status == 'Pending' && '#F2AA4CFF') ||
            (item.status == 'Accepted' && '#006B38FF'),
          borderWidth: 1,
          backgroundColor: Color.darkgray,
          opacity: 0.8,
        }}>
        {/* <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <View style={{width:50,height:50,borderRadius:25,backgroundColor:Color.primaryColor}}></View> */}
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: Color.whiteColor, margin: 10, fontWeight: 'bold'}}>
            {item.user && item.user.firstname}
            {'  '}
            {item.user && item.user.lastname}
          </Text>
          <Text
            style={{
              color: Color.whiteColor,
              margin: 10,
              textAlign: 'right',
              flex: 1,
            }}>
            {item.time}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          {/* <Text style={{color: Color.greyColor, margin: 10}}>{service}</Text> */}
          <TouchableOpacity onPress={() => {setStatusReq(!statusReq),setBookingId(item._id)}}>
            <Text
              style={{
                color:
                  (item.status == 'Cancelled' && '#7E191B') ||
                  (item.status == 'Pending' && '#F2AA4CFF') ||
                  (item.status == 'Accepted' && '#006B38FF'),
                margin: 10,
                textAlign: 'right',
                flex: 1,
                fontWeight: 'bold',
              }}>
              {item.status == "Pending" && "REQUESTED"}
              {item.status == "Accepted" && "COMPLETED"}
              {item.status == "Cancelled" && "CANCELLED"}
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
    );
  };
  // console.log(this);
  const onStatusChange = async(status) => {
    setStatus(status);
    setStatusReq(false)
    console.log(status,bookingId);
    await props.status_appointment({bookingId,status});
  }
  return (
    <View style={Styles.background1}>
      <ImageBackground
        source={require('../../assets/images/orderBooking/odr.png')}
        style={{width: width, height: height}}>
        <Text style={[Styles.headerText2, {backgroundColor: Color.darkgray}]}>
          APPOINTMENTS
        </Text>
        <CalendarStrip
          // ref={component => setDate(component.getSelectedDate+"")}
          scrollable
          scrollerPaging
          style={{height: 100, paddingTop: 20, paddingBottom: 10, fontSize: 19}}
          calendarColor={Color.darkgray}
          calendarHeaderStyle={{color: 'white'}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          highlightDateNumberStyle={{color: Color.golden}}
          highlightDateNameStyle={{color: Color.golden}}
          iconContainer={{flex: 0.1, color: 'red'}}
          iconStyle={{
            backgroundColor: Color.darkgray,
            borderRadius: 40,
            padding: 10,
          }}
          onDateSelected={() => console.log(date)}
        />
        <FlatList
          data={props.appointments && props.appointments.data}
          renderItem={renderItem}
        />
        <Modal visible={statusReq} transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <View
              style={{
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: Color.primaryColor,
                borderColor: Color.golden,
                borderWidth: 1,
                borderRadius: 15,
                padding: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width: '80%',
              }}>
              <Text style={Styles.headerText1}>Select Status</Text>
              <View
                style={{
                  marginTop: 15,
                }}>
                <TouchableOpacity onPress={() => onStatusChange('Pending')}>
                  <Text
                    style={{
                      color: '#F2AA4CFF',
                      margin: 10,
                      fontWeight: 'bold',
                    }}>
                    REQUESTED
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onStatusChange('Accepted')}>
                  <Text
                    style={{
                      color: '#006B38FF',
                      margin: 10,
                      fontWeight: 'bold',
                    }}>
                    COMPLETED
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onStatusChange('Cancelled')}>
                  <Text
                    style={{
                      color: '#7E191B',
                      margin: 10,
                      fontWeight: 'bold',
                    }}>
                    CANCELLED
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={() => setStatusReq(false)}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: Color.golden,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon2
                      name="arrow-left"
                      color={Color.whiteColor}
                      size={24}></Icon2>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => ({
  appointments: state.auth.appointments,
});
export default connect(mapStateToProps, {get_appointment, status_appointment})(
  OrderBooking,
);
