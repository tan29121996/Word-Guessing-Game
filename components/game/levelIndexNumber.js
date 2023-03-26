import React, {Component} from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';
import {hp} from '../../components/deviceService';

type Props = {
  totalLevels: number;
  currentLevel: number;
};

export default class LevelIndexNumber extends Component<Props> {
  
  render() {
    return (
      <ImageBackground
        source={require('../img/level_number_container.png')}
        style={styles.levelChooserImage}>
        <Text style={styles.levelChooserText}>
          {this.props.currentLevel + 1}/{this.props.totalLevels}
        </Text>
      </ImageBackground>
    );
  }
}


const levelChooserNumberWidth = hp('10%');
const levelChooserNumberConstant = 0.322420634920635;
const levelChooserNumberHeight =
  levelChooserNumberWidth * levelChooserNumberConstant;
const levelChooserFont = hp('1.5%');

const styles = StyleSheet.create({
  levelChooserImage: {
    width: levelChooserNumberWidth,
    height: levelChooserNumberHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelChooserText: {
    textAlign: 'center',
    color: 'white',
    fontSize: levelChooserFont,
  },
});
