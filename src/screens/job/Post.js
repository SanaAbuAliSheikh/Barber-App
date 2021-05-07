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

const Post = () => {
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
      jobArea: 'Clifton Block 8',
      jobPackage: '250 $ - 300 $',
      urgentRequired: true,
      type: 'Full Time',
      exp: '2 - 3 years',
    },
    {
      jobTitle: 'Shaving Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      jobArea: 'Clifton Block 10',
      jobPackage: '55 $ - 60 $',
      urgentRequired: true,
      type: 'Full Time',
      exp: '2 - 3 years',
    },
    {
      jobTitle: 'Beard Making Job',
      jobDescription:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      jobArea: 'Clifton Block 8',
      jobPackage: '500 $ - 800 $',
      urgentRequired: false,
      type: 'Remote',
      exp: '1 - 2 years',
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
        {/* <View style={{width:'90%',borderColor:Color.whiteColor,borderWidth:1,margin:20}}></View> */}

        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Icon2 name="dollar-sign" color={Color.golden} size={25} />
          <Text
            style={{
              color: Color.whiteColor,
              fontSize: 15,
              marginLeft: 20,
              marginRight: 20,
            }}>
            {item.jobPackage}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 14,
            marginRight: 26,
            alignItems: 'center',
          }}>
          <Icon1 name="location-sharp" color={Color.golden} size={23} />
          <Text
            style={{
              color: Color.whiteColor,
              fontSize: 15,
              marginLeft: 17,
              marginRight: 20,
            }}>
            {item.jobArea}
          </Text>
          <Text
            style={{
              color: Color.golden,
              fontSize: 15,
              textAlign: 'right',
              flex: 1,
              marginLeft: 17,
              marginRight: 20,
              fontWeight: 'bold',
            }}>
            {item.type}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            borderColor: Color.whiteColor,
            borderWidth: 1,
            margin: 20,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Icon3 name="briefcase" color={Color.golden} size={23} />
          <Text
            style={{
              color: Color.whiteColor,
              fontSize: 15,
              marginLeft: 17,
              marginRight: 20,
            }}>
            {item.exp}
          </Text>
          <Text
            style={{
              color: '#800000',
              fontSize: 17,
              marginLeft: 17,
              textAlign: 'right',
              flex: 1,
              marginRight: 20,
              fontWeight: 'bold',
            }}>
            {item.urgentRequired && 'Urgent Required'}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={Styles.background1}>
      <Text style={Styles.headerText}>JOB POSTS</Text>
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
          onChangeText={value => searchTitle(value)}></TextInput>
      </View>
      <TouchableOpacity onPress={() => setAddPost(!addPost)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <Text style={Styles.subText4}> Create Job Post</Text>
          <Icon4 name="post-add" color={Color.golden} size={35} />
        </View>
      </TouchableOpacity>
      <Text style={Styles.subText4}> Job Post</Text>
      <FlatList
        data={jobPosts}
        renderItem={renderItem}
        style={{marginBottom: 70}}></FlatList>

      <Modal visible={addPost} transparent={true}>
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
            <Text style={Styles.headerText1}>ADD JOB POST</Text>

            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row', marginTop: 20,  marginBottom:10, marginLeft: 0, marginRight:0}}>
                <TextInput
                  placeholder="Enter Job Title"
                  placeholderTextColor={Color.whiteColor}
                  value={jobTitle}
                  onChangeText={text => setJobTitle(text)}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>

              <View style={{flexDirection: 'row', margin: 20, marginLeft: 0, marginRight:0}}>
                <TextInput
                  placeholder="Enter Job Desc"
                  placeholderTextColor={Color.whiteColor}
                  placeholderStyle={{
                    fontFamily: 'LibreBaskerville-Regular',
                    color: 'red',
                  }}
                  multiline={true}
                  secureTextEntry={encryptedPass}
                  value={jobDesc}
                  onChangeText={text => setJobDesc(text)}
                  style={Styles1.TextInputStyle}></TextInput>
                
              </View>
              <View style={{flexDirection: 'row', marginTop: 20,  marginBottom:10, marginLeft: 0, marginRight:0}}>
                <TextInput
                  placeholder="Enter Job Area"
                  placeholderTextColor={Color.whiteColor}
                  value={jobArea}
                  onChangeText={text => setJobArea(text)}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20,  marginBottom:10, marginLeft: 0, marginRight:0}}>
                <TextInput
                  placeholder="Enter Job Package"
                  placeholderTextColor={Color.whiteColor}
                  value={jobPkg}
                  onChangeText={text => setJobPkg(text)}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
              <View style={{flexDirection: 'row', marginTop: 20,  marginBottom:10, marginLeft: 0, marginRight:0}}>
                <TextInput
                  placeholder="Enter Job Experience"
                  placeholderTextColor={Color.whiteColor}
                  value={jobExp}
                  onChangeText={text => setJobExp(text)}
                  style={Styles1.TextInputStyle}></TextInput>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: 20,
              }}>
              <TouchableOpacity
                 onPress={() => setAddPost(false)}
                 >
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
    </View>
  );
};

export default Post;
