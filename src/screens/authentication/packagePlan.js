import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

import RadioForm from 'react-native-simple-radio-button';

import Styles from '../../styles/Styles';
import Styles1 from '../../styles/BarberDetailsFormStyles';
import Styles2 from '../../styles/LoginStyles';

import Color from '../../utils/Colors.json';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Zocial';
import Icon2 from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');
class PackagePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: false,
    };
  }

  render() {
    return (
      <View style={Styles.background}>
        <ImageBackground
          source={require('../../assets/images/login/login.png')}
          style={{width: width, height: height}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{width: 80, height: 98}}></Image>
              <Text style={Styles1.headerText}>Package Plan</Text>
              <Text style={Styles2.subText}>
                Please select your payment plan to Sign Up on the platform.
              </Text>
            </View>
          </View>
          <ScrollView>
            <View style={{justifyContent: 'center', marginBottom: 10}}>
              <TouchableOpacity
                onPress={() => this.setState({paymentMethod: true})}>
                <View
                  style={{
                    opacity: 0.6,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10,
                    marginTop: 10,
                    backgroundColor: Color.darkgray,
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="credit-card"
                      color={Color.whiteColor}
                      size={22}
                      style={{marginLeft: 15}}></Icon>
                    <Text
                      style={{
                        color: Color.whiteColor,
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 20,
                        padding: 15,
                        fontWeight: 'bold',
                      }}>
                      Premium $45
                    </Text>
                  </View>

                  <View
                    style={{
                      borderBottomColor: Color.primaryColor,
                      width: 250,
                      borderWidth: 2,
                      marginLeft: 60,
                    }}></View>
                  <Text
                    style={{
                      marginLeft: 60,
                      margin: 10,
                      color: Color.whiteColor,
                      fontSize: 15,
                    }}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    opacity: 0.3,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10,
                    marginTop: 10,
                    backgroundColor: Color.golden,
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="credit-card"
                      color={Color.whiteColor}
                      size={22}
                      style={{marginLeft: 15}}></Icon>
                    <Text
                      style={{
                        color: Color.whiteColor,
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 20,
                        padding: 15,
                        fontWeight: 'bold',
                      }}>
                      Gold
                    </Text>
                    <Text
                      style={{
                        color: Color.whiteColor,
                        marginHorizontal: 120,
                        fontSize: 20,
                        padding: 15,
                        fontWeight: 'bold',
                      }}>
                      $30
                    </Text>
                  </View>

                  <View
                    style={{
                      borderBottomColor: Color.primaryColor,
                      width: 250,
                      borderWidth: 2,
                      marginLeft: 60,
                    }}></View>
                  <Text
                    style={{
                      marginLeft: 60,
                      margin: 10,
                      color: Color.whiteColor,
                      fontSize: 15,
                    }}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    opacity: 0.3,
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10,
                    marginTop: 10,
                    backgroundColor: '#BCBEC0',
                    borderRadius: 15,
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="credit-card"
                      color={Color.whiteColor}
                      size={22}
                      style={{marginLeft: 15}}></Icon>
                    <Text
                      style={{
                        color: Color.whiteColor,
                        marginLeft: 10,
                        marginRight: 10,
                        fontSize: 20,
                        padding: 15,
                        fontWeight: 'bold',
                      }}>
                      Silver $25
                    </Text>
                  </View>

                  <View
                    style={{
                      borderBottomColor: Color.primaryColor,
                      width: 250,
                      borderWidth: 2,
                      marginLeft: 60,
                    }}></View>
                  <Text
                    style={{
                      marginLeft: 60,
                      margin: 10,
                      color: Color.whiteColor,
                      fontSize: 15,
                    }}>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Modallllllllllllllllllllllll */}
          <Modal visible={this.state.paymentMethod} transparent={true}>
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
                  backgroundColor: Color.darkgray,
                  borderColor: Color.golden,
                  borderWidth: 2,
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
                <Text style={Styles.headerText1}>Select Payment Method</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 15,
                  }}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab Menu')}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="paypal"
                        color="#001f6b"
                        size={22}
                        style={{marginLeft: 10}}></Icon>
                      <Text style={Styles1.subText4}>Paypal</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab Menu')}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon1
                        name="stripe"
                        color="#6772e5"
                        size={22}
                        style={{marginLeft: 10}}></Icon1>
                      <Text style={Styles1.subText4}>Stripe</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.setState({paymentMethod: false})}>
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
        </ImageBackground>
      </View>
    );
  }
}

export default PackagePlan;
