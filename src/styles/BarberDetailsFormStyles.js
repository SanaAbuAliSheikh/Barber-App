import {StyleSheet} from 'react-native';

import Color from '../utils/Colors.json';

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent:'center',/
    backgroundColor: Color.darkgray,

  },
  barberOtherHalf: {
    width: '100%',
    height: 650,
    backgroundColor: Color.primaryColor,

    marginTop: 20,
    borderRadius: 20,
  },
  headerText: {
    color: Color.whiteColor,
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:10
  },
  subText: {
    color:Color.whiteColor,
    fontSize:18,
    textAlign:'center',
    marginTop:10,

  },
  subText1:{
    color:Color.whiteColor,
    fontSize:20,
    textAlign:'center',
    margin:10,
    fontWeight:'bold'
    // textDecorationLine:'underline'
},

subText2:{
  color:Color.whiteColor,
  fontSize:20,
  textAlign:'center',
  fontWeight:'bold'
  // textDecorationLine:'underline'
},
subText3:{
  color:Color.whiteColor,
  fontSize:15,
  textAlign:'center',
  marginLeft:15
  // textDecorationLine:'underline'
},
subText4:{
  color:Color.whiteColor,
  fontSize:16,
  textAlign:'center',
  marginLeft:15
  // textDecorationLine:'underline'
},
  TextInputStyle: {
    color:Color.whiteColor,
      flex:1,
      borderTopColor:"transparent",
    borderBottomColor: Color.whiteColor,
    borderColor:Color.primaryColor,
    // borderRadius:30,
    borderWidth: 1,
    marginLeft: 20,
    paddingLeft:20,
    marginRight: 20,
  },
});

export default Styles;
