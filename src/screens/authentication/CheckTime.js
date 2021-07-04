// import React, {useState} from 'react';
// import {View, Button, Platform, TouchableOpacity, Text} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export const CheckTime = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//       console.log(selectedDate)
//       const myDate = new Date(selectedDate)
//       console.log(myDate.getHours())
//       console.log(myDate.getMinutes())
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   const onSubmit = () => {
//       console.log(date)
//   }

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={new Date()}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//       <TouchableOpacity onPress={()=>onSubmit()}>
//           <Text>Submit</Text>
//       </TouchableOpacity>
//     </View>

//   );
// };



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
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');







export const CheckTime = () => {
  const dispatch = useDispatch()
  const myServices = useSelector(state => state.auth.services)
  const [services, setServices] = useState([])

  const myData = [
    {
      id:1,
      title:'MyName',
      is_checked:false
    },
    {
      id:2,
      title:'MyCode',
      is_checked:false
    },
    {
      id:3,
      title:'MyHair',
      is_checked:false
    }
  ]

 

  useEffect( async() =>{
    const res  = await dispatch(get_services())
    myServices && setServices(res.data)


  },[])

  const changeStatus = (id) => {
    var myNewService = [...services]
    myNewService.map(s => {
      if(s._id == id){
        s.is_checked = !s.is_checked
      }
    })
    setServices(myNewService)

    // console.log(services,'UPDATED')
    // var myNewObj = [...services]
    // myNewObj.map(s => {
    //   if(s.id == id){
    //     s.is_checked = !s.is_checked
    //   }
    // })


    // setServices(myNewObj)

    console.log(services,'SER')
    
  }



  return (
    <View>
      {
        services && services.map(s => (
          <>
            <Checkbox
              key={s.id}
              status={s.is_checked == true ? 'checked' : 'unchecked'}
              onPress={()=>changeStatus(s._id)}
            />

          <Text>{s.title}</Text>
          </>
        ))

        // services.map(s => (
        //   <>
        //   <Checkbox
        //   key={s.id}
        //     status={s.is_checked == true ? 'checked' : 'unchecked'}
        //     onPress={()=>changeStatus(s.id)}
        //   />
        //   <Text>{s.title}</Text>
        //   </>
        // ))
      }
    </View>
  )
}