import {View, Text} from 'react-native';
import React from 'react';
import {Center, Flex, Heading, Pressable} from 'native-base';

export default function Header(props: any) {
  console.log(props);
  console.log('This log is from Product' + props.children);
  return (
    <Flex>
      <Center style={{width: '100%'}}>
        <Heading color="black.100" size="sm">
          {props.children}
          {props?.routes}
        </Heading>
      </Center>
    </Flex>
  );
}
