import { useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import RemoteImage from './remoteImage';
import {styles} from './photoFrame.style';
import {wp} from '../../components/deviceService';
import RectButton from '../button/rectButton';

const photoFrameConstant = 0.626373626373626;

const PhotoFrame = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const photoFrameWidth = wp('100%');
  const photoFrameHeight = photoFrameWidth * photoFrameConstant;

  const pic = {
    uri: props.picture,
  };

  return (
    <View style={props.style}>
      <RemoteImage
        style={{
          width: photoFrameWidth,
          height: photoFrameHeight,
          ...styles.levelDetailsImagePic,
        }}
        source={pic}
        showNativeIndicator={false}
        testID='photo-frame-image'
      />
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Image
          style={{
            width: photoFrameWidth,
            height: photoFrameHeight,
            ...styles.levelDetailsImageFrame,
          }}
          source={require('../img/photo_frame.png')}
        />
      </TouchableWithoutFeedback>

      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          <Image
            style={{ height: '100%', resizeMode: 'contain' }}
            source={pic}
          />
        </View>
        <RectButton 
          style={styles.close} 
          text={'Back'}
          onPress={() => setModalVisible(false)} 
        />
      </Modal>
    </View>
  );
};

export default PhotoFrame;

