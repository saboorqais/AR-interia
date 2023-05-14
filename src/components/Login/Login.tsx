import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Box,
  Button,
  Container,
  FormControl,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  Stack,
  VStack,
  extendTheme,
} from 'native-base';
import Logo from '../../../assets/images/Logo.png';
import IconM from 'react-native-vector-icons/MaterialIcons';

export default function Login({ navigation }: any) {
  const [show, setShow] = React.useState(false);
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors, name: 'Name is required' });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors, name: 'Name is too short' });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) navigation.navigate('Home', { screen: 'HomeScreen' });
    else console.log('Validation Failed');
  };
  return (
    <Stack space={4} w="100%" alignItems="center" backgroundColor={'white'}>
      <Container>
        <Image mt={20} source={Logo} alt={'img'} />
      </Container>
      <VStack width="90%" mx="3" maxW="300px">
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label
            _text={{
              bold: true,
            }}>
            <Text>Name</Text>
          </FormControl.Label>
          <Input
            style={{ color: "black" }}
            placeholder="Name"
            onChangeText={value => setData({ ...formData, name: value })}
          />
          {'name' in errors ? (
            <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label
            _text={{
              bold: true,
            }}>
            <Text>Password</Text>
          </FormControl.Label>
          <Input
            type="password"
            style={{ color: "black" }}
            placeholder="password"
            onChangeText={value => setData({ ...formData, name: value })}
          />
          {'name' in errors ? (
            <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>
          )}
        </FormControl>
        <Button onPress={onSubmit} mt="5" variant={'interia'}>
          Submit
        </Button>
      </VStack>
    </Stack>
  );
}
