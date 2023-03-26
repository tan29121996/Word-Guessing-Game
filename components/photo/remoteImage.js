import React from 'react';
import {ActivityIndicator, StyleSheet, View, Image} from 'react-native';

const styles = StyleSheet.create({
  loadingActivityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const RemoteImage = (props) => {
  return (
    <View style={props.style}>
      <Image
        testID="photo-frame-image"
        resizeMode={props.resizeMode}
        style={{...props.style, zIndex: 5}}
        source={props.source}
        children={props.children}
        activityIndicator={
          props.showNativeIndicator ? (
            <ActivityIndicator animating={true} color="#999999" size={'large'} />
          ) : null
        }
      />
      <View style={{...props.style, backgroundColor: '#00000099'}}>
        <View style={styles.loadingActivityContainer}>
          <ActivityIndicator size="large" color="#999999" />
        </View>
      </View>
    </View>
  );
}

export default RemoteImage;

