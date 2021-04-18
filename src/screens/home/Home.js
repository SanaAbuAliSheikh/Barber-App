import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../../utils/Colors.json';
import Styles from '../../styles/Styles';

const Home = () => {
  return (
    <View style={Styles.background1}>
      {/* <Text style={Styles.headerText}>Hello World</Text>
       */}
      <View style={{flexDirection: 'row', margin: 30, alignItems: 'center'}}>
        {/* <Icon name="account-search" color={Color.whiteColor} size={30} ></Icon> */}
        <View>
          <Text style={Styles.subText3}>Welcome to the</Text>
          <Text style={[Styles.subText3,{fontWeight:'bold'}]}>Barber App</Text>
        </View>

        <View style={{justifyContent: 'flex-end', marginLeft: 80}}>
          <View
            style={{
              backgroundColor: Color.darkgray,
              width: 80,
              height: 80,
              borderRadius: 40,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default Home;
