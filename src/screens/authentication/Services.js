import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import Color from '../../utils/Colors.json';
import Styles from '../../styles/Styles';
import {Checkbox} from 'react-native-paper';

import Header from '../components/Header';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('window');

const Services = props => {
  const [selection, setSelection] = useState(false);
  const services = [
    {
      image: require('../../assets/images/home/photos3.jpg'),
      icon: 'hair-dryer-outline',
      text: 'Hair Dryer',
    },
    {
      image: require('../../assets/images/home/photos4.jpg'),
      icon: 'chair-rolling',
      text: 'Beard',
    },
    {
      image: require('../../assets/images/home/photos2.jpg'),
      icon: 'scissors-cutting',
      text: 'Trimming',
    },
  ];

  return (
    <View style={Styles.background1}>
      <Header
        name="SELECT SERVICES"
        type={1}
        heading={true}
        image={false}
        subheading={false}
      />

      <ScrollView style={{marginTop: 20}}>
        {services.map((services, index) => {
          return (
            <View
              style={{
                backgroundColor: Color.primaryColor,
                margin: 20,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Checkbox
                  status={selection ? 'checked' : 'unchecked'}
                  onPress={() => setSelection(!selection)}
                  color="white"
                  uncheckedColor="white"
                />
                <View
                  style={{
                    backgroundColor: Color.primaryColor,
                    width: '32%',
                    height: 107,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: Color.golden,
                    borderWidth: 1,
                    padding: 10,
                    marginRight: 10,
                    marginLeft: 10,
                  }}>
                  <Icon2
                    name={services.icon}
                    color={Color.whiteColor}
                    size={50}
                  />
                  <Text style={[Styles.subText2, {marginTop: 10}]}>
                    {services.text}
                  </Text>

                </View>


  

                <View style={{
    marginLeft:10,
    marginRight:10
  }}></View>



                <Checkbox
                  status={selection ? 'checked' : 'unchecked'}
                  onPress={() => setSelection(!selection)}
                  color="white"
                  uncheckedColor="white"
                />
                <View
                  style={{
                    backgroundColor: Color.primaryColor,
                    width: '32%',
                    height: 107,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: Color.golden,
                    borderWidth: 1,
                    padding: 10,
                    marginRight: 10,
                    marginLeft: 10,
                  }}>
                  <Icon2
                    name={services.icon}
                    color={Color.whiteColor}
                    size={50}
                  />
                  <Text style={[Styles.subText2, {marginTop: 10}]}>
                    {services.text}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <Footer redirect="Employee Info" />
    </View>
  );
};

export default Services;
