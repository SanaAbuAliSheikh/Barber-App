import React from 'react';
import { StyleSheet } from 'react-native';

import Color from '../utils/Colors.json';

const Styles = StyleSheet.create({
    background: {
        flex:1,
        // justifyContent:'center',
        backgroundColor: Color.primaryColor,
    },
    background1: {
        flex:1,
        backgroundColor: Color.primaryColor,
    },
    mainCategoryImage:{
        width:'100%',
        height:300,
        marginBottom:10,
        marginTop:20,
        // borderRadius:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    barberOtherHalf:{
        width:'43%',
        height:300,
        backgroundColor:Color.primaryColor,
        marginBottom:10,
        marginTop:20,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'

    },
    barberOtherHalf1:{
        width:'89%',
        height:280,
        backgroundColor:Color.primaryColor,
        // position: 'relative',
        margin:10,
        marginBottom:10,
        borderRadius:20,
    },
    mainCategoryImageChanged:{
        width:'100%',
        height:300,
        marginBottom:10,
        marginTop:20,
        marginLeft:-170,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    mainCategoryImageChanged1:{
        width:'57%',
        height:300,
        marginBottom:10,
        marginRight:-200,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    mainCategoryImage1:{
        width:'100%',
        height:300,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        marginBottom:10,
    },
    mainCategorySubHeading:{
        color:Color.whiteColor,
        fontSize:30,
        fontWeight:'bold'
    },
    mainCategorySubHeadingPosition1:{
        position:'absolute',
        top:127,
        left:60,
        color:Color.whiteColor,
        fontSize:30,
        fontWeight:'bold',
    },
    mainCategorySubHeadingPosition2:{
        position:'absolute',
        bottom:67,
        right: 30,
        color:Color.whiteColor,
        fontSize:30,
        fontWeight:'bold',
        marginRight:20
    },
    barberOtherHalf2:{
        width:'45%',
        height:300,
        backgroundColor:Color.primaryColor,
        marginBottom:10,
        borderRadius:30,
        marginLeft:1.5,
        alignItems:'center',
        justifyContent:'center'

    },
    barberOtherHalf3:{
        width:'86%',
        height:280,
        backgroundColor:Color.primaryColor,
        // position: 'relative',
        margin:10,
        marginBottom:10,
        borderRadius:20,
    },
    circle:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:Color.primaryColor,
        position:'absolute',
        top:75,
        left:20,
        justifyContent:'center',
        alignItems:'center'
    },
    circle1:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:Color.primaryColor,
        position:'absolute',
        bottom:6,
        right:20,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:18,

    },
    headerText2:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:18,

    },
    headerText1:{
        color:Color.whiteColor,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',

    },
    subText:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        // marginTop:5,
    },
    subText1:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        margin:15,
        // textDecorationLine:'underline'
    },
    subText2:{
        color:'white',
        fontSize:18,
        textAlign:'center',
        marginLeft:5,
        marginRight:5
    },
    subText3:{
        color:'white',
        fontSize:25,
        textAlign:'center',
        marginLeft:10,
        marginRight:5
    },
    subText4:{
        color:'white',
        fontSize:16,
        textAlign:'left',
        margin:15,
        // textDecorationLine:'underline'
    },
    subText5:{
        color:'white',
        fontSize:16,
        textAlign:'left',
        marginTop:10,
        marginRight:15,
        marginLeft:15,
        marginBottom:10
        // textDecorationLine:'underline'
    },
    subText6:{
        color:'white',
        fontSize:18,
        textAlign:'center',
    },
    subText7:{
        color:'white',
        fontSize:18,
        textAlign:'left',
        fontWeight:'bold',
        marginLeft:20,
        marginRight:20
    },
    subText8:{
        color:'white',
        fontSize:25,
        textAlign:'center',
        marginRight:5
    },
    subText9:{
        color:'white',
        fontSize:14,
        textAlign:'left',
        marginLeft:20,
        marginRight:20
    },
    button:{
        backgroundColor: Color.primaryColor,
        borderColor: Color.golden,
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 90,
        marginRight: 90,
        marginTop: 90,
    }
})
   

export default Styles;