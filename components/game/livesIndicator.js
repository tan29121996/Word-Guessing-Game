import {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {hp} from '../../components/deviceService';
import {View} from 'react-native-animatable';

const LivesIndicator = (props) => {

  return (
    <View
      style={styles.container}
      ref={(ref) => {
        this.containerView = ref;
      }}
      useNativeDriver>
      {props.lives === 3 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/heart_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_icon_details.png')} />
        </View>
      )}
      {props.lives === 2 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/heart_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_black_icon_details.png')} />
        </View>
      )}
      {props.lives === 1 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/heart_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_black_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_black_icon_details.png')} />
        </View>
      )}
      {props.lives === 0 && (
        <View style={styles.container}>
          <Image style={styles.image} source={require('../img/heart_black_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_black_icon_details.png')} />
          <Image style={styles.image} source={require('../img/heart_black_icon_details.png')} />
        </View>
      )}
    </View>
  );
}

export default LivesIndicator;

const heartSize = hp('4%');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: heartSize,
    height: heartSize,
    margin: 2,
  },
});
