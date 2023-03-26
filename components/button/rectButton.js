import {Component, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';
import {View} from 'react-native-animatable';
import TouchableScale from 'react-native-touchable-scale';
import {wp, hp} from '../../components/deviceService';

const buttonRatioConstant = 0.3525;
const buttonWidth = wp('42%');

export const defaultButtonSize = {
  width: buttonWidth,
  height: buttonWidth * buttonRatioConstant,
};

const RectButton = (props, {testID}) => {
  return (
    <View style={props.style}>
      <View style={styles.viewStyle}>
        <TouchableScale
          style={styles.viewStyle}
          onPress={() => {
            setTimeout(props.onPress, props.delay);
          }}
          testID='start-button'>
          <ImageBackground
            resizeMode="contain"
            source={require('../img/button_yellow.png')}
            style={styles.viewStyle}>
            {props.text ? (
              <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[
                  styles.text,
                  {
                    color: '#973504',
                  },
                  props.textStyle,
                ]}>
                {props.text}
              </Text>
            ) : (
              props.children
            )}
          </ImageBackground>
        </TouchableScale>
      </View>
    </View>
  );
}

export default RectButton;


const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: '2%',
    fontSize: hp('3%'),
  },
});
