import {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {wp, hp} from '../../components/deviceService';
import LevelIndexNumber from './levelIndexNumber';
import CircleButton from '../button/circleButton';

const Title = (props, {testID}) => {
  return (
    <View style={props.style}>
      <Text style={styles.titleText} adjustsFontSizeToFit numberOfLines={1} testID='title'>
        {props.title}
      </Text>
      <View style={styles.container}>
        <View style={ styles.levelBar }/>
        <LevelIndexNumber
          totalLevels={props.totalLevels}
          currentLevel={props.currentLevel}
        />
        <View style={styles.levelBar}>
          <Text 
            style={{ color: 'white' }} 
            onPress={() => {
              props.skipWord(props.mode);
            }}
          >
            Skip
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Title;

const backButtonSize = hp('5%');

const styles = StyleSheet.create({
  titleText: {
    width: wp('100%'),
    padding: hp('1%'),
    paddingLeft: hp('2%'),
    paddingRight: hp('2%'),
    fontSize: wp('5%'),
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center',
    marginBottom: hp('0.5%'),
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  levelBar: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 40
  },
  button: {
    width: backButtonSize,
    height: backButtonSize,
  },
});
