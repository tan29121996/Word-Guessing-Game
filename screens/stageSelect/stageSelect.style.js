import { StyleSheet, Platform, StatusBar } from 'react-native';
import {wp, hp} from '../../components/deviceService';
import {titleBannerOptions} from '../../components/stage/stageTitleBanner';
import {defaultButtonSize} from '../../components/button/rectButton';

const getStyles = () => {
  const bottomHeight = hp('35%');

  const buttonWidth = wp('42%');
  const buttonRatioConstant = 0.3525;
  const buttonHeight = buttonWidth * buttonRatioConstant;

  const navbarHeight = hp('10%');
  const navbarMarginTop = 0;

  const playButtonOverlayBottomMargin = hp('2%');
  const yBackButton =
    hp('100%') - (bottomHeight - playButtonOverlayBottomMargin + buttonHeight);
  const y = yBackButton * 0.5;

  return StyleSheet.create({
    safearea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    root: {
      flex: 1,
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    navBar: {
      position: 'absolute',
      top: navbarMarginTop,
      height: navbarHeight,
      width: wp('100%'),
      marginTop: 12,
      backgroundColor: 'transparent',
      flex: 1,
      flexDirection: 'row',
      zIndex: 2,
    },
    mapTypeButtonContainer: {
      position: 'absolute',
      top: y,
      zIndex: 2,
      right: 0,
      backgroundColor: '#000000CC',
      padding: 7,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    playButtonOverlay: {
      position: 'absolute',
      marginBottom: bottomHeight + playButtonOverlayBottomMargin,
      bottom: 0,
      width: defaultButtonSize.width,
      zIndex: 2,
    },
    closeMapButtonOverlay: {
      position: 'absolute',
      marginBottom: hp('5%'),
      bottom: 0,
      width: defaultButtonSize.width,
      height: defaultButtonSize.height,
      zIndex: 2,
    },
    titleOverlay: {
      marginBottom: '7%',
      width: titleBannerOptions.width,
      height: titleBannerOptions.height,
    },
    levelCompletedBanner: {
      zIndex: 2,
      position: 'absolute',
      marginBottom: bottomHeight + playButtonOverlayBottomMargin,
      bottom: 0,
    },
    mapboxLogo: {
      position: 'absolute',
      bottom: wp('4%'),
      right: wp('2%'),
      zIndex: 1,
      width: hp('9%'),
      height: hp('9%') * 0.272727272727273,
    },
    mapcreditsText: {
      position: 'absolute',
      zIndex: 2,
      width: wp('100%'),
      height: hp('2%'),
      bottom: hp('35%'),
    },
    flatlist: {
      flex: 1,
      paddingTop: navbarHeight + navbarMarginTop + hp('3%'),
    }
  });
};

const styles = getStyles();
export {styles};
