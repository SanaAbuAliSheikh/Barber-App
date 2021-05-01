import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
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

const {width, height} = Dimensions.get('window');

const OrderBooking = () => {
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

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginLeft: 40,
          marginBottom: 0,
          marginTop: 20,
          padding: 10,
          borderLeftColor:
            (item[8] == 'CANCELLED' && '#7E191B') ||
            (item[8] == 'REQUESTED' && '#F2AA4CFF') ||
            (item[8] == 'COMPLETED' && '#006B38FF'),
          borderWidth: 1,
          backgroundColor: Color.darkgray,
          opacity:0.8
        }}>
        {/* <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
          <View style={{width:50,height:50,borderRadius:25,backgroundColor:Color.primaryColor}}></View> */}
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: Color.whiteColor, margin: 10,fontWeight:'bold'}}>{item[1]}</Text>
            <Text
              style={{
                color: Color.whiteColor,
                margin: 10,
                textAlign: 'right',
                flex: 1,
              }}>
              1:00 - 3:00 pm
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{color: Color.greyColor, margin: 10}}>{item[5]}</Text>
            <Text
              style={{
                color:
                  (item[8] == 'CANCELLED' && '#7E191B') ||
                  (item[8] == 'REQUESTED' && '#F2AA4CFF') ||
                  (item[8] == 'COMPLETED' && '#006B38FF'),
                margin: 10,
                textAlign: 'right',
                flex: 1,
                fontWeight: 'bold',
              }}>
              {item[8]}
            </Text>
          </View>
        {/* </View> */}
      </View>
    );
  };
  return (
    <View style={Styles.background1}>
      <ImageBackground
        source={require('../../assets/images/orderBooking/odr.png')}
        style={{width: width, height: height}}>
        <Text style={[Styles.headerText2, {backgroundColor: Color.darkgray}]}>
          APPOINTMENTS
        </Text>
        <CalendarStrip
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
        />
        <FlatList data={tableData} renderItem={renderItem} />
      </ImageBackground>
    </View>
  );
};

export default OrderBooking;
