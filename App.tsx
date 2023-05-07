import React, { useRef, useEffect } from 'react';

import UnityView from '@azesmway/react-native-unity';
import { View } from 'react-native';

const App = () => {
  const unityRef = useRef<UnityView>(null);

useEffect(() => {
   SendData(jsonedData);
  }, []);

// delay function help us control when to send the data to unity in ms.
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Send Data function is uses the main function that send the data to Unity.
// With the delay.
  async function SendData(data: any) {
    await delay(500);
    // This is the main function postMessage take 3 arguments ReacttoUnity is the game Object
    // GetDatas is the function name we will send the data to in Unity depends on hierarchy.
    // data is the data we will send.
    unityRef.current?.postMessage('ReactToUnity', 'GetDatas', data);
  }

const unityData = {
     name: "I'm Stepa",
     age: 25,
  };

  let jsonedData = JSON.stringify(unityData);

  return (
    <View style={{ flex: 1 }}>
      <UnityView
        ref={unityRef}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 1,
          bottom: 1
        }}
        onUnityMessage={(result) => {
          console.log('Message Here : ', result.nativeEvent.message)
        }}
      />
    </View>
  );
};

export default App;