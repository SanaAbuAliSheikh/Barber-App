import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Styles from '../../styles/Styles';

import Color from '../../utils/Colors.json';
import Icon2 from 'react-native-vector-icons/Entypo';

import Carousel from 'react-native-banner-carousel';
const {width, height} = Dimensions.get('window');
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;


import {get_plans} from '../../actions/auth';
import {connect} from 'react-redux';

import Header from '../components/Header';
import AsyncStorage from '@react-native-community/async-storage';


const Plan = (props) => {
    const {category, type} = props.route.params;
    console.log(category, type);
    // const Data = [
    //     {
    //         id:1,
    //         price:'29.00$',
    //         packageName:'GOLDEN MEMBER',
    //         planHeading:'IDEALLY FOR SMALL BUSINESSES',
    //         planDetails:'You can add 1 shop by selecting Gold package',
    //         serviceHeading:'UNLIMITED SERVICES & EMPLOYEES',
    //         serviceDetails:'You can add Unlimited Packages and Employees',
    //         packageHeading:'PACKAGES FOR CUSTOMER',
    //         packageDetails:'You can create upto 2 packages for your customers',
    //         allPackage:false

    //     },
    //     {
    //         id:2,
    //         price:'39.00$',
    //         packageName:'PREMIUM MEMBER',
    //         planHeading:'2 SHOP',
    //         planDetails:'You can add 2 shop by selecting package',
    //         serviceHeading:'UNLIMITED SERVICES & EMPLOYEES',
    //         serviceDetails:'You can add Unlimited Packages and Employees',
    //         packageHeading:'PACKAGES FOR CUSTOMER',
    //         packageDetails:'You can create upto 2 packages for your customers',
    //         allPackage:true
    //     },
    // ]
    const _carousel = useRef(null);
    const [Data, setData] = useState([]);
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
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Shop Info',{category, type, id: val.id})} style={{borderColor:Color.golden, borderWidth:2, padding:10, margin:10, borderRadius:25, marginBottom:20}}>
                            <Text style={{fontWeight:'bold'}}>BECOME {val.packageName}</Text>
                        </TouchableOpacity>
                    </View>
               </View>
        );
    }

    const renderPage1 = (val, index) => {
        return (
               <View style={{height:height - 100, marginTop:20}}>
                    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'white', borderColor:'white', borderWidth:1, margin:20, borderRadius:10}}>
                        <View style={{margin:10}}>
                            <Text style={{color:Color.golden, fontWeight:'bold', fontSize:20, textAlign:'center'}}>{val.charges}$</Text>
                            <Text style={{color:'black', fontWeight:'bold', marginTop:10, fontSize:20}}>{val.title}</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
                                <Icon2 name="check" color={'green'} size={20}/>
                                <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>{val.no_of_shops} Shops</Text>
                            </View>
                            <Text style={{color:'black', textAlign:'center'}}>You can add {val.no_of_shops} shop by selecting package</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
                                <Icon2 name="check" color={'green'} size={20}/>
                                <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>UNLIMITED SERVICES & EMPLOYEES</Text>
                            </View>
                            <Text style={{color:'black', textAlign:'center'}}>You can add Unlimited Packages and Employees</Text>
                        </View>
                        <View style={{margin:20}}>
                            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
                                {val.allPackage ? <Icon2 name="check" color={'green'} size={20}/> : <Icon2 name="cross" color={'red'} size={20}/>} 
                                <Text style={{color:'black', textAlign:'center', fontWeight:'bold'}}>PACKAGES FOR CUSTOMER</Text>
                            </View>
                            <Text style={{color:'black', textAlign:'center'}}>ou can create upto 2 packages for your customers</Text>
                        </View>
                        <TouchableOpacity onPress={()=>handlePlan(index)} style={{borderColor:Color.golden, borderWidth:2, padding:10, margin:10, borderRadius:25, marginBottom:20}}>
                            <Text style={{fontWeight:'bold'}}>BECOME {val.title}</Text>
                        </TouchableOpacity>
                    </View>
               </View>
        );
    }

    useEffect(async()=>{
        await props.get_plans();
        await props.plans;
        setData(prev => props.plans&&props.plans.data);
        console.log(Data);
    },[]);

    const changePage = (index) => {
        console.log(index)
        setPageIndex(index)
       
    }

    const handlePlan = (index) => {
        AsyncStorage.setItem('no_of_shops',JSON.stringify(props.plans.data[index].no_of_shops));
        AsyncStorage.setItem('plan_id',props.plans.data[index]._id);

        props.navigation.navigate('Shop Info',{category, type, id: props.plans.data[index]._id})
    }

    const nextSlide = async() => {
        _carousel.current.gotoNextPage()
        console.log('PAGE INDEX', pageIndex)
    }

    return (
        <View style={Styles.background}>
      <Header name="SELECT MONTHLY PLAN" type={1} heading={true} image={false} subheading= {false}/>
                {props.plans&&
                <Carousel
                    ref={_carousel}
                    autoplay={false}
                    index={0}
                    pageSize={BannerWidth}
                    pageIndicatorStyle={{marginBottom:120, backgroundColor:Color.golden}}
                    activePageIndicatorStyle={{backgroundColor:'white'}}
                    onPageChanged={changePage}
                >
                    {props.plans&&props.plans.data&&props.plans.data.map((val, index) => renderPage1(val, index))}
                </Carousel>}
        </View>
    )
}
const mapStateToProps = state => ({
    plans: state.auth.plans
  });
export default connect(mapStateToProps, {get_plans})(Plan)