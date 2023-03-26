import { useRef, useState, useEffect, useCallback } from 'react';
import { Text, SafeAreaView, ImageBackground } from 'react-native';
import {View} from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import {styles} from './game.style';
import Navbar from '../../components/game/navbar';
import Title from '../../components/game/title';
import Popup from '../../components/game/popup';
import PhotoFrame from '../../components/photo/photoFrame';
import Keyboard from '../../components/keys';
import Confetti from 'react-native-confetti';
import { db } from '../../firebase';
import { setDoc, doc, onSnapshot } from 'firebase/firestore';

const copyArray = (arr) => arr.map((rows) => rows.map((letter) => letter));

const API_KEY = 'AIzaSyCWieEN7Q6pCPdzPOLK2By6WxLgpHdudZA';
const SEARCH_ENGINE_ID = '718e3bfe4ac594e4e';

const Game = ({ route, navigation }) => {
  const {words, stage} = route.params;
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(0);
  const [letters, setLetters] = useState(words[level].word.split(""));
  const [curLetter, setCurLetter] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [rows, setRows] = useState(() =>
    words[level].word.split(" ").map((word) => Array(word.length).fill(""))
  );
  const [title, setTitle] = useState("");
  const [amount , setAmount] = useState();
  const [description, setDescription] = useState("");
  const [isComplete, setComplete] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const [query, setQuery] = useState(words[level].word);
  const [image, setImage] = useState([]);

  const viewRef = useRef(null);

  const fetchImages = useCallback(async () => {
    try {
      if (!query) {
        return;
      }
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}&searchType=image`);
      const data = await response.json();
      const imageUrls = data.items.map(item => item.link);
      setImage(imageUrls);
    } catch (error) {
      console.log('Error in searchImages:', error);
    }
  }, [query]);

  useEffect(() => {
    fetchImages();
  }, [query]);
  
  useEffect(() => {
    if (lives < 1) {
      setTitle("GAME OVER!");
      setAmount();
      setDescription(
        "You are out of lives. The correct answer is " + words[level].word[0].toUpperCase() + words[level].word.substring(1) + "."
      );
      setShowPopup(true);
      setComplete(true);
    }
  }, [lives, level]);

  // Start the timer
  useEffect(() => {
    if (level < words.length) {
      setTime(0);
      setTimerRunning(true);
    }
  }, [level]);

  // Update the timer every second
  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerRunning]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', stage), (snapshot) => {
      // if user high score exists
      if (snapshot.exists()) {
        // display the existing user profile details
        setHighScore(snapshot.data().highScore);
      }
    })
  }, []);

  const calculatePoints = () => {
    const timeTaken = 60 - time; // The user has 60 seconds to complete the level
    const speedPoints = Math.round((curLetter / timeTaken) * 1000); // Calculate the points based on how fast the user entered the answer
    return speedPoints;
  };

  // Function to update the points state and store the high score in Firebase
  const updatePoints = (newPoints) => {
    setPoints(newPoints);

    if (newPoints > highScore) {
      setHighScore(newPoints);

      setDoc(doc(db, 'users', stage), {
        highScore: newPoints
      }).catch(error => {
        Alert.alert(error.message);
      });
    };
  };

  const onKeyPressed = (key) => {

    const updatedRows = copyArray(rows);

    if (key === "←") {
      const prevLetter = curLetter - 1;
      if (prevLetter >= 0) {
        // Check if the current letter is in the second row
        if (prevLetter >= updatedRows[0].length) {
          updatedRows[1][prevLetter - updatedRows[0].length] = "";
        } else {
          updatedRows[0][prevLetter] = "";
        }
        setRows(updatedRows);
        setCurLetter(prevLetter);
      }
      return;
    }

    if (key === "↵") {
      if (curLetter === updatedRows.flat().length) {
        if (rows.length === 1 ? rows[0].every((letter, i) => letter === letters[i]) : rows.slice(1).every(row => [...rows[0], " ", ...row].every((letter, i) => letter === letters[i]))) {
          let curLevel = level + 1;

          if (curLevel < words.length) {
            setPoints(points + calculatePoints());
            setTitle("GREAT JOB!")
            setDescription("Well done, you answered correctly!");
            setAmount(calculatePoints());
            updatedRows[0].fill("");
            if (updatedRows[1]) {
              updatedRows[1].fill("");
            }
            setLevel(curLevel);
            setLetters(words[curLevel].word.split(""));
            setRows(words[curLevel].word.split(" ").map((word, index) => {
              return word.split("").map(() => "");
            }));
            setCurLetter(0);
            setShowPopup(true);
            setQuery(words[curLevel].word + " " + stage);
          } else {
            let curPoints = points + calculatePoints();
            updatePoints(curPoints);
            setTitle("STAGE COMPLETE!");
            setAmount();
            setDescription("You completed the stage with " + curPoints + " points! Your previous high score was " + highScore);
            this._confettiView.startConfetti();
            setShowPopup(true);
            setComplete(true);
          }

        } else {
          setLives(lives - 1);
          viewRef.current.shake(500);
          updatedRows[0].fill("");
          if (updatedRows[1]) {
            updatedRows[1].fill("");
          }
          setRows(updatedRows);
          setCurLetter(0);
          setPoints(points - 100);
        }
      }

      return;
    }

    if (curLetter < updatedRows.flat().length) {
      // Check if the current row is filled, if yes, move to the next row
      if (updatedRows[0][curLetter] !== "" && updatedRows[1]) {
        setCurLetter(curLetter + 1);
      }

      // Update the current letter and the row
      if (curLetter >= rows[0].length) {
        updatedRows[1][curLetter - rows[0].length] = key;
      } else {
        updatedRows[0][curLetter] = key;
      }

      setRows(updatedRows);
      setCurLetter(curLetter + 1);
    }
  };

  const skipWord = () => {
    let curLevel = level + 1;
    if (curLevel < words.length) {
      setLevel(curLevel);
      setLetters(words[curLevel].word.split(""));
      setRows(words[curLevel].word.split(" ").map((word, index) => {
        return word.split("").map(() => "");
      }));
      setCurLetter(0);

    }
  };

  const goNext = () => {
    if (isComplete) {
      navigation.navigate("StageSelect");
    } else {
      setShowPopup(false);
    }
  }

  return (
    <SafeAreaView style={styles.safearea} >
      <LinearGradient
        colors={['#2a222c', '#534458']}
        style={styles.background}
      >
        <View 
          ref={viewRef}
          style={styles.background}
        >
          <Navbar
            style={styles.navBar}
            onBackPress={navigation.goBack}
            points={points}
            lives={lives}
            testID='points'
          />
          <Title
            style={styles.titleBar}
            title={stage}
            totalLevels={words.length}
            currentLevel={level}
            skipWord={skipWord}
            testID='title'
          />
          <PhotoFrame
            picture={words[level].image}
          />
          <View style={styles.solutionView}>
            <View style={styles.lettersBar}>
              {rows.map((row, i) => (
                <View
                  key={`row-${i}`}
                  style={[styles.row]}
                  testID={`row-${i}`}
                >
                  {row.map((letter, j) => (
                    <ImageBackground
                      key={`cell-${j}`}
                      style={styles.cell}
                      source={require('../../components/img/solution_letter.png')}
                    >
                      <Text style={styles.character}>{letter.toUpperCase()}</Text>
                    </ImageBackground>
                  ))}
                </View>
              ))}
            </View>
          </View>
          <Keyboard
            onKeyPressed={onKeyPressed}
            testID="keyboard"
          />
          {showPopup ? (
            <Popup
              title={title}
              text={'NEXT'}
              amount={amount}
              description={description}
              showCancelButton={false}
              onConfirm={goNext}
              onCancel={this.popupCancel}
            />
          ) : null}
        </View>
        <Confetti 
          untilStopped = {true}
          ref={(node) => this._confettiView = node}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Game;
