import {StyleSheet} from 'react-native';
import {defaultButtonSize} from '../button/rectButton';

import {
  wp,
  hp,
} from '../../components/deviceService';

const getStyles = () => {
  return StyleSheet.create({
    background: {
      position: 'absolute',
      zIndex: 2,
      left: 0,
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    top: {
      width: wp('100%'),
      flex: 1,
    },
    ribbon: {
      width: wp('90%'),
      flex: 0.65,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    ribbonImage: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ribbonText: {
      marginLeft: '15%',
      marginRight: '15%',
      color: '#ffffff',
      fontSize: wp('3.5%'),
      textAlign: 'center',
      marginBottom: hp('1%'),
    },
    container: {
      flex: 2,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerImage: {
      flex: 1,
      alignSelf: 'stretch',
      width: '100%',
      height: undefined,
    },
    containerImageWrap: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerButtonTop: {
      marginBottom: '5%',
    },
    containerButtonBottom: {
      marginTop: '10%',
    },
    bottom: {
      width: wp('100%'),
      flex: 2,
    },
    description: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    amountText: {
      textAlign: 'left',
      color: 'white',
      fontSize: hp('2%'),
      marginBottom: 0,
    },
    confirm: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cancel: {
      flex: 1,
    },
    amountTextContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    amountText: {
      textAlign: 'center',
      color: '#ffffff88',
      fontSize: hp('2.5%'),
    },
    descriptionTextContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    descriptionText: {
      width: '50%',
      textAlign: 'center',
      color: '#ffffff88',
      fontSize: hp('2.5%'),
    },
    button: {
      width: defaultButtonSize.width,
      height: defaultButtonSize.height,
    },
  });
};

const styles = getStyles();

export {styles};
