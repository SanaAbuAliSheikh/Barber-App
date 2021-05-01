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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Feather';

import Color from '../../utils/Colors.json';
import Styles from '../../styles/Styles';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const images = [
    require('../../assets/images/home/photos3.jpg'),
    require('../../assets/images/home/photos2.jpg'),
    require('../../assets/images/home/photos1.jpg'),
    require('../../assets/images/home/photos4.jpg'),
  ];
  const [imagesIndex, setImagesIndex] = useState(0);
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
  const [servicesIndex, setServicesIndex] = useState(0);
  const [empIndex, setEmpIndex] = useState(0);

  const [getEmpData, setGetEmpData] = useState([
    {
      name: 'John Abraham',
      expertise: 'Hair Cutting',
      availability: 'Mon - Fri',
      timings: '1:00 am - 5:00 pm',
    },
    {
      name: 'Arijit Singh',
      expertise: 'Beard',
      availability: 'Mon - Fri',
      timings: '11:00 am - 9:00 pm',
    },
    {
      name: 'Ranveer Singh',
      expertise: 'Hair Cutting',
      availability: 'Mon - Sat',
      timings: '9:00 am - 5:00 pm',
    },
  ]);
  const [getEmpDataCopy, setGetEmpDataCopy] = useState(getEmpData);

  const searchEmp = value => {
    console.log(value.length);
    if (value.length > 0) {
      const filteredEmp = getEmpDataCopy.filter(emp => {
        let empLowerCase = emp.name.toLowerCase();
        let searchTermLowerCase = value.toLowerCase();

        return empLowerCase.indexOf(searchTermLowerCase) > -1;
      });
      setGetEmpData(filteredEmp);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 5,
            marginRight: 5,
            marginTop: 20,
            justifyContent: 'flex-end',
          }}>
          {/* <Text style={[Styles.subText7, {color: Color.golden}]}>SAVE</Text> */}
          <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text>
        </View>
        <View
          style={{
            backgroundColor: Color.primaryColor,
            margin: 10,
            borderRadius: 20,
            padding: 20,
            borderColor: Color.golden,
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: Color.darkgray,
                borderRadius: 35,
              }}></View>
            <View>
              <Text style={Styles.subText7}>{getEmpData[empIndex].name}</Text>
              <Text
                style={[
                  Styles.subText9,
                  {marginTop: 10, color: Color.greyColor},
                ]}>
                Expertise : {getEmpData[empIndex].expertise}
              </Text>
              <Text
                style={[
                  Styles.subText9,
                  {marginTop: 10, color: Color.greyColor},
                ]}>
                Availability : {getEmpData[empIndex].availability}
              </Text>
              <Text
                style={[
                  Styles.subText9,
                  {marginTop: 10, color: Color.greyColor},
                ]}>
                Shift Timings : {getEmpData[empIndex].timings}
              </Text>
            </View>
          </View>
        </View>

        {getEmpData[empIndex + 1] && (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 20,
                justifyContent: 'flex-end',
              }}>
              {/* <Text style={[Styles.subText7, {color: Color.golden}]}>SAVE</Text> */}
              <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text>
            </View>
            <View
              style={{
                backgroundColor: Color.primaryColor,
                margin: 10,
                borderRadius: 20,
                padding: 20,
                borderColor: Color.golden,
                borderWidth: 1,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: Color.darkgray,
                    borderRadius: 35,
                  }}></View>
                <View>
                  <Text style={Styles.subText7}>
                    {getEmpData[empIndex + 1].name}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Expertise : {getEmpData[empIndex + 1].expertise}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Availability : {getEmpData[empIndex + 1].availability}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Shift Timings : {getEmpData[empIndex + 1].timings}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {getEmpData[empIndex + 2] && (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 20,
                justifyContent: 'flex-end',
              }}>
              {/* <Text style={[Styles.subText7, {color: Color.golden}]}>SAVE</Text> */}
              <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text>
            </View>
            <View
              style={{
                backgroundColor: Color.primaryColor,
                margin: 10,
                borderRadius: 20,
                padding: 20,
                borderColor: Color.golden,
                borderWidth: 1,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    width: 70,
                    height: 70,
                    backgroundColor: Color.darkgray,
                    borderRadius: 35,
                  }}></View>
                <View>
                  <Text style={Styles.subText7}>
                    {getEmpData[empIndex + 2].name}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Expertise : {getEmpData[empIndex + 2].expertise}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Availability : {getEmpData[empIndex + 2].availability}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Shift Timings : {getEmpData[empIndex + 2].timings}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };
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
          {/* <Text style={Styles.subText3}>Welcome</Text> */}
          <Text style={[Styles.subText8, {fontWeight: 'bold'}]}>
            Mr. John Doe
          </Text>
        </View>

        <View style={{marginTop: 10, marginBottom: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setShowInfo(true), setShowServices(false);
            }}>
            <Text
              style={[
                Styles.subText6,
                {
                  borderBottomColor: showInfo ? Color.golden : Color.whiteColor,
                  borderTopColor: Color.darkgray,
                  borderLeftColor: Color.darkgray,
                  borderRightColor: Color.darkgray,

                  color: showInfo ? Color.golden : Color.whiteColor,
                  borderWidth: showInfo ? 2 : 0,
                },
              ]}>
              INFO
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: width * 0.22,
              marginRight: width * 0.12,
              marginBottom: -5,
            }}>
            <Icon name="star" color="#F2AA4CFF" size={20} />
            <Icon name="star" color="#F2AA4CFF" size={20} />
            <Icon name="star" color="#F2AA4CFF" size={20} />
            <Icon name="star" color="#F2AA4CFF" size={20} />
            <Icon name="star" color="#F2AA4CFF" size={20} />
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowServices(true), setShowInfo(false);
            }}>
            <Text
              style={[
                Styles.subText6,
                {
                  borderBottomColor: showServices
                    ? Color.golden
                    : Color.whiteColor,
                  borderTopColor: Color.darkgray,
                  borderLeftColor: Color.darkgray,
                  borderRightColor: Color.darkgray,

                  color: showServices ? Color.golden : Color.whiteColor,
                  borderWidth: showServices ? 2 : 0,
                },
              ]}>
              SERVICES
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {showInfo && (
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <Text style={[Styles.subText7, {marginBottom: 10}]}>
              LOCATION & HOURS
            </Text>
            <Text
              style={[
                Styles.subText7,
                {marginBottom: 10, color: Color.golden},
              ]}>
              EDIT
            </Text>
          </View>

          <View>
            <ImageBackground
              source={require('../../assets/images/home/map12.jpg')}
              style={{width: width, height: height * 0.25, opacity: 0.7}}>
              <Text
                style={[
                  Styles.subText7,
                  {
                    paddingTop: 20,
                    paddingLeft: 10,
                    paddingRight: 20,
                    paddingBottom: 5,
                  },
                ]}>
                Zey BarberShop
              </Text>
              <Text
                style={[
                  Styles.subText9,
                  {paddingLeft: 20, paddingRight: 10, width: '50%'},
                ]}>
                123 ABC Street Houston, TX, 2390
              </Text>

              <Text
                style={[
                  Styles.subText7,
                  {
                    paddingTop: 30,
                    paddingLeft: 10,
                    paddingRight: 20,
                    paddingBottom: 5,
                  },
                ]}>
                Monday - Saturday
              </Text>
              <Text
                style={[
                  Styles.subText9,
                  {paddingLeft: 20, paddingRight: 10, width: '50%'},
                ]}>
                9:00 am - 6:00pm
              </Text>
            </ImageBackground>
          </View>

          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <Text style={[Styles.subText7, {marginBottom: 10}]}>PHOTOS</Text>
            <Text
              style={[
                Styles.subText7,
                {marginBottom: 10, color: Color.golden},
              ]}>
              ADD PHOTOS
            </Text>
          </View>

          <View style={{backgroundColor: Color.darkgray}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  backgroundColor: Color.primaryColor,
                  height: 150,
                  width: '45%',
                  margin: 10,
                }}>
                <Image
                  source={images[imagesIndex]}
                  style={{height: 150, width: '100%'}}
                />
              </View>
              <View
                style={{
                  backgroundColor: Color.primaryColor,
                  height: 150,
                  width: '45%',
                  margin: 10,
                }}>
                <Image
                  source={images[imagesIndex + 1]}
                  style={{height: 150, width: '100%'}}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() =>
              setImagesIndex(
                imagesIndex + 2 >= images.length ? 0 : imagesIndex + 2,
              )
            }>
            <View style={{alignItems: 'center', margin: 20}}>
              <Icon1 name="plussquare" color={Color.darkGolden} size={40} />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={[Styles.subText7]}>EMPLOYEES</Text>
            {/* <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text> */}
          </View>
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              margin: 10,
              marginTop: 20,
              alignItems: 'center',
              backgroundColor: Color.darkgray,
              opacity: 0.6,
              borderRadius: 10,
              color: Color.whiteColor,
              flexDirection: 'row',
            }}>
            <Icon3 name="search" color={Color.whiteColor} size={20} />
            <TextInput
              placeholder="Search Employee"
              placeholderTextColor={Color.whiteColor}
              style={{color: Color.whiteColor, marginLeft: 20}}
              // value={searchValue}
              onChangeText={value => searchEmp(value)}></TextInput>
          </View>

          <FlatList
            data={[getEmpData[empIndex]]}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          {/* <View
            style={{
              flexDirection: 'row',
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}> */}
          <TouchableOpacity
            onPress={() =>
              setEmpIndex(empIndex + 3 >= getEmpData.length ? 0 : empIndex + 3)
            }>
            <View style={{alignItems: 'center', margin: 20}}>
              <Icon1 name="plussquare" color={Color.darkGolden} size={40} />
            </View>
          </TouchableOpacity>
          {/* <Text style={[Styles.subText7, {color: Color.golden}]}>SAVE</Text>
          </View> */}
        </ScrollView>
      )}
      {showServices && (
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              margin: 5,
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <Text style={[Styles.subText7, {marginBottom: 10}]}>SERVICES</Text>
            <Text
              style={[
                Styles.subText7,
                {marginBottom: 10, color: Color.golden},
              ]}>
              EDIT
            </Text>
          </View>

          {services.map((services, index) => {
            return (
              <View
                style={{
                  backgroundColor: Color.primaryColor,
                  margin: 10,
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View
                    style={{
                      backgroundColor: Color.primaryColor,
                      width: '35%',
                      height: 120,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: Color.golden,
                      // borderLeftColor: Color.golden,
                      // borderBottomColor: Color.golden,
                      borderWidth: 1,
                      padding: 10,
                      marginRight: 20,
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
                  <View
                    style={{
                      backgroundColor: Color.primaryColor,
                      width: '35%',
                      height: 120,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: Color.golden,
                      // borderLeftColor: Color.golden,
                      // borderBottomColor: Color.golden,
                      borderWidth: 1,

                      marginLeft: 20,
                      padding: 10,
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

                  {/* <View
                  style={{
                    backgroundColor: Color.primaryColor,
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                  <Image
                    source={services.image}
                    style={{height: 110, width: 110,borderRadius: 60,borderColor:Color.golden,borderWidth:1,opacity:0.4}}
                  />
                </View> */}
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
