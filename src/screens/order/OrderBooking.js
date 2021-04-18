import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
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
    ['0001', 'Ali', 'ali@gmail.com', 12345, '2 - 2:30', 'Hair Cut', 'NA', 'NA'],
    [
      '0002',
      'Sumbal',
      'smbl@gmail.com',
      56789,
      '1 - 2',
      'Hair Cut',
      'Shariq',
      'Clifton',
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
    ],
    ['0004', 'M. Ali', 'm_ali@gmail.com', 12345, '5 - 6', 'Hair Cut', 'NA', 'NA'],
    ['0005', 'Ismail', 'milo@gmail.com', 12345, '8 - 9', 'Hair Cut', 'NA', 'NA'],
    ['0006', 'Amin', 'amin@gmail.com', 12345, '8 - 9', 'Facial', 'Mikael', 'NA'],
    [
      '0007',
      'Owais',
      'owais@gmail.com',
      12345,
      '10 - 11',
      'Pedicure',
      'NA',
      'Clifton',
    ],
    ['0008', 'Ali', 'ali@gmail.com', 12345, '2 - 2:30', 'Hair Cut', 'NA', 'NA'],
    [
      '0009',
      'Sumbal',
      'smbl@gmail.com',
      56789,
      '1 - 2',
      'Hair Cut',
      'Shariq',
      'Clifton',
    ],
  ]);
  const widthArr = [120, 120, 120, 120, 120, 120, 120, 120];

  return (
    <View style={Styles.background1}>
      <ImageBackground
        source={require('../../assets/images/orderBooking/odr.png')}
        style={{width: width, height: height}}>
        {/* <Text style={Styles.headerText}>Bookings</Text> */}

        <ScrollView horizontal={true}>
          <View>
            <Table style={{marginTop: 30}}>
              <Row
                data={tableHead}
                widthArr={widthArr}
                textStyle={{
                  textAlign: 'center',
                  color: Color.golden,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
              />
            </Table>
            <ScrollView>
              <Table>
                <TableWrapper style={{ marginTop: 20}}>
                  
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      textStyle={{textAlign: 'center', color: Color.whiteColor}}
                      widthArr={widthArr}
                      style={[{marginTop:10,padding:10, opacity:0.7},index%2 && {backgroundColor: Color.darkgray}]}
                    />
                  ))}
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default OrderBooking;
