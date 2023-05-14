import {Avatar, Heading, VStack, Text} from 'native-base';
import * as React from 'react';
import {View} from 'react-native';
import MenuList from './MenuList/MenuList';
import img from '../../../assets/images/shaheer.jpg'
type Props = {};

export default function Menu({}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white',width:"100%"}}>
      <VStack
        mt={10}
        space={2}
        alignItems={{
          base: 'center',
          md: 'flex-start',
        }}>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
              source={img}>
          RB
        </Avatar>
        <Heading color={'#1D1D1D'}>Kenny De GoRls Man</Heading>
      </VStack>
      <MenuList/>
    </View>
  );
}
