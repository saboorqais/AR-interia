import {
  Avatar,
  Box,
  FlatList,
  Flex,
  HStack,
  Heading,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {};

export default function MenuList() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Profile',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      iconName: 'person-outline',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Favourites',
      timeStamp: '11:11 PM',
      recentText: 'Cheer up, there!',
      iconName: 'ios-heart-outline',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Settings',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      iconName: 'settings-outline',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Logout',
      timeStamp: '8:56 PM',
      recentText: 'All the best',
      iconName: 'log-out-outline',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
  ];
  return (
    <ScrollView style={{width: '100%'}}>
      {data.map((item, index) => (
        <Flex
          key={index}
          py="2"
          m={5}
          borderBottomWidth="1"
          _dark={{
            borderColor: '#B3B3B3',
          }}
          borderColor="#B3B3B3"
          flexDirection={'row'}
          justifyContent="space-between">
          <Flex flexDirection={'row'} alignItems={'center'}>
            <Icon name={item.iconName} size={30} color={'#313131'} />

            <Text
              _dark={{
                color: '#313131',
              }}
              ml={5}
              color="#313131"
              bold>
              {item.fullName}
            </Text>
          </Flex>

          <Pressable>
            <Icon name={'arrow-forward-outline'} size={30} />
          </Pressable>
        </Flex>
      ))}
    </ScrollView>
  );
}
