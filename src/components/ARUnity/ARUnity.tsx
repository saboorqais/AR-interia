import React, {useEffect} from 'react';
import {Unity, useUnityContext} from 'react-unity-webgl';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

export default function ARUnity() {
  const BASE_URL = '../../../Unity/Build';
  const {unityProvider, isLoaded, loadingProgression} = useUnityContext({
    loaderUrl: `Unity/Build/AR.loader.js`,
    dataUrl: `Unity/Build/AR.data`,
    frameworkUrl: `Unity/Build/AR.framework.js`,
    codeUrl: `Unity/Build/AR.wasm`,
  });
  const loadingPercentage = Math.round(loadingProgression * 100);
  console.log(unityProvider);
  console.log(isLoaded);
  useEffect(() => {
    console.log(loadingPercentage);
  }, [loadingPercentage]);

  return (
    <View style={styles.container} w={'full'} h={600}>
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <View>
          <Text>Loading... ({loadingPercentage}%)</Text>
        </View>
      )}
      <View>
        {<Unity unityProvider={unityProvider}  />}
      </View>
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
