import {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {hp} from '../../components/deviceService';
import {View} from 'react-native-animatable';

const StarsIndicator = (props) => {

  return (
    <View
      style={styles.container}
      ref={(ref) => {
        this.containerView = ref;
      }}
      useNativeDriver>
      {props.lives === 3 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/star_yellow.png')} />
          <Image style={styles.image} source={require('../img/star_yellow.png')} />
          <Image style={styles.image} source={require('../img/star_yellow.png')} />
        </View>
      )}
      {props.lives === 2 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/star_yellow.png')} />
          <Image style={styles.image} source={require('../img/star_yellow.png')} />
          <Image style={styles.image} source={require('../img/star_gray.png')} />
        </View>
      )}
      {props.lives === 1 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/star_yellow.png')} />
          <Image style={styles.image} source={require('../img/star_gray.png')} />
          <Image style={styles.image} source={require('../img/star_gray.png')} />
        </View>
      )}
      {props.lives === 0 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/star_gray.png')} />
          <Image style={styles.image} source={require('../img/star_gray.png')} />
          <Image style={styles.image} source={require('../img/star_gray.png')} />
        </View>
      )}
    </View>
  );
}

export default StarsIndicator;

const heartSize = hp('2.3%');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: -1,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  image: {
    width: heartSize,
    height: heartSize,
    margin: 2,
  },
});
