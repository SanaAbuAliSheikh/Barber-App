import {StyleSheet} from 'react-native';

import Color from '../utils/Colors.json';

const Styles = StyleSheet.create({
  
  headerText: {
    color: Color.whiteColor,
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:10
  },
  subText: {
    color:Color.whiteColor,
    fontSize:16,
    textAlign:'center',
    marginTop:10,

  },
  subText1: {
    color:Color.golden,
    fontSize:17,
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold'

  },
  subText2: {
    color:Color.whiteColor,
    fontSize:22,
    textAlign:'center',
    marginLeft:20

  }
});

export default Styles;
