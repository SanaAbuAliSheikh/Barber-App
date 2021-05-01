import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';

import Color from '../../utils/Colors.json';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import Carousel from 'react-native-banner-carousel';
const {width, height} = Dimensions.get('window');
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

import Header from '../components/Header';


const Plan = ({navigation}) => {
    const Data = [
        {
            id:1,
            price:'29.00$',
            packageName:'GOLDEN MEMBER',
            planHeading:'IDEALLY FOR SMALL BUSINESSES',
            planDetails:'You can add 1 shop by selecting Gold package',
            serviceHeading:'UNLIMITED SERVICES & EMPLOYEES',
            serviceDetails:'You can add Unlimited Packages and Employees',
            packageHeading:'PACKAGES FOR CUSTOMER',
            packageDetails:'You can create upto 2 packages for your customers',
            allPackage:false

        },
        {
            id:2,
            price:'39.00$',
            packageName:'PREMIUM MEMBER',
            planHeading:'2 SHOP',
            planDetails:'You can add 2 shop by selecting package',
            serviceHeading:'UNLIMITED SERVICES & EMPLOYEES',
            serviceDetails:'You can add Unlimited Packages and Employees',
            packageHeading:'PACKAGES FOR CUSTOMER',
            packageDetails:'You can create upto 2 packages for your customers',
            allPackage:true
        },
    ]
    const _carousel = useRef(null);
    const [pageIndex, setPageIndex] = useState(0)
    const renderPage = (val, index) => {
        return (
               <View style={{height:height - 100, marginTop:20}}>
                    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'white', borderColor:'white', borderWidth:1, margin:20, borderRadius:10}}>
                        <View style={{margin:10}}>
                            <Text style={{color:Color.golden, fontWeight:'bold', fontSize:20, textAlign:'center'}}>{val.price}</Text>
                            <Text style={{color:'black', fontWeight:'bold', marginTop:10, fontSize:20}}>{val.packageName}</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
                                <Icon2 name="check" color={'green'} size={20}/>
                                <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>{val.planHeading}</Text>
                            </View>
                            <Text style={{color:'black', textAlign:'center'}}>{val.planDetails}</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
                                <Icon2 name="check" color={'green'} size={20}/>
                                <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>{val.serviceHeading}</Text>
                            </View>
                            <Text style={{color:'black', textAlign:'center'}}>{val.serviceDetails}</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
                                {val.allPackage ? <Icon2 name="check" color={'green'} size={20}/> : <Icon2 name="cross" color={'red'} size={20}/>} 
                                <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>{val.packageHeading}</Text>
                            </View>
                            <Text style={{color:'black', textAlign:'center'}}>{val.packageDetails}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Shop Info')} style={{borderColor:Color.golden, borderWidth:2, padding:10, margin:10, borderRadius:25, marginBottom:20}}>
                            <Text style={{fontWeight:'bold'}}>BECOME {val.packageName}</Text>
                        </TouchableOpacity>
                    </View>
               </View>
        );
    }

    const changePage = (index) => {
        console.log(index)
        setPageIndex(index)
       
    }

    const nextSlide = async() => {
        _carousel.current.gotoNextPage()
        console.log('PAGE INDEX', pageIndex)
    }

    return (
        <View style={Styles.background}>
      <Header name="SELECT MONTHLY PLAN" type={1} heading={true} image={false} subheading= {false}/>
            
                <Carousel
                    ref={_carousel}
                    autoplay={false}
                    index={0}
                    pageSize={BannerWidth}
                    pageIndicatorStyle={{marginBottom:120, backgroundColor:Color.golden}}
                    activePageIndicatorStyle={{backgroundColor:'white'}}
                    onPageChanged={changePage}
                >
                    {Data.map((val, index) => renderPage(val, index))}
                </Carousel>
        </View>
    )
}

export default Plan