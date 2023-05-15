import {StyleSheet, TouchableOpacity, View} from 'react-native'
import React, {useContext} from 'react'
import {Center, Container, Heading, Image, VStack, Text, HStack, Badge, Button, useToast, Box} from 'native-base';
import image from '../../../assets/images/sofa.png'
import {CartContext} from "../../Utils/Context/cartContext";

const ProductPage = ({route, navigation}) => {
    const toast = useToast();
    var data = route.params.item
    const context = useContext(CartContext)
    console.log(context)
    console.log(data)
    return (
        <VStack flex={1} bg="white" space={4} alignItems="center" w={"full"}>
            <Container w="full" h="200"
                       mt={10}
                       style={{backgroundColor: "#F3F3F3"}}
                       rounded={"md"}
                       alignItems="center"
                       justifyContent={"center"}
            >
                <Image
                    source={{uri: data.image}}
                    alt="Alternate Text"
                    size="70%"
                    backgroundColor={'#F3F3F3'}
                    borderRadius={8}
                />

            </Container>
            <VStack pr={35} pl={35}>
                <Heading color={"#313131"}>Basic Info</Heading>
                <Text color={"#959595"}>{data.description}</Text>
            </VStack>
            <Container w="full" h="60"
                       style={{backgroundColor: "#F3F3F3"}}
                       rounded={"md"}
                       alignItems="center"
                       justifyContent={"center"}
            >
                <HStack w={"full"} justifyContent={"space-between"} pr={2} pl={2}>
                    <Heading size={"md"} color={"#313131"}>Available Colors</Heading>
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
                </HStack>


            </Container>
            <Container w="full" h="60"
                       style={{backgroundColor: "#F3F3F3"}}
                       rounded={"md"}
                       alignItems="center"
                       justifyContent={"center"}
            >
                <HStack w={"full"} justifyContent={"space-between"} pr={2} pl={2}>
                    <Heading size={"md"} color={"#313131"}>Basic Price</Heading>
                    <View style={styles.bottomContainer}>
                        <Text color={"#313131"}>{data.price}
                        </Text>
                    </View>
                </HStack>


            </Container>
            <View style={styles.LiveContainer}>
                <TouchableOpacity onPress={() => {
                    toast.show({
                        avoidKeyboard: true,
                        duration: 2000,
                        render: () => {
                            return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                                Item Added to Cart
                            </Box>;
                        }
                    });
                    console.log("This log is from Product Page")
                    console.log(context.cartItems)
                    context.setCartItems([...context.cartItems,data])





                }}>
                    <Button _text={{color: 'white'}} mt={4} variant="interia">
                        Add to Cart
                    </Button>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {()=>{
                    navigation.navigate("ARView")


                }


                }
                >
                    <Button _text={{color: 'white'}} mt={4} variant="interia">
                        Open AR Designer
                    </Button>

                </TouchableOpacity>

            </View>


        </VStack>

    )
}

export default ProductPage


const styles = StyleSheet.create({
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
    },
    LiveContainer: {
        width: "100%",
        paddingLeft: 35,
        paddingRight: 35,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    Heading: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
    },
});
