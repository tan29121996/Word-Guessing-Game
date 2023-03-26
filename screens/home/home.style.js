import {StyleSheet, StatusBar, Platform, } from 'react-native';
import {wp, hp} from '../../components/deviceService';

const logoImageK = 0.706896551724138;

const buttonK = 0.196078431372549;
const buttonWidth = wp('70%');

const getStyles = () => {
  const logoImageWidth = wp('70%');

  return StyleSheet.create({
    safearea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      opacity: 0,
    },
    top: {
      flex: 0.28,
      width: wp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    logo: {
      flex: 2,
      width: wp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    logoImage: {
      width: logoImageWidth,
      height: logoImageWidth * logoImageK,
    },
    buttons: {
      flex: 1,
      width: wp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    bottom: {
      flex: 1,
      width: wp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    buttonOption: {
      width: wp('70%'),
      height: wp('50%'),
    },
    progressBar: {
      position: 'absolute',
      zIndex: 4,
      width: wp('100%'),
      height: hp('100%'),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',

    },
    button: {
      zIndex: 1,
      width: buttonWidth,
      height: buttonWidth * buttonK,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    text: {
      color: 'white',
      fontSize: hp('3%'),
      marginTop: hp('0.5%'),
    },
  });
};

const styles = getStyles();

export {styles};
