import { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {View} from 'react-native-animatable';
import {wp} from '../../components/deviceService';
import CircleButton from '../button/circleButton';
import StarsIndicator from './starsIndicator';
import { db } from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const StageTitleBanner = (props, {testID}) => {
  const [highScore, setHighScore] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    onSnapshot(doc(db, 'users', props.title), (snapshot) => {
      // if user high score exists
      if (snapshot.exists()) {
        // display the existing user profile details
        setHighScore(snapshot.data().highScore);
        if (highScore < 1400) {
          setStars(3);
        } else if (highScore < 700) {
          setStars(2);
        } else if (highScore < 300) {
          setStars(1);
        }
      }
    })
  }, []);

  return (
    <View
      style={props.style}
      pointerEvents={props.pointerEvents}>
      <ImageBackground
        source={require('../img/map_title_container.png')}
        style={styles.mapTitleContainerImage}>
        <View style={styles.markerContainer}>          
          <StarsIndicator
            lives={stars}
          />
          <ImageBackground style={styles.marker} source={require('../img/marker.png')}>
            <Text style={styles.markerText}>HIGH SCORE: {highScore}</Text>
          </ImageBackground>
        </View>
        <View style={{ width: 60 }}></View>
        <ImageBackground style={styles.mapTitleBackground} source={require('../img/banner.png')}>
          <Text style={styles.mapTitleText}>{props?.title?.toUpperCase()}</Text>
        </ImageBackground>
        <CircleButton
          style={styles.button}
          image={require('../img/yellow_arrow.png')}
          onPress={() => {
            props.navigation.navigate('Game', {words: props.words, stage: props.title} );
          }}
          testID='start-button'
        />
      </ImageBackground>
    </View>
  );
}

const titleBannerConstant = 0.2922;
const titleBannerWidth = wp('82%');

export const titleBannerOptions = {
  width: titleBannerWidth,
  height: titleBannerWidth * titleBannerConstant,
};

const titleFont = titleBannerOptions.height * 0.16;

const styles = StyleSheet.create({
  mapTitleContainerImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  mapTitleText: {
    fontSize: titleFont,
    width: 120,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mapTitleBackground: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 155,
    height: 65
  },
  button: {
    height: 40,
    marginRight: 15
  },
  marker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 60,
    height: 85,
    left: 0,
    top: 0,
  },
  markerText: {
    marginHorizontal: 6,
    marginTop: 7,
    marginBottom: 12,
    width: 40,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 11
  },
  markerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 90,
    height: 85,
    left: 0,
    top: 0,
  },
});

export default StageTitleBanner;
