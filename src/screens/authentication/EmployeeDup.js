import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import ImagePicker from 'react-native-image-crop-picker';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Icon5 from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
import Footer from '../components/Footer';

import {get_services, register_employee} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');
const EmployeeDup = props => {
  const [showServices, setShowServices] = useState(false);
  const [services, setServices] = useState([]);
  const [setSelection, setSetSelection] = useState(false);
  const [setSelection1, setSetSelection1] = useState(false);
  const [selectAvatarType, setSelectAvatarType] = useState(false);
  const [fileUri, setFileUri] = useState('');
  const [empRec, setEmpRec] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const [expertise, setExpertise] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [toDay, setToDay] = useState('');
  const [fromDayModal, setFromDayModal] = useState(false);
  const [fromDay, setFromDay] = useState('');
  const [daysData, setDaysData] = useState([{name:'Monday'},{name:'Tuesday'},{name:'Wednesday'},{name:'Thursday'},{name:'Friday'},{name:'Saturday'},{name:'Sunday'}]);
  const [toDayModal, setToDayModal] = useState(false);
  const [shopId, setShopId] = useState('');
  const [dry, setDry] = useState(false)
  const [checkVal, setCheckVal] = useState(false)


  const chooseImage = async () => {
    setSelectAvatarType(false);

    let granted = '';
    let granted1 = '';
    //permission
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,

        {
          title: 'Barber App Camera & Storage Permission',
          message:
            'Barber App needs access to your camera ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      granted1 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,

        {
          title: 'Barber App Storage Permission',
          message:
            'Barber App needs access to your storage ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
    }

    if (granted && granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        // cropping: true,
        // multiple:true,
        includeBase64: true,
      }).then(image => {
        console.log(image);

        setFileUri(image);
      });
    }
  };

  const chooseGallery = async () => {
    setSelectAvatarType(false);

    let granted = '';
    let granted1 = '';
    //permission
    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,

        {
          title: 'Barber App Camera & Storage Permission',
          message:
            'Barber App needs access to your camera ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      granted1 = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,

        {
          title: 'Barber App Storage Permission',
          message:
            'Barber App needs access to your storage ' +
            'so you can select avatar',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    } catch (err) {
      console.warn(err);
    }

    if (granted && granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        // cropping: true,
        // multiple:true,
        includeBase64: true,
      }).then(image => {
        console.log(image);
        setFileUri(image);
      });
    }
  };

  

  useEffect(async() => {
    await props.get_services();
    const shopId = await AsyncStorage.getItem('shop_id');
    setShopId(shopId)
    props.services && setServices(props.services.data)

  }, []);

  
  const handleService =( index, val )=> {
    var checkedData = props.services.data[index].is_checked   
    checkedData = !checkedData
    // console.log(checkedData,'CHCE')
    setCheckVal(checkedData)
    props.services.data.map((s,i) => {
      if(i == index){
        s.is_checked = val
      }
      console.log(s.is_checked,'S', i, index)

    })
    // props.services.data[index].is_checked = !props.services.data[index].is_checked;
    setServices(services);
    const ifIdFound = expertise.indexOf(props.services.data[index]._id);
    // console.log(ifIdFound);
    if (ifIdFound == -1) {
      //not found
      console.log('add');
      expertise.push(props.services.data[index]._id);
      setExpertise(expertise);
    } else {
      const isCheck = props.services.data[index].is_checked;
      if (isCheck == false) {
        // console.log(typeof expertise, expertise);
        expertise.splice(ifIdFound, 1);
      }
    }
    console.log(
      'expertiseeeeeeeeeeee',
      typeof props.services.data[index].is_checked,
    );
  };

  const renderItemDays = ({item, index}) => {
    
    return (
      <View
        key={index}
        style={{
          margin: 10,
          
        }}>
          <TouchableOpacity onPress={()=>{fromDayModal&&(setFromDay(item.name),setFromDayModal(false)),toDayModal&&(setToDay(item.name),setToDayModal(false))}}>
            <Text style={{color:Color.whiteColor,borderBottomColor:Color.golden,borderWidth:1,padding:10, borderRadius:2,marginRight:5}}>{item.name}</Text>
        
        </TouchableOpacity>
      </View>
    );
  };

  const validation = () => {
    console.log('VALID');
    if (fileUri == '') {
      setError('Missing Avatar');
      return false;
    }
    if (name == '') {
      setError('Missing Parameter Name');
      return false;
    }
    if (phone == '') {
      setError('Missing Parameter Name');
      return false;
    }
    if (type == '') {
      setError('Missing Parameter Name');
      return false;
    }
    if (expertise.length < 1) {
      setError('Missing Parameter Expertise');
      return false;
    }
    
    return true;
  };

  const validationEmp = () => {
    console.log('VALID');
    if (employees.length<1) {
      setError('Missing Employee Data');
      return false;
    }
    
    return true;
  };

  const addEmployee = () => {
    if(validation()){
      const empData = {
        fileUri: fileUri,
        name: name,
        phone: phone,
        type: type,
        expertise: expertise
      }
      employees.push(empData)
      setEmployees(employees)
      console.log(employees);

      setName('');
      setPhone('');
      setType('');
      setExpertise([]);
      setFileUri('');
    }
  }

  const onSubmit = async() => {
    if(validation()){
      const empData = {
        shop:shopId,
        image: fileUri,
        name: name,
        phone: phone,
        type: type,
        services: expertise
      }
      employees.push(empData)
      setEmployees(employees)
      await props.register_employee(empData)
      props.navigation.navigate('Home')
    }
    else{
      console.log("none");
    }
  }

  return (
    <View style={Styles.background}>
      <Header
        type={2}
        name="EMPLOYEE'S INFO"
        subname="Please enter your personal information to Login on the platform."
        heading={true}
        image={false}
        subheading={true}
      />
      <Text style={{color:'red',marginTop:20,textAlign:'center'}}>{error}</Text>
      <ScrollView>
        <View style={{justifyContent: 'center', marginBottom: 10}}>
          <TouchableOpacity onPress={() => setSelectAvatarType(true)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 5,
                marginRight: 20,
                marginTop: 20,
                marginBottom: 5,
              }}>
              {fileUri != '' ? (
                <Image
                  // source={{uri: fileUri.uri}}
                  source={{uri: `data:${fileUri.mime};base64,${fileUri.data}`}}
                  style={{width: 50, height: 50, borderRadius: 25}}></Image>
              ) : (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon2 name="edit" color={Color.golden} size={20}></Icon2>
                </View>
              )}
              <Text
                style={[
                  Styles1.subText3,
                  {
                    color: fileUri ? Color.whiteColor : Color.lightGrey,
                  },
                ]}>
                Select Employee Avatar
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon
              name="user-edit"
              color={Color.golden}
              size={20}
              style={{marginTop: 22}}></Icon>
            <TextInput
              placeholder="Enter Name"
              placeholderTextColor={name ? Color.whiteColor : Color.lightGrey}
              value={name}
              onChangeText = {(text)=>setName(text)}
              style={[
                Styles1.TextInputStyle,
                {
                  borderBottomColor: name ? Color.whiteColor : Color.lightGrey,
                },
              ]}></TextInput>
          </View>

          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon3
              name="phone-iphone"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon3>
            <TextInput
              placeholder="Enter Phone"
              placeholderTextColor={phone ? Color.whiteColor : Color.lightGrey}
              value={phone}
              onChangeText={
                text => 
                  {
                    var cleaned = ('' + text).replace(/\D/g, '')
                    cleaned = cleaned.substring(0,10).toString().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                    console.log(cleaned);
                    setPhone( prev => cleaned)
                
                }
              }
              keyboardType="numeric"
              maxLength={14}
              
              style={[
                Styles1.TextInputStyle,
                {
                  borderBottomColor: phone ? Color.whiteColor : Color.lightGrey,
                },
              ]}></TextInput>
          </View>

          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon1
              name="folder-special"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon1>
            <TextInput
              placeholder="Enter Type"
              placeholderTextColor={type ? Color.whiteColor : Color.lightGrey}
              value={type}
              onChangeText = {(text)=>setType(text)}
              style={[
                Styles1.TextInputStyle,
                {
                  borderBottomColor: type ? Color.whiteColor : Color.lightGrey,
                },
              ]}></TextInput>
          </View>

          <View style={{flexDirection: 'row', margin: 20}}>
            <Icon2
              name="scissors"
              color={Color.golden}
              size={25}
              style={{marginTop: 22}}></Icon2>
            <TouchableOpacity
              style={{width: '92%'}}
              onPress={() => setShowServices(true)}>
              <TextInput
                placeholder="Select Expertise"
                placeholderTextColor={expertise.length>1?Color.whiteColor:Color.lightGrey}
                editable={false}
                style={Styles1.TextInputStyle}></TextInput>
            </TouchableOpacity>
          </View>

          {/* <View style={{flexDirection: 'row', margin: 20, alignItems:'center'}}>
          <Icon3
              name="schedule-send"
              color={Color.golden}
              size={25}></Icon3>
            <TouchableOpacity
              style={{width: '92%'}}
              onPress={() => {setFromDayModal(true), console.log(fromDayModal)}}>
              <TextInput
                placeholder={fromDay?fromDay:"Select From Days"}
                placeholderTextColor={fromDay?Color.whiteColor:Color.lightGrey}
                editable={false}
                style={Styles1.TextInputStyle}></TextInput>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', margin: 20, alignItems:'center'}}>
            <Icon3
              name="schedule-send"
              color={Color.golden}
              size={25}></Icon3>
            <TouchableOpacity
              style={{width: '92%'}}
              onPress={() => setToDayModal(true)}>
              <TextInput
                placeholder={toDay?toDay:"Select To Days"}
                placeholderTextColor={toDay?Color.whiteColor:Color.lightGrey}
                editable={false}
                style={Styles1.TextInputStyle}></TextInput>
            </TouchableOpacity>
          </View> */}

          {(fromDayModal || toDayModal) && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
                position: 'absolute',
                top:0,
                width:'100%',
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
                  flex:1,
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                  width: '80%',
                }}>
                <Text style={[Styles.headerText1,{marginBottom:10}]}>Select Days</Text>
                <View style={{margin:10, }}>
                  <FlatList
                  data={daysData}
                  renderItem={renderItemDays}
                />
                
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity onPress={() => setFromDayModal(false)}>
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
            </View>
          )}
        </View>
      </ScrollView>

      {/* <Footer redirect="Payment" /> */}
      <View style={{flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center',margin:20}}>
        <TouchableOpacity
          onPress={() => onSubmit()}
          style={{
            display: 'flex',
            width: '30%',
          }}
          >
          <View
            style={{
              borderColor: Color.golden,
              borderWidth: 2,
              borderRadius: 30,
              // marginLeft: 90,
              // marginRight: 50
              alignItems: 'center',
              justifyContent:'center',
              width: 90,
              padding: 10,
            }}>
            <Text style={{color:Color.whiteColor}}>Submit</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => addEmployee()}
          style={{
            display: 'flex',
            width: '78%',
            position: 'relative',
            bottom: 30,
          }}>
          <View
            style={{
              alignSelf: 'flex-end',
              borderColor: Color.golden,
              borderWidth: 2,
              borderRadius: 30,
              marginLeft: 90,
              marginRight: 50,
              marginTop: 40,
              alignItems: 'center',
              width: 90,
              padding: 10,
            }}>
            <Icon2 name="chevron-right" color={'white'} size={20} /> 
            <Text style={{color:Color.whiteColor}}>Next</Text>

          </View>
        
        </TouchableOpacity>
       */}
      </View>

      <Modal visible={showServices} transparent={true}>
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
            <Text style={Styles.headerText1}>Select Expertise</Text>

            {props.services &&
              props.services.data&&props.services.data.map((service, index) => {
                console.log(typeof props.services.data[index].is_checked);
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      marginTop: 15,
                      marginLeft: 15,
                      marginRight: 15,
                      alignItems: 'center',
                    }}>
                    <CheckBox
                      // status={
                      //   props.services.data[index].is_checked == true
                      //     ? 'checked'
                      //     : 'unchecked'
                      // }
                      // onPress={() => handleService(index)}
                      // color={Color.golden}
                      // uncheckedColor="white"

                      value={props.services.data[index].is_checked ? true : false}
                      tintColors={true ? 'red': 'green'}
                      onValueChange={(val)=>{handleService(index,val)}}
                    />
                    <Text style={Styles1.subText5}>{service.title}</Text>
                  </View>
                );
              })}


        
        
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={() => setShowServices(false)}>
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

      <Modal visible={selectAvatarType} transparent={true}>
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
            <Text style={Styles.headerText1}>Select Avatar Type</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <TouchableOpacity onPress={() => chooseImage()}>
                <View style={{flexDirection: 'row'}}>
                  <Icon5
                    name="camera"
                    color={Color.golden}
                    size={22}
                    style={{marginLeft: 10}}></Icon5>
                  <Text style={[Styles1.subText4]}>Launch Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => chooseGallery()}>
                <View style={{flexDirection: 'row'}}>
                  <Icon2
                    name="images"
                    color={Color.golden}
                    size={22}
                    style={{marginLeft: 10}}></Icon2>
                  <Text style={[Styles1.subText4]}>Gallery</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: 20,
              }}>
              <TouchableOpacity onPress={() => setSelectAvatarType(false)}>
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

      {/* </ImageBackground> */}
    </View>
  );
};
const mapStateToProps = state => ({
  services: state.auth.services,
});
export default connect(mapStateToProps, {get_services, register_employee})(
  EmployeeDup,
);
