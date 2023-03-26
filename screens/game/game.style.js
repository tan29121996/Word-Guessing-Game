import {StyleSheet, Platform, StatusBar} from 'react-native';
import {wp} from '../../components/deviceService';
import {defaultButtonSize} from '../../components/button/rectButton';

const getStyles = () => {
  return StyleSheet.create({
    safearea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    background: {
      flex: 1,
    },
    navBar: {
      flex: 1.5,
      flexDirection: 'row',
    },
    titleBar: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    photoBar: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    solutionBar: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    lettersBar: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      width: wp('100%'),
    },
    solutionView: {
      flex: 3,
      width: wp('100%'),
    },
    row: {
      flexDirection: 'row',
      width: wp('100%'),
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cell: {
      width: 30,
      height: 30,
      margin: wp('0.7%'),
      justifyContent: 'center',
      alignItems: 'center',
    },
    character: {
      textAlign: 'center',
      color: 'white',
      fontSize: wp('5%'),
      fontWeight: "bold"
    },
    button: {
      width: defaultButtonSize.width * 0.7,
      height: defaultButtonSize.height * 0.7,
      marginBottom: 20,
      alignSelf: 'center',
    },
  });
};

const styles = getStyles();

export {styles};
