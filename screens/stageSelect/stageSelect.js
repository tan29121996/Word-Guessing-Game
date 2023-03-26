import { useState, useEffect } from 'react';
import { View, SafeAreaView, ImageBackground, FlatList } from 'react-native';
import {styles} from './stageSelect.style';
import Navbar from '../../components/stage/navbar';
import StageTitleBanner from '../../components/stage/stageTitleBanner';
import { db } from '../../firebase';
import { doc, getDocs, collection, onSnapshot } from 'firebase/firestore';

const StageSelect = ({navigation}) => {
  const [state, setState] = useState(0);
  const [category, setCategory] = useState([]);
  const [stage, setStage] = useState([]);

  useEffect(() => {
    let getData;

    const fetchCategories = async () => {
      const categories = await getDocs(collection(db, 'categories')).then(
        (snapshot) => snapshot.docs.map((doc) => doc.id)
      );
      setCategory(categories);
    };

    fetchCategories();

    return getData;
  }, [db]);

  useEffect(() => {
    if (Object.keys(category).length !== 0) {
      onSnapshot(doc(db, 'categories', category[state]), (snapshot) => {
        setStage(snapshot.data().stages);
      })
    }

  }, [category, state]);

  return (
    <SafeAreaView style={styles.safearea}>
      <ImageBackground
        source={{uri:'https://us.123rf.com/450wm/lilu330/lilu3301602/lilu330160200092/53557344-dr%C3%B4le-nature-paysage-du-soir-de-dessin-anim%C3%A9-illustration-vectorielle-vertical-arri%C3%A8re-plan-de.jpg?ver=6'}}
        style={styles.background}
      >
        <View style={styles.container}>
          <Navbar
            style={styles.navBar}
            title={category[state]}
            cat = {category}
            state={state}
            setState={setState}
          />
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={stage}
            keyExtractor={(item) => item.name}
            renderItem={({item, index}) =>
            <StageTitleBanner
              style={styles.titleOverlay}
              id={index + 1}
              navigation={navigation}
              pointerEvents={'auto'}
              title={item.name}
              words={item.levels}
              testID='start-button'
            />}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default StageSelect;
