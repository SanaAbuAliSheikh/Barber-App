import {StyleSheet} from 'react-native';

import Color from '../utils/Colors.json';
import Fonts from '../utils/Fonts.json';


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
  topHeaderText: {
    color: 'white',
    fontSize: Fonts.fontSizeHeading,
    fontFamily: Fonts.fontFamilyHeading,
    fontWeight:'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  headerText: {
    color: 'white',
    fontSize: Fonts.fontSizeHeading,
    fontFamily:Fonts.fontFamilyHeading,
    textAlign: 'left',
    marginTop: 10,
    fontWeight:'bold'
  },
  subText: {
    color: 'white',
    fontSize: Fonts.fontSizeSubHeading,
    textAlign: 'center',
    marginTop: 10,
    fontFamily:Fonts.fontFamilySubHeading
    // fontWeight:'bold'
  },
  subText1: {
    color: Color.whiteColor,
    fontSize: Fonts.fontSizeButtons,
    textAlign: 'center',
    margin: 10,
    fontFamily:Fonts.fontFamilyButtons
    // textDecorationLine:'underline'
  },

  subText2: {
    color: Color.whiteColor,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    // textDecorationLine:'underline'
  },
  subText3: {
    color: Color.whiteColor,
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 15,
    // textDecorationLine:'underline'
  },
  subText4: {
    color: Color.whiteColor,
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 15,
    // textDecorationLine:'underline'
  },
  subText5: {
    color: Color.whiteColor,
    fontSize: 18,
    textAlign: 'center',
    // textDecorationLine:'underline'
  },
  TextInputStyle: {
    color: Color.whiteColor,
    flex: 1,
    borderTopColor: 'transparent',
    borderBottomColor: Color.whiteColor,
    borderColor: Color.primaryColor,
    // borderRadius:30,
    borderWidth: 1,
    marginLeft: 20,
    paddingLeft: 20,
    marginRight: 20,
    fontFamily:Fonts.fontFamilySubHeading,
    fontSize:Fonts.fontSizeSubHeading,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default Styles;
