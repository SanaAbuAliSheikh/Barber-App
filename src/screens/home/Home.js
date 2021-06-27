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

import {get_shop, logout} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const {width, height} = Dimensions.get('window');

const Home = (props) => {
  const [showInfo, setShowInfo] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false)
  const [images, setImages] = useState(props.shopDetails?props.shopDetails.images:[])
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

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => Color.darkGolden, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Sales"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: Color.darkGolden,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => Color.whiteColor,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  // const [getEmpData, setGetEmpData] = useState([
  //   {
  //     name: 'John Abraham',
  //     expertise: 'Hair Cutting',
  //     availability: 'Mon - Fri',
  //     timings: '1:00 am - 5:00 pm',
  //   },
  //   {
  //     name: 'Arijit Singh',
  //     expertise: 'Beard',
  //     availability: 'Mon - Fri',
  //     timings: '11:00 am - 9:00 pm',
  //   },
  //   {
  //     name: 'Ranveer Singh',
  //     expertise: 'Hair Cutting',
  //     availability: 'Mon - Sat',
  //     timings: '9:00 am - 5:00 pm',
  //   },
  // ]);
  const [getEmpData, setGetEmpData] = useState(props.shopDetails?props.shopDetails.employees:[]);
  const [getEmpDataCopy, setGetEmpDataCopy] = useState(getEmpData);
  const [shop, setShop] = useState('');

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
          {/* <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text> */}
        </View>
        {props.shopDetails&&props.shopDetails.employees&&(
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
              <Text style={Styles.subText7}>{props.shopDetails&&props.shopDetails.employees[empIndex].name}</Text>
              <Text
                style={[
                  Styles.subText9,
                  {marginTop: 10, color: Color.greyColor},
                ]}>
                Expertise : {props.shopDetails&&props.shopDetails.employees[empIndex].type}
              </Text>
              <Text
                style={[
                  Styles.subText9,
                  {marginTop: 10, color: Color.greyColor},
                ]}>
                Availability : Mon - Sat
              </Text>
              <Text
                style={[
                  Styles.subText9,
                  {marginTop: 10, color: Color.greyColor},
                ]}>
                Shift Timings : 9:00am - 6:00pm
              </Text>
            </View>
          </View>
        </View>
        )}
        {props.shopDetails&&props.shopDetails.employees[empIndex + 1] && (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 20,
                justifyContent: 'flex-end',
              }}>
              {/* <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text> */}
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
                    {props.shopDetails&&props.shopDetails.employees[empIndex + 1].name}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Expertise : {props.shopDetails&&props.shopDetails.employees[empIndex + 1].type}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Availability : Mon - Sat
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Shift Timings : 9:00am to 6:00pm
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* {props.shopDetails&&props.shopDetails.employees[empIndex + 2] && (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 20,
                justifyContent: 'flex-end',
              }}>
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
                    {props.shopDetails&&props.shopDetails.employees[empIndex + 2].name}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Expertise : {props.shopDetails&&props.shopDetails.employees[empIndex + 2].expertise}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Availability : {props.shopDetails&&props.shopDetails.employees[empIndex + 2].availability}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {marginTop: 10, color: Color.greyColor},
                    ]}>
                    Shift Timings : {props.shopDetails&&props.shopDetails.employees[empIndex + 2].timings}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )} */}
      </View>
    );
  };

  useEffect(async()=>{
    const shopId = await AsyncStorage.getItem('shop_id');
    await props.get_shop(shopId)
    
    await console.log('shop details',props.shopDetails);

  },[])
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
            }}>
              <Image source={{uri:props.shopDetails&&props.shopDetails.owner&&props.shopDetails.owner.image}} style={{width: 80,
              height: 80,}}/>
            </View>
        </View>
        <View style={{marginTop: 10, marginBottom: 20}}>
          {/* <Text style={Styles.subText3}>Welcome</Text> */}
          <Text style={[Styles.subText8, {fontWeight: 'bold'}]}>
            {props.shopDetails && props.shopDetails.title}
          </Text>
        </View>

        <View style={{marginTop: 10, marginBottom: 20, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setShowInfo(true), setShowServices(false), setShowAppointment(false);
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
              Shop Info
            </Text>
          </TouchableOpacity>
          {/* <View
            style={{
              flexDirection: 'row',
              marginLeft: width * 0.22,
              marginRight: width * 0.12,
              marginBottom: -5,
            }}>
              {props.shopDetails&&[1,2,3,4,5].map((item,index)=>{
                return(
                  <Icon name={props.shopDetails.averageRating<index+1?"star-outlined":"star"} color="#F2AA4CFF" size={20} />
                )
              })}
            
          </View> */}
          <View style={{margin:10}}></View>
          <TouchableOpacity onPress={()=>{setShowAppointment(true),setShowInfo(false),setShowServices(false)}}>
          <Text
              style={[
                Styles.subText6,
                {
                  borderBottomColor: showAppointment ? Color.golden : Color.whiteColor,
                  borderTopColor: Color.darkgray,
                  borderLeftColor: Color.darkgray,
                  borderRightColor: Color.darkgray,
                  color: showAppointment ? Color.golden : Color.whiteColor,
                  borderWidth: showAppointment ? 2 : 0,
                },
              ]}>
              Appointments
            </Text>
          </TouchableOpacity>
          <View style={{margin:10}}></View>
          <TouchableOpacity
            onPress={() => {
              setShowServices(true), setShowInfo(false), setShowAppointment(false)
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
              Shop Services
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {showInfo && 
        (props.shopDetails&&props.shopDetails.images&&props.shopDetails.images?
        <ScrollView>
          
            <>
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
                <TouchableOpacity onPress={()=>props.navigation.navigate('Shop Info Dup')}>
                <Text
                  style={[
                    Styles.subText7,
                    {marginBottom: 10, color: Color.golden},
                  ]}>
                  EDIT
                </Text>
                </TouchableOpacity>
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
                    {props.shopDetails.title}
                  </Text>
                  <Text
                    style={[
                      Styles.subText9,
                      {paddingLeft: 20, paddingRight: 10, width: '50%'},
                    ]}>
                    {props.shopDetails.address}
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
                    {props.shopDetails.from} - {props.shopDetails.to}
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
                <TouchableOpacity onPress={()=>props.navigation.navigate('Images Dup')}>
                <Text
                  style={[
                    Styles.subText7,
                    {marginBottom: 10, color: Color.golden},
                  ]}>
                  ADD PHOTOS
                </Text>
                </TouchableOpacity>
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
                      source={{uri:props.shopDetails&&props.shopDetails.images[imagesIndex]}}
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
                      source={{uri:props.shopDetails&&props.shopDetails.images[imagesIndex + 1]}}
                      style={{height: 150, width: '100%'}}
                    />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  setImagesIndex(
                    imagesIndex + 2 >= props.shopDetails.images.length ? 0 : imagesIndex + 2,
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
                <TouchableOpacity onPress={()=>props.navigation.navigate('Employee Info Dup')}>
                <Text style={[Styles.subText7, {color: Color.golden}]}>EDIT</Text></TouchableOpacity>
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
              {
               props.shopDetails&&props.shopDetails.employees.length>0&& 
               <FlatList
                data={[props.shopDetails&&props.shopDetails.employees[empIndex]]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
              }
              

              
              <TouchableOpacity
                onPress={() =>
                  { props.shopDetails&&
                   ( empIndex + 2 >= props.shopDetails.employees.length ? setEmpIndex(0) : setEmpIndex(empIndex + 2)
                )}}>
                <View style={{alignItems: 'center', margin: 20}}>
                  <Icon1 name="plussquare" color={Color.darkGolden} size={40} />
                </View>
              </TouchableOpacity>
            
            </>
          
        </ScrollView>
        :<View style={{display:'flex',alignItems:'center',justifyContent:'center'}}><ActivityIndicator size="small" color={Color.golden}></ActivityIndicator></View>
      )
      }


      {
        showAppointment && (
          <ScrollView>
            <View style={{margin:5, marginTop:30, justifyContent:'space-between'}}>
              <Text style={[Styles.subText7,{marginBottom:10}]}>APPOINTMENTS</Text>
            </View>
            <View style={{marginLeft:30}}>
            <View style={{marginTop:20}}>
              <View>
                <View>
                  <Text style={{color:Color.greyColor}}>Total Earnings</Text>
                </View>
              <Text style={{color:Color.lightGolden1, fontSize:30}}>$200</Text>
              </View>
              <View>
                <View style={{flexDirection:'row', marginTop:20}}>
                  <Text style={{color:Color.greyColor}}>Total Appointment: </Text>
                  <Text style={{color:Color.whiteColor}}>140</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop:20}}>
              <LineChart
                data={data}
                width={width}
                height={220}
                chartConfig={chartConfig}
              />
            </View>
            <View style={{marginTop:20}}>
              <Text style={{color:Color.whiteColor, fontWeight:'bold', fontSize:16}}>Upcoming Appointments</Text>
              <View style={{marginTop:20}}>
                <Text style={{color:Color.lightGolden1, fontSize:30}}>28 Booked</Text>
                <View style={{flexDirection:'row', marginTop:5}}>
                  <Text style={{color:Color.greyColor}}>Confirmed Appointments: </Text>
                  <Text style={{color:Color.whiteColor}}>27</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:5, marginBottom:5}}>
                  <Text style={{color:Color.greyColor}}>Cancelled Appointments: </Text>
                  <Text style={{color:Color.whiteColor}}>1</Text>
                </View>
              </View>
            </View>
            </View>
          </ScrollView>
        )
      }
      
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
            <TouchableOpacity onPress={()=>props.navigation.navigate("Services Dup")}>
            <Text
              style={[
                Styles.subText7,
                {marginBottom: 10, color: Color.golden},
              ]}>
              EDIT
            </Text>
            </TouchableOpacity>
          </View>

          {props.shopDetails&&props.shopDetails.services&&props.shopDetails.services.map((service, index) => {
          return (
            index<(props.shopDetails.services.length/2)&&
            <View
              style={{
                backgroundColor: Color.primaryColor,
                margin: 20,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                
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
                  <Image
                    source={{uri:index==0?props.shopDetails.services[index].images[0]:props.shopDetails.services[(index*2)].images[0]}}
                    style={{width:30,height:30}}
                  />
                  <Text style={[Styles.subText2, {marginTop: 10}]}>
                    {index==0?props.shopDetails.services[index].title:props.shopDetails.services[(index*2)].title}
                  </Text>

                </View>


  

                <View style={{
                  marginLeft:10,
                  marginRight:10
                }}></View>


                {props.shopDetails.services[(index*2)+1]&&(
                  <>
                
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
                  {/* <Icon2
                    name={service.icon}
                    color={Color.whiteColor}
                    size={50}
                  /> */}
                  <Image
                    source={{uri:props.shopDetails.services[(index*2)+1].images[0]}}
                    style={{width:40,height:40}}
                  />
                  <Text style={[Styles.subText2, {marginTop: 10}]}>
                    {props.shopDetails.services[(index*2)+1].title}
                  </Text>
                </View></>)}
              </View>
            </View>
          );
        })}
        </ScrollView>
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  shopDetails: state.auth.shop
});
export default connect(mapStateToProps,{get_shop})(Home);
