import React, {useState} from 'react';
import {View, Text, FlatList, Dimensions, ImageBackground} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Styles from '../../styles/Styles';
import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Post = () => {
  const [searchValue,setSearchValue] = useState('');
  const [jobPosts, setJobPost] = useState([
    {
      jobTitle: 'Hair Cutting Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      jobArea: 'Clifton Block 8',
      jobPackage: '250 $ - 300 $',
      urgentRequired: true,
      type: 'Full Time',
      exp:'2 - 3 years'
    },
    {
      jobTitle: 'Shaving Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      jobArea: 'Clifton Block 10',
      jobPackage: '55 $ - 60 $',
      urgentRequired: true,
      type: 'Full Time',
      exp:'2 - 3 years'
    },
    {
      jobTitle: 'Beard Making Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      jobArea: 'Clifton Block 8',
      jobPackage: '500 $ - 800 $',
      urgentRequired: false,
      type: 'Remote',
      exp:'1 - 2 years'

    },
  ]);
  const [jobPostsCopy, setJobPostsCopy] = useState(jobPosts);


  const searchTitle = (value) =>{
    console.log(value.length);
    if(value.length>0){
      const filteredPosts = jobPostsCopy.filter(post => {
        let postLowerCase = post.jobTitle.toLowerCase();
        let searchTermLowerCase = value.toLowerCase();
      
        return postLowerCase.indexOf(searchTermLowerCase) > -1;
      });
      setJobPost(filteredPosts)
    } 
    
  };


  const renderItem = ({item, index}) => {
    return(
      <View key={index} style={{backgroundColor:Color.darkgray, opacity:0.7,margin:20,borderRadius:10}}>
        <Text style={{color:Color.golden,fontSize:18,margin:20,fontWeight:'bold'}}>{item.jobTitle}</Text>
        <Text style={{color:Color.whiteColor,fontSize:15,marginLeft:20,marginRight:20}}>{item.jobDescription}</Text>
        {/* <View style={{width:'90%',borderColor:Color.whiteColor,borderWidth:1,margin:20}}></View> */}
        
        <View style={{flexDirection:'row',margin:20,marginBottom:20,alignItems:'center'}}>
          <Icon2 name="dollar-sign" color={Color.golden} size={25} />
          <Text style={{color:Color.whiteColor,fontSize:15,marginLeft:20,marginRight:20}}>{item.jobPackage}</Text>
        </View>
        <View style={{flexDirection:'row',marginLeft:14,marginRight:26,alignItems:'center'}}>
          <Icon1 name="location-sharp" color={Color.golden} size={23} />
          <Text style={{color:Color.whiteColor,fontSize:15,marginLeft:17,marginRight:20}}>{item.jobArea}</Text>
          <Text style={{color:Color.golden,fontSize:15,textAlign:'right',flex:1,marginLeft:17,marginRight:20,fontWeight:'bold'}}>{item.type}</Text>
        </View>
        <View style={{width:'90%',borderColor:Color.whiteColor,borderWidth:1,margin:20}}></View>
        <View style={{flexDirection:'row',marginLeft:20,marginRight:20,marginBottom:20,alignItems:'center'}}>
          <Icon3 name="briefcase" color={Color.golden} size={23} />
          <Text style={{color:Color.whiteColor,fontSize:15,marginLeft:17,marginRight:20}}>{item.exp}</Text>
          <Text style={{color:'#800000',fontSize:17,marginLeft:17,textAlign:'right',flex:1,marginRight:20,fontWeight:'bold'}}>{item.urgentRequired&&"Urgent Required"}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={Styles.background1}>
      <ImageBackground
        source={require('../../assets/images/orderBooking/odr.png')}
        style={{width: width, height: height}}>
      <Text style={Styles.headerText}>BOOK - KINGS JOBS</Text>
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
        <Icon name="search" color={Color.whiteColor} size={20} />
        <TextInput
          placeholder="Search job"
          placeholderTextColor={Color.whiteColor}
          style={{color: Color.whiteColor, marginLeft: 20}}
          // value={searchValue}
          onChangeText={value=>searchTitle(value)}
          ></TextInput>
      </View>
      <Text style={Styles.subText4}>  Job Post</Text>
      <FlatList data={jobPosts} renderItem={renderItem} style={{marginBottom:70}}></FlatList>
      </ImageBackground>
    </View>
  );
};

export default Post;
