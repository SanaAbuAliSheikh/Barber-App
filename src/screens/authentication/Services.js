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
  
} from 'react-native';

import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import Color from '../../utils/Colors.json';
import Styles from '../../styles/Styles';
import { Checkbox } from 'react-native-paper';


import Header from '../components/Header';
import Footer from '../components/Footer';

import {get_services, register_shop} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
const {width, height} = Dimensions.get('window');

const Services = props => {
  const [selection, setSelection] = useState(false);
  const [ownerId, setOwnerId] = useState('');
  const [shopServices, setShopServices] = useState([]);
  const [services1, setServices1] = useState([]);
  const [services, setServices] = useState([])

  const [dryer, setDryer] = useState(false)
  const [cut, setCut] = useState(false)

  // const services = [
  //   {
  //     image: require('../../assets/images/home/photos3.jpg'),
  //     icon: 'hair-dryer-outline',
  //     text: 'Hair Dryer',
  //   },
  //   {
  //     image: require('../../assets/images/home/photos4.jpg'),
  //     icon: 'chair-rolling',
  //     text: 'Beard',
  //   },
  //   {
  //     image: require('../../assets/images/home/photos2.jpg'),
  //     icon: 'scissors-cutting',
  //     text: 'Trimming',
  //   },
  //   {
  //     image: require('../../assets/images/home/photos3.jpg'),
  //     icon: 'hair-dryer-outline',
  //     text: 'Hair 123',
  //   },
  //   {
  //     image: require('../../assets/images/home/photos4.jpg'),
  //     icon: 'chair-rolling',
  //     text: 'Beard 123',
  //   },
  //   {
  //     image: require('../../assets/images/home/photos2.jpg'),
  //     icon: 'scissors-cutting',
  //     text: 'Trimming 123',
  //   },
  // ];
  
  useEffect( async()=>{
    const res = await props.get_services();
    // console.log(
    //   "Props image foundddddddd",props.services.data[0].images
    // );
    const ownerId = await AsyncStorage.getItem('owner_id');

    setOwnerId(ownerId);
    setServices(res.data)

    console.log("propsiiiiiii",props.route.params.data);
    console.log(ownerId);
    console.log(shopServices);
    setServices1(props.services);
 },[]);

 const checkChecked = async() => {
  var result = await services.filter(function(item) {
      return item.is_checked;
  }).map(function(item) {
      return item._id;
  });

   if(result.length > 0){
     submit(result)
   }else{
    Toast.show("Select Services", Toast.LONG)
   }
 }

 const submit = async(result) => {
    const myPlan = await AsyncStorage.getItem('plan_id')
    const {name,email,phone,address,zipCode,country,lat,long,category, type, id, images,daysTimings} = props.route.params.data; 
    console.log( images.length, ownerId, name, category, id , type, address, {location: {"type": "Point", "coordinates": [lat, long]}} , shopServices);
    // console.log(myPlan,shopServices)
    await props.register_shop({ daysTimings:daysTimings, owner:ownerId, title:name, work_type:category, plan:myPlan , shop_type:type, address, location: {"type": "Point", "coordinates": [long, lat]}, images, services:result,country, zip_code:zipCode})
    props.navigation.navigate('Login')
  // console.log(shopServices,'HEHEH')
  //  const {name,email,phone,address,zipCode,country,lat,long,category, type, id, images,dayTimings} = props.route.params.data; 
  //  console.log( images.length, ownerId, name, category, id , type, address, {location: {"type": "Point", "coordinates": [lat, long]}} , shopServices);
    // await props.register_shop({ dayTimings, owner:ownerId, title:name, work_type:category, plan:id , shop_type:type, address, location: {"type": "Point", "coordinates": [long, lat]}, images, services:shopServices,country, zip_code:zipCode})
    // props.navigation.navigate('Login')
    // const no_of_shops = await AsyncStorage.getItem('no_of_shops');
    // console.log(no_of_shops=="5");

    // no_of_shops=="1" ? props.navigation.navigate('SignUp Form') : props.navigation.navigate('Category');
    // let val = JSON.parse(no_of_shops);
    // console.log(no_of_shops==5);
    // AsyncStorage.setItem('no_of_shops',JSON.stringify(val-1));
  }

  const handleService = index => {
    props.services.data[index].is_checked = !props.services.data[index].is_checked;
    setServices1(prev => services1);
    const ifIdFound = shopServices.indexOf(props.services.data[index]._id);
    // console.log(ifIdFound);
    if (ifIdFound == -1) {
      //not found
      console.log('add');
      shopServices.push(props.services.data[index]._id);
      setShopServices(shopServices);
    } else {
      const isCheck = props.services.data[index].is_checked;
      if (isCheck == false) {
        // console.log(typeof shopServices, shopServices);
        shopServices.splice(ifIdFound, 1);
      }
    }
    console.log(
      'expertiseeeeeeeeeeee',
      props.services.data
    );
  };

  const changeStatus = (id) => {
    var myNewService = [...services]
    myNewService.map(s => {
      if(s._id == id){
        s.is_checked = !s.is_checked
      }
    })
    setServices(myNewService)
    console.log(services,'SER')
  }

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
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        {services && services.map((s, index) => {
          return (
            // <View
            //   style={{
            //     backgroundColor: Color.primaryColor,
            //     margin: 20,
            //     display:'flex',
            //     flexDirection:'row'
            //   }}>
            //   <View style={{backgroundColor:'red', flexDirection:'row', flexWrap:'wrap'}}>
            //     <Checkbox
            //     uncheckedColor={Color.darkGolden}
            //     color="white"
            //       key={s.id}
            //       status={s.is_checked == true ? 'checked' : 'unchecked'}
            //       onPress={()=>changeStatus(s._id)}
            //     />
            //     <View
            //       style={{
            //         backgroundColor: Color.primaryColor,
            //         width: '30%',
            //         height: 107,
            //         alignItems: 'center',
            //         justifyContent: 'center',
            //         borderColor: Color.golden,
            //         borderWidth: 1,
            //         padding: 10,
            //         marginRight: 10,
            //         marginLeft: 10,
            //       }}>
            //       {/* <Image
            //         source={{uri:index==0?props.services.data[index].images[0]:props.services.data[(index*2)].images[0]}}
            //         style={{width:30,height:30}}
            //       /> */}
            //       <Text style={[Styles.subText2, {marginTop: 10}]}>
            //         {s.title}
            //       </Text>

            //     </View>


  

            //     <View style={{
            //       marginLeft:10,
            //       marginRight:10
            //     }}></View>


           
            //   </View>
            // </View>
            <View>
              <View style={{display:'flex', flexDirection:'row', marginLeft:12, borderColor:Color.darkGolden, borderWidth:1, margin:10, padding:10, borderRadius:15}}>
                <Text style={{color:Color.whiteColor, marginTop:5, fontSize:16}}>{s.title}</Text>
                <Checkbox
                  uncheckedColor={Color.darkGolden}
                  color="white"
                  key={s.id}
                  status={s.is_checked == true ? 'checked' : 'unchecked'}
                  onPress={()=>changeStatus(s._id)}
                />
              </View>
            </View>
          );
        })}
        </View>
      </ScrollView>
      
      {/* <Footer method={true} redirect="Employee Info" /> */}
      {services&&
      <TouchableOpacity
        onPress={
          ()=>checkChecked()
        }
        style={{
          display: 'flex',
          width: '100%',
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
        </View>
      </TouchableOpacity>
}
    </View>
  );
};
const mapStateToProps = state => ({
  services: state.auth.services
});
export default connect(mapStateToProps, {get_services,register_shop})(Services);
