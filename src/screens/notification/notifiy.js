import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const Notification = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobArea, setJobArea] = useState('');
  const [jobPkg, setJobPkg] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobUrgent, setJobUrgent] = useState(false);
  const [jobExp, setJobExp] = useState('');
  //encryptedPass
  const [encryptedPass, setEncryptedPass] = useState(false);

  const [addPost, setAddPost] = useState(false);
  const [jobPosts, setJobPost] = useState([
    {
      jobTitle: 'Hair Cutting Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      date:'14/Nov/1999'
    },
    {
      jobTitle: 'Shaving Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      date:'16/Jan/1999'
    },
    {
      jobTitle: 'Beard Making Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        date:'30/June/1999'
    },
  ]);
  const [jobPostsCopy, setJobPostsCopy] = useState(jobPosts);

  const searchTitle = value => {
    console.log(value.length);
    if (value.length > 0) {
      const filteredPosts = jobPostsCopy.filter(post => {
        let postLowerCase = post.jobTitle.toLowerCase();
        let searchTermLowerCase = value.toLowerCase();

        return postLowerCase.indexOf(searchTermLowerCase) > -1;
      });
      setJobPost(filteredPosts);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: '#161616',
          borderColor: Color.darkgray,
          borderWidth: 2,
          margin: 20,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: Color.golden,
            fontSize: 18,
            margin: 20,
            fontWeight: 'bold',
          }}>
          {item.jobTitle}
        </Text>
        <Text
          style={{
            color: Color.whiteColor,
            fontSize: 15,
            marginLeft: 20,
            marginRight: 20,
          }}>
          {item.jobDescription}
        </Text>

        {/* <View
          style={{
            width: '90%',
            borderColor: Color.whiteColor,
            borderWidth: 1,
            margin: 20,
          }}></View> */}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 14,
            marginRight: 26,
            marginBottom: 20,
            alignItems: 'center',
          }}>
          
          <Text
            style={{
              color: Color.golden,
              fontSize: 15,
              textAlign: 'right',
              flex: 1,
              marginLeft: 17,
            //   marginRight: 20,
            marginTop:10,
              fontWeight: 'bold',
            }}>
            {item.date}
          </Text>
        </View>
        
      </View>
    );
  };
  return (
    <View style={Styles.background1}>
      <Text style={Styles.headerText}>NOTIFICATIONS</Text>
      
      
      <Text style={Styles.subText4}> New</Text>
      <FlatList
        data={jobPosts}
        renderItem={renderItem}
        style={{height:500}}></FlatList>

    <Text style={[Styles.subText4]}> Older Notifications</Text>
        <FlatList
            data={jobPosts}
            renderItem={renderItem1}
            style={{marginBottom: 70}}></FlatList>

      </View>
  );
};

export default Notification;
