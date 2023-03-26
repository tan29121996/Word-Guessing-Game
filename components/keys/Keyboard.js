import { View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native";
import TouchableScale from 'react-native-touchable-scale';
import styles, { keyWidth } from "./Keyboard.styles";

const Keyboard = ({
  onKeyPressed = () => {},
}, {testID}) => {

  const keys = [
    ["w", "e", "r", "t", "y", "o", "q"],
    ["a", "s", "g", "u", "h", "i", "p"],
    ["z", "d", "f", "j", "l", "k", "x"],
    ["↵", "c", "v", "b", "n", "m", "←"],
  ];

  handleViewRef = ref => this.view = ref;
  
  bounce = () => this.view.bounce(800);

  return (
    <View style={styles.keyboard} testID='keyboard'>
      {keys.map((keyRow, i) => (
        <View style={styles.row} key={`row-${i}`}>
          {keyRow.map((key) => (
            <TouchableScale 
              onPress={() => onKeyPressed(key)} 
              key={key} 
              testID={key}
            >
              <ImageBackground
                resizeMode="cover"
                style={{
                  ...styles.letter,
                }}
                source={require('../img/option_letter.png')}>
                <View style={styles.characterContainer}>
                  <Text style={styles.character}>
                    {key.toUpperCase()}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableScale>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Keyboard;
