import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, ViewProps, Text, StyleSheet, ImageBackground} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import CircleButton from '../button/circleButton';

const Navbar = (props) => {

  const leftPress = () => {
    if (props.state !== 0) {
      props.setState(props.state - 1);
    } else {
      props.setState(props.cat.length - 1);
    }
  }

  const rightPress = () => {
    if (props.state !== props.cat.length - 1) {
      props.setState(props.state + 1);
    } else {
      props.setState(0);
    }
  }

  return (
    <AnimatableView
      useNativeDriver
      style={props.style}>
      <View style={styles.navBarLeft}>
        <CircleButton
          style={styles.left}
          image={require('../img/left_arrow.png')}
          onPress={leftPress}></CircleButton>
      </View>
      <View style={styles.navBarMiddle}>
        <ImageBackground 
          source={require('../../components/img/level_number_container.png')}
          style={styles.titleBackground}
        >
          <Text adjustsFontSizeToFit style={styles.text}>
            {props?.title?.toUpperCase()}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.navBarRight}>
        <CircleButton
          style={styles.right}
          image={require('../img/right_arrow.png')}
          onPress={rightPress}></CircleButton>
      </View>
    </AnimatableView>
  );
}

const styles = StyleSheet.create({
  navBarLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  navBarRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navBarMiddle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    width: hp('15%'),
    height: hp('5%'),
    marginLeft: 4,
  },
  right: {
    width: hp('15%'),
    height: hp('5%'),
    marginRight: 4,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: hp('2.5%'),
    fontWeight: 'bold'
  },
  titleBackground: {
    width: 150,
    height: 50,
    justifyContent: 'center'
  }
});

export default Navbar;


