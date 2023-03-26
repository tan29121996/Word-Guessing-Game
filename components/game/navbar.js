import {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CircleButton from '../button/circleButton';
import LivesIndicator from './livesIndicator';
import {wp, hp} from '../../components/deviceService';

const Navbar = (props, {testID}) => {
  return (
    <View style={props.style}>
      <View style={styles.navBarLeft}>
        <CircleButton
          style={styles.backButton}
          image={require('../img/back_button.png')}
          onPress={props.onBackPress}
        ></CircleButton>
      </View>
      <View style={styles.navBarMiddle}>
        <LivesIndicator
          lives={props.lives}
        />
      </View>
      <View style={styles.navBarRight}>
        <View
          ref={(ref) => {
            this.container = ref;
          }}
          style={styles.container}>
          <Text adjustsFontSizeToFit style={styles.text} testID='points'>
            {props.points}{" pts"}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Navbar;

const backButtonSize = hp('5%');

const styles = StyleSheet.create({
  navBarLeft: {
    flex: 1,
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
  backButton: {
    width: backButtonSize,
    height: backButtonSize,
    marginLeft: 4,
  },
  container: {
    maxHeight: hp('4%'),
    maxWidth: wp('23%'),
    flex: 1,
    backgroundColor: '#000000cc',
    borderRadius: hp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    flex: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: hp('1.5%'),
    marginBottom: hp('0.1%'),
  },
});
