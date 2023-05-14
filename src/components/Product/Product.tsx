import React, {useEffect, useState} from 'react';

import {
  Center,
  Container,
  extendTheme,
  Flex,
  Heading,
  Image,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  View,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Badge} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import image from '../../../assets/images/sofa.png';
import {data} from '../MockData/data';
import {categoryGetProduct} from "../../Utils/Service/category";

export default function Product({route,navigation}: any) {
  console.log(route.params.items);
  const [products,setProducts]=useState([]);
  const theme = extendTheme({
    components: {
      Input: {
        opacitySearch: {
          opac: {
            opacity: 0.1,
          },
        },
      },
      Button: {
        variants: {
          interia: {
            backgroundColor: '#546CFF',
            borderRadius: 10,
            color: 'white',
          },
        },
      },
    },
  });
  useEffect(()=>{

    categoryGetProduct(route.params.categoryId).then(res=>{
      console.log(res)
      setProducts(res.data.results)
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

  },[])


  return (
    <View style={styles.container} w={'full'}>
      <View style={styles.SearchbarContainer}>
        <NativeBaseProvider theme={theme}>
          <Center flex={1} px="3">
            <Stack space={4} w="100%" alignItems="center">
              <Input
                size={'2xl'}
                opacity={0.5}
                variant="rounded"
                InputLeftElement={
                  <View style={styles.iconWrapper}>
                    <Icons name="search" size={20} color="#546CFF" />
                  </View>
                }
                focusOutlineColor="#546CFF"
                placeholder="Search"
              />
            </Stack>
          </Center>
        </NativeBaseProvider>
      </View>
      <NativeBaseProvider theme={theme}>
        <View style={styles.headingContainer}>
          <Text style={styles.Heading}>Available Items</Text>
        </View>
        <Flex direction="column">
          {/* eslint-disable-next-line react/jsx-no-undef */}
          {products.map(item =>
             (
              <TouchableOpacity key={item.id}
              onPress={() => {
                navigation.navigate('ProductPage', {
                  item:item

                });
              }}
              >
                <View style={styles.Imagewrapper}>
                  <View style={styles.ImageContainer}>
                    <View style={styles.ImageDiv}>
                      <Image
                        source={{uri:item.image}}
                        alt="Alternate Text"
                        size="md"
                        backgroundColor={'white'}
                        borderRadius={8}
                      />
                    </View>
                    <Flex
                      direction={'column'}
                      style={styles.InformationContainer}>
                      <Heading w={'full'} size={'sm'}>
                        {item.name}
                      </Heading>
                      <Text>{item.description}</Text>

                      <Container>
                        <View style={styles.bottomContainer}>
                          <Badge
                            rounded={'full'}
                            height={5}
                            colorScheme="error"
                          />
                          <Badge
                            rounded={'full'}
                            height={5}
                            colorScheme="green"
                          />
                          <Badge
                            rounded={'full'}
                            height={5}
                            colorScheme="yellow"
                          />
                        </View>
                        <View>
                          <Text>{item.price}</Text>
                        </View>
                      </Container>
                    </Flex>
                  </View>
                </View>
              </TouchableOpacity>
            )
          )}
        </Flex>
      </NativeBaseProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  SearchbarContainer: {
    margin: 17,
    height: 40,
  },
  iconWrapper: {
    margin: 7,
    marginLeft: 15,
  },
  Imagewrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    height: 128,
    borderRadius: 8,
  },
  ImageContainer: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 8,
  },
  ImageDiv: {
    padding: 10,
  },
  Heading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
  },
  headingContainer: {
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  InformationContainer: {
    width: '100%',
    margin: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
});
