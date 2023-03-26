import React, {Component} from 'react';
import {View, ImageBackground, Text, Image} from 'react-native';
import {styles} from './popup.style';
import RectButton from '../button/rectButton';
import {View as AnimatedView} from 'react-native-animatable';

const Popup = (props) => {
  return (
    <AnimatedView
      animation = "fadeIn"
      style={styles.background}
    >
      <View style={styles.top}></View>
      <View style={styles.ribbon}>
        <View style={styles.ribbon}>
          <ImageBackground
            resizeMode="contain"
            source={require('../img/popup_ribbon.png')}
            style={styles.ribbonImage}>
            <Text style={styles.ribbonText}>
              {props.title.toUpperCase()}
            </Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          source={require('../img/popup_square.png')}
          style={styles.containerImage}>
          <View style={styles.containerImageWrap}>
            <View style={styles.description}>
              {props.description ? (
                <View style={styles.descriptionTextContainer}>
                  <Text style={styles.descriptionText}>
                    {props.description}
                  </Text>
                </View>
              ) : null}
            </View>
            <View>
              {props.amount ? (
                <Text adjustsFontSizeToFit style={styles.amountText}>
                  {"+ " + props.amount + " points"}
                </Text>
              ) : null}
            </View>
            <View style={styles.confirm}>
              <RectButton
                style={styles.button}
                type={'Green'}
                text={props.text}
                onPress={() => {
                  props.onConfirm(props.mode);
                }}
              />
            </View>

            {props.showCancelButton ? (
              <View style={styles.cancel}>
                <RectButton
                  style={styles.button}
                  type={'Yellow'}
                  text='cancel'
                  onPress={props.onCancel}
                />
              </View>
            ) : null}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom}></View>
    </AnimatedView>
  );
}

export default Popup;
