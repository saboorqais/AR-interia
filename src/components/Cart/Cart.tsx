import React, {useContext, useState} from "react";
import {ScrollView, TouchableOpacity, Alert, TextInput} from "react-native";
import {StyleSheet} from "react-native";
import {
    Badge,
    Container,
    Flex,
    Heading,
    Image,
    View,
    Text,
    Divider,
    Button,
    VStack,
    Modal,
    FormControl, Input
} from "native-base";
import img from '../../../assets/images/shaheer.jpg'
import Icon from 'react-native-vector-icons/AntDesign';
import {CartContext} from "../../Utils/Context/cartContext";

const Cart = () => {
    const {cartItems, setCartItems} = useContext(CartContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [address, setAddress] = useState({
        streetAdress:"",
        fullAddress:""
    });
    console.log(cartItems)
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);


    console.log("this log is fromm Cart")
    const [totalsub, setTotalSub] = useState(0)

    function calculateSubtotal() {
        var total = 0
        cartItems.map(item => {
            total = total + parseInt(item.price)


        })
        return total
    }

    function calculateTotal() {


        var total = 0
        cartItems.map(item => {
            total = total + parseInt(item.price)


        })
        return total + 80
    }


    return (<><Modal
        isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
        <Modal.Content m={0}>
            <View
                h={250}
                m={10}

            >
                <View mt={3}>
                    <Heading size={"md"}>Street Address</Heading>
                    <TextInput

                        onChangeText={(value)=>{
                            setAddress((prev)=>{
                                return {
                                    fullAddress: prev.fullAddress,
                                    streetAdress: value
                                }
                            })
                        }}
                    />
                </View>
                <View mt={3}>
                    <Heading size={"md"}>Address</Heading>
                    <TextInput

                        onChangeText={(value)=>{
                            setAddress((prev)=>{
                                return {
                                    fullAddress: value,
                                    streetAdress: prev.streetAdress
                                }
                            })
                        }}
                    />
                </View>
                <View mt={3}>
                    <Button
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        variant={"interia"}>Save</Button>

                </View>


            </View>

        </Modal.Content>

    </Modal>

        <ScrollView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text fontSize="lg" style={{color: "black"}}>Items</Text>
                <Text fontSize="lg" style={{color: "black"}}>{cartItems.length} Items</Text>
            </View>
            <Flex direction="column"

            >
                {cartItems && cartItems?.map((item, key) => (
                    <View style={styles.Imagewrapper} key={key} mt={5}>
                        <View style={styles.ImageContainer}>
                            <Image
                                source={{uri: item.image}}
                                alt="Alternate Text"
                                size="xl"
                                backgroundColor={'white'}
                                borderRadius={8}
                                ml={4}
                            />

                            <Flex
                                m={0}
                                ml={5}
                                direction={'column'}
                                style={styles.InformationContainer}>
                                <View>
                                    <Heading w={'full'} size={'md'} style={{color: "black"}}>
                                        {item.name}
                                    </Heading>
                                    <Text style={{fontSize: 18, color: "black"}}>PKR {item.price}</Text>

                                </View>

                                <Flex mt={50} direction={'row'} m={0}>
                                    <View style={styles.bottomContainer}>
                                        <TouchableOpacity>
                                            <Badge
                                                rounded={'full'}
                                                height={7}
                                                width={7}
                                                style={{backgroundColor: "white"}}
                                                colorScheme="white"
                                                _text={{
                                                    color: "#546CFF",
                                                    fontSize: 12,
                                                    fontWeight: 800
                                                }}
                                            >
                                                +
                                            </Badge>
                                        </TouchableOpacity>

                                        <Text
                                            style={{
                                                color: "black",
                                                fontSize: 18
                                            }}

                                        >1</Text>
                                        <TouchableOpacity>
                                            <Badge
                                                rounded={'full'}
                                                height={7}
                                                width={7}
                                                style={{backgroundColor: "white"}}
                                                colorScheme="white"
                                                _text={{
                                                    color: "#546CFF",
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                }}
                                            >
                                                -
                                            </Badge>
                                        </TouchableOpacity>


                                    </View>
                                    <View ml={85}>
                                        <TouchableOpacity>
                                            <Badge
                                                rounded={'full'}
                                                height={7}
                                                width={7}
                                                style={{backgroundColor: "white"}}
                                                colorScheme="white"
                                                _text={{
                                                    color: "#546CFF",
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                }}
                                            >
                                                <Icon name={'delete'} color={"red"}/>
                                            </Badge>
                                        </TouchableOpacity>

                                    </View>
                                </Flex>
                            </Flex>

                        </View>
                    </View>
                ))}

                <View mt={10} style={styles.headingContainer}>
                    <Text ml={2} fontSize="lg" style={{color: "black"}}>Payment Summary</Text>

                </View>
                <View ml={5} mr={5} bg={"#F3F3F3"} h={124}>
                    <Flex direction={"column"}>
                        <Flex mt={2} direction={"row"} justify={"space-between"}>
                            <Text ml={2} mr={2} fontSize="lg" style={{color: "black"}}>Subtotal</Text>
                            <Text ml={2} mr={2} fontSize="lg" style={{color: "black"}}>PKR {calculateSubtotal()}</Text>

                        </Flex>
                        <Flex mt={2} direction={"row"} justify={"space-between"}>
                            <Text ml={2} mr={2} fontSize="lg" style={{color: "black"}}>Deliver Cost</Text>
                            <Text ml={2} mr={2} fontSize="lg" style={{color: "black"}}>PKR 80</Text>

                        </Flex>
                        <View mr={2} ml={2}>
                            <Divider my="2"/>
                        </View>

                        <Flex mt={2} direction={"row"} justify={"space-between"}>
                            <Text ml={2} mr={2} fontSize="lg" style={{color: "black"}}>Total Cost</Text>
                            <Text ml={2} mr={2} fontSize="lg" style={{color: "black"}}>PKR {calculateTotal()}</Text>

                        </Flex>
                    </Flex>

                </View>
                <View mt={10} style={styles.headingContainer}>
                    <Text ml={2} fontSize="lg" style={{color: "black"}}>Deliver To</Text>

                </View>
                <View ml={5} mr={5} bg={"#F3F3F3"} h={98}>
                    <Flex direction={'column'}>
                        <Text ml={2} mt={4} fontSize="md" style={{color: "black"}}>{address.streetAdress?address.streetAdress:"None"}</Text>
                        <Flex direction={"row"} justify={"space-between"}>
                            <View w={200}>
                                <Text ml={2} mt={2} fontSize="md" style={{color: "black"}}>{address.fullAddress
                                    ?address.fullAddress:"None"}</Text>
                            </View>
                            <Text onPress={() => {
                                setModalVisible(!modalVisible);
                            }} ml={2} mt={2} mr={2} bold fontSize="md" style={{color: "#546CFF"}}>Change</Text>
                        </Flex>
                    </Flex>
                </View>

                <View mr={5} ml={5}>
                    <TouchableOpacity>
                        <Button onPress={() => {
                            console.log("dsadas")
                        }} h={50} _text={{color: 'white'}} mt={4} variant="interia">
                            Place Order
                        </Button>
                    </TouchableOpacity>
                </View>


            </Flex>


        </ScrollView>
    </>)


};

export default Cart;

const styles = StyleSheet.create({
    modalContainer: {
        height: 100,
        backgroundColor: "red"


    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
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
        color: "black",
        padding: 5
    },
    headingContainer: {
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        display: 'flex',
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    itemContainer: {

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
        height: 160,
        borderRadius: 8,
        backgroundColor: "#E3E7FF"
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
        backgroundColor: "#FFFFFF",
        margin: 30,
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

        gap: 10,
    },
});
