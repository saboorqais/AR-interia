import React, {useState} from "react";
import {TouchableOpacity } from "react-native";
import {StyleSheet} from "react-native";
import {Badge, Container, Flex, Heading, Image,View,Text} from "native-base";
import img from '../../../assets/images/shaheer.jpg'

const Cart = () => {
       return( <View style={styles.container}>
                 <View style={styles.headingContainer}>
                        <Text fontSize="lg"  bold style={{ color:"black" }}>Categories</Text>
                        <Text fontSize="lg"  bold style={{color:"black" }}>2 items</Text>
                 </View>

                 <Flex direction="column">
                                <TouchableOpacity key={"1"}
                                >
                                       <View style={styles.Imagewrapper}>
                                       <View style={styles.ImageContainer}>

                                                            <Image
                                                                source={img}
                                                                alt="Alternate Text"
                                                                size="xl"
                                                                backgroundColor={'white'}
                                                                borderRadius={8}
                                                                ml={4}
                                                            />

                                                     <Flex
                                                         direction={'column'}
                                                         style={styles.InformationContainer}>
                                                            <Heading w={'full'} size={'sm'}>
                                                                  sjadjsh
                                                            </Heading>
                                                            <Text>{12}</Text>

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
                                                                          <Text>12</Text>
                                                                   </View>
                                                            </Container>
                                                     </Flex>
                                              </View>
                                       </View>
                                </TouchableOpacity>

                 </Flex>



           </View>)
};

export default Cart;

const styles = StyleSheet.create({
       container: {
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'white',
       },
       text: {
              fontFamily: 'Poppins',
       },
       textContainer: {
              padding: 16,
       },
       iconWrapper: {
              margin: 7,
              marginLeft: 15,
       },
       SearchbarContainer: {
              height: 40,
       },
       Heading: {
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 18,
              lineHeight: 24,
              color:"black",
              padding:5
       },
       headingContainer: {
              marginLeft:15,
              marginRight:15,
              marginBottom:15,
              display: 'flex',
              justifyContent:"space-between",
              flexDirection: 'row',
       },
       itemContainer:{

              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              backgroundColor: '#E3E7FF',
       },
       LiveContainer: {
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              marginTop: 10,
       },
       Imagewrapper: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 15,
              marginRight: 15,
              height:160,
              borderRadius: 8,
              backgroundColor:"#E3E7FF"
       },
       ImageContainer: {

              width: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              borderRadius: 8,

       },
       ImageDiv: {
              backgroundColor:"#FFFFFF",
              margin:30,
              width: 100,
              height: 100,

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
