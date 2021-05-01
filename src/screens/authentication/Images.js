import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

import RadioForm from 'react-native-simple-radio-button';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

import Header from '../components/Header';
import Footer from '../components/Footer';

const Images = ({navigation}) => {
    const [shopImages,setShopImages] = useState([])

    const selectImage = () => {
        var newArr = []
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            console.log(images);
            images.map(s => {
                newArr.push(s.path)
            })
        setShopImages(newArr)

        });
    }

    const renderItem = ({item}) =>{
        return(
            <View style={{flex:1,alignItems:'center'}}>
                <Text>{item}</Text>
                <Image source={{uri: item}} style={{height:200, width:'47%'}}/>
            </View>
        );
    }

    return (
        <View style={Styles.background}>
      <Header name="SELECT IMAGES" type={1} heading={true} image={false} subheading= {false}/>
            
            <View style={{flex:1}}>
                {
                    !shopImages.length > 0 ? (
                        <View style={{display:'flex',alignItems:'center', marginTop:20}}>
                            <TouchableOpacity onPress={() =>selectImage()} style={{borderColor:Color.golden, borderWidth:1, borderRadius:25, padding:20}}>
                                <Icon1 name="add-a-photo" color={'#d3d3d3'} size={200}/>
                                <Text style={{color:'white', textAlign:'center', fontSize:20}}>ADD IMAGES</Text>
                            </TouchableOpacity>
                        </View>
                    ): null
                }
                {
                    shopImages.length > 0 ? (
                        <FlatList data={shopImages} renderItem={renderItem} numColumns={2} />
                       
                    ):null
                }
            </View>
            <Footer redirect="Payment" />

        </View>
    )
}

export default Images