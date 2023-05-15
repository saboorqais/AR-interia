import React, {useEffect} from 'react';
import {Unity, useUnityContext} from 'react-unity-webgl';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

export default function ARUnity() {


  return (
    <View style={styles.container} w={'full'} h={600}>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
