import {StyleSheet} from 'react-native';
import {hp, wp} from '../../components/deviceService';
import {defaultButtonSize} from '../button/rectButton';

const getStyles = () => {
  return StyleSheet.create({
    levelDetailsImageFrame: {
      zIndex: 2,
      marginTop: hp('3%'),
    },
    modal: {
      backgroundColor: 'black',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    levelDetailsImagePic: {
      position: 'absolute',
      top: hp('1.5%'),
      zIndex: 2,
      borderRadius: 20,
      overflow: 'hidden',
    },
    sourcePhoto: {
      position: 'absolute',
      marginTop: hp('5%'),
      top: 0,
      width: wp('100%'),
      zIndex: 2,
      color: 'white',
      fontSize: wp('3%'),
      textAlign: 'center',
      backgroundColor: 'black',
      paddingBottom: hp('0.5%'),
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    close: {
      position: 'absolute',
      marginTop: hp('5%'),
      top: 0,
      width: defaultButtonSize.width,
      zIndex: 2,
      left: wp('50%') - (defaultButtonSize.width) / 2,
      color: 'white',
      textAlign: 'center',
      alignSelf: 'center',
    },
  });
};

const styles = getStyles();

export {styles};
