import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../styles/Styles';
import Color from '../../utils/Colors.json';
import Down from 'react-native-vector-icons/Entypo';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';
import {logout} from '../../actions/auth';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import Footer from '../components/Footer';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const DaysAndTime = props => {

  const [date, setDate] = useState(new Date(1598051730000));
  const [date1, setDate2] = useState(new Date(1598051730000));

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [from, setFrom] = useState(false);
  const [to, setTo] = useState(false);


  const onChange = (event, selectedDate) => {
    
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
    
    console.log(currentDate, index);
    let day = daysDataInOrderOther[index].day;
    let from1 = daysDataInOrderOther[index].from;
    let to1 = daysDataInOrderOther[index].to;
    console.log(day, from1, to1);
    if(from){
      if(from1){
        daysDataInOrderOther[index]= {day:day,from:currentDate,to:""}

      } 
      if(!from1&&to1){
        daysDataInOrderOther[index]= {day:day,from:currentDate,to:to1}

      }
      if(from1&&to1){
        daysDataInOrderOther[index]= {day:day,from:currentDate,to:to1}
      }
      if(!from1&&!to1){
        daysDataInOrderOther[index]= {day:day,from:currentDate,to:""}

      }
    }

    if(to){
      if(to1){
        daysDataInOrderOther[index]= {day:day,from:"",to:currentDate}

      } 
      if(from1&&to1){
        daysDataInOrderOther[index]= {day:day,from:from1,to:currentDate}
      }
      if(from1&&!to1){
        daysDataInOrderOther[index]= {day:day,from:from1,to:currentDate}

      }
      if(!from1&&!to1){
        daysDataInOrderOther[index]= {day:day,from:"",to:currentDate}

      }
    }
    setDaysDataInOrderOther(prev=>([...daysDataInOrderOther]))
    console.log(daysDataInOrderOther);
    
    setFrom(false);
    setTo(false);
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = (index) => {
    showMode('time');
    setIndex(index)
  };
  const [daysData, setDaysData] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]);
  const [daysDataInOrder, setDaysDataInOrder] = useState([]);
  const [daysDataInOrderOther, setDaysDataInOrderOther] = useState([]);


  useEffect(() => {
    const {fromDay, toDay} = props.route.params.data;
    console.log(fromDay, toDay);
    const fromDayIndex = daysData.indexOf(fromDay);
    const toDayIndex = daysData.indexOf(toDay);
    console.log(
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      fromDayIndex, toDayIndex, daysData.length-1
    );
    let endIndex=0;
    if (fromDayIndex == toDayIndex) {
      endIndex = toDayIndex - 1;
    } else if(toDayIndex==daysData.length-1){
      endIndex = toDayIndex;
      console.log("@@@@@$%%%%%%%%%%in it",endIndex);

    }
    else {
      endIndex = toDayIndex + 1;
    }
    let val;
    if(fromDayIndex>toDayIndex){
      val=Math.abs(fromDayIndex-toDayIndex);
      val = val+1
    } else{
      val= fromDayIndex-toDayIndex;
    }

    if(fromDayIndex==toDayIndex){
      val=7;
    }
    

    let i = 0;

    for (i = fromDayIndex; i != endIndex; i++) {
        
          daysDataInOrder.push(daysData[i])
          setDaysDataInOrder(prevMovies => ([...daysDataInOrder]))
  
          daysDataInOrderOther.push({'day':daysData[i],'from':"",'to':""})
          setDaysDataInOrderOther(daysDataInOrderOther)
        console.log(daysDataInOrder.length);
        if (i == daysData.length-1) {
          i = -1;
        }
      }
      if (fromDayIndex == toDayIndex || endIndex == 6) {
        console.log(daysData[i]);
  
        console.log("aa"),
        daysDataInOrder.push(daysData[i])
        setDaysDataInOrder(prevMovies => ([...daysDataInOrder]))
        
        daysDataInOrderOther.push({'day':daysData[i],'from':"",'to':""})
        setDaysDataInOrderOther(daysDataInOrderOther)
      } 
    

    console.log("aaa",daysDataInOrder);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View style={{margin: 20}}>
        <Text style={{color: Color.golden, fontWeight: 'bold', fontSize: 20}}>
          {item.day}
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>{showTimepicker(index),setFrom(true)}} style={{width:'40%',padding:10,justifyContent:'space-between',margin:10,backgroundColor:Color.whiteColor,borderRadius:2,borderColor:Color.golden,borderWidth:1}}>
            <Text numberOfLines={1} style={{alignContent:'center'}}>{item.from?item.from+" ":"From"}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{showTimepicker(index),setTo(true)}} style={{width:'40%',padding:10,justifyContent:'space-between',margin:10,backgroundColor:Color.whiteColor,borderRadius:2,borderColor:Color.golden,borderWidth:1}}>
            <Text numberOfLines={1}>{item.to?item.to+" ":"To"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={Styles.background1}>
      <Header
        type={2}
        name="SHOP'S INFO"
        subname="Please enter your personal information to Login on the platform."
        heading={true}
        image={false}
        subheading={true}
      />
      <ScrollView>
        <View>
          <FlatList data={daysDataInOrderOther} renderItem={renderItem} />
        </View>
      </ScrollView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
      <Footer data={props.route.params.data} redirect="Images" />
    </View>
  );
};

export default DaysAndTime;
