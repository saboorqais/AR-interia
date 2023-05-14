import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import {Box, Center, Container, Image} from 'native-base';

export default function Greet({navigation}:any) {
    useEffect(() => {
        setTimeout(
            function() {
                navigation.navigate("Login")
            }, 2000);
    }, [])
    
  return (
    <Box width="100%" height="100%">
      <Center mt={'40%'}>
        <Image
          source={require('../../../assets/images/Logo.png')}
          alt="Alternate Text"
        />

        <View>
          <Text style={styles.text}>Version 1.0</Text>
        </View>
      </Center>
    </Box>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop:300,
    color: '#546CFF',
  },
});
