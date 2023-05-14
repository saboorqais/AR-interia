import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, extendTheme, Flex, Pressable } from 'native-base';
import Category from './Category/Category';
import {useEffect, useState} from "react";
import {categoryGet} from "../../Utils/Service/category";

type Props = {};

export default function Categories({ }: Props) {
  const [items,setItems]=useState([]);
  const data = [
    {
      title: 'Sofa',
      url: require('../../../assets/images/sofa2.png'),
      categoryId: 1,
    },
    {
      title: 'Sofa',
      url: require('../../../assets/images/sofa.png'),
      categoryId: 1,
    },
    {
      title: 'Table',
      url: require('../../../assets/images/table.png'),
      categoryId: 2,
    },
    {
      title: 'Cabinet',
      url: require('../../../assets/images/cabinet.png'),
      categoryId: 3,
    },
    ,
    {
      title: 'Chair',
      url: require('../../../assets/images/chair.png'),
      categoryId: 4,
    },
  ];
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
    console.log("running")
    categoryGet(0).then((res)=>{
      console.log("hello")
      console.log(res.data.results)
      setItems(res.data.results)
    }).catch(err=>{
      console.log("error")
      console.log(err)
    })


  },[])

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.Heading}>Categories</Text>
        </View>
        <NativeBaseProvider theme={theme}>
          <Flex direction="row" flexWrap={'wrap'} w={"full"}>
            {items?.map((item, index) => (
              <Category
                key={item.id}
                path={item.image}
                title={item.name}
                categoryId={item.id}
              />
            ))}
          </Flex>
        </NativeBaseProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding:16
  },
  text: {
    fontFamily: 'Poppins',
  },
  textContainer: {
    padding: 16,
  },
  iconWrapper: {
    margin: 7,

  },
  SearchbarContainer: {
    height: 40,
  },
  ImageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
    , alignItems: "center"
  },
  Heading: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: '#313131',
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Imagewrapper: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 164,
    height: 128,
    borderRadius: 8,
    marginTop: 16,
  },
  LiveContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: 10,
  },
});
