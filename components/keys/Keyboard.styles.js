import { StyleSheet, Dimensions } from "react-native";
import {wp} from '../../components/deviceService';

const keys = [
  ["w", "e", "t", "y", "i", "o", "q"],
  ["s", "r", "g", "u", "k", "p", "a"],
  ["d", "f", "h", "j", "l", "z", "x"],
  ["↵", "c", "v", "b", "n", "m", "←"],
];

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 70) / keys[0].length;

export default StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginTop: "auto",
    marginBottom: 20,
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMargin: {
    flex: 0.3,
  },
  letter: {
    width: keyWidth,
    height: keyWidth,
    margin: wp('0.7%'),
    justifyContent: "center",
    alignItems: "center",
  },
  characterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    textAlign: 'center',
    fontSize: wp('6%'),
    fontWeight: "bold"
  },
});
