import {StyleSheet} from 'react-native';

import Color from '../utils/Colors.json';
import Fonts from '../utils/Fonts.json';


const Styles = StyleSheet.create({
  
  headerText: {
    color: Color.whiteColor,
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:10
  },
  topSubText: {
    color:Color.whiteColor,
    fontSize:Fonts.fontSizeSubHeading,
    fontFamily:Fonts.fontFamilySubHeading,
    textAlign:'left',
    marginLeft:20, marginRight:10, marginTop:10

  },
  subText: {
    color:Color.whiteColor,
    fontSize:16,
    textAlign:'center',
    marginTop:10,
    fontSize:Fonts.fontSizeSubHeading,
    fontFamily:Fonts.fontFamilySubHeading

  },
  subText1: {
    color:Color.golden,
    fontSize:Fonts.fontSizeButtons,
    textAlign:'center',
    marginTop:10,
    fontFamily:Fonts.fontFamilySubHeading,
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
