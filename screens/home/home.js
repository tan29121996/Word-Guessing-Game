import {ImageBackground, View, SafeAreaView, Text} from 'react-native';
import {styles} from './home.style';
import TouchableScale from 'react-native-touchable-scale';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../components/img/mountain_bg.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.safearea}>
          <View style={styles.logo}>
            <ImageBackground
              style={styles.logoImage}
              source={require('../../components/img/logo_and_ribbon.png')}>
            </ImageBackground>
          </View>
          <View style={styles.buttons}>
            <TouchableScale 
              testID="start-button"
              onPress = {() => navigation.navigate("StageSelect")}
            >
              <ImageBackground
                resizeMode="contain"
                style={styles.button}
                source={require('../../components/img/play_button_home_bg.png')}>
                <Text style={styles.text}>Press to start</Text>
              </ImageBackground>
            </TouchableScale>
          </View>
          <View style={styles.bottom}></View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Home;
