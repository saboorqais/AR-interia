import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {extendTheme, Spacer, Image, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
type Props = {
  title: string;
};

export default function Category({path, title, categoryId}: Props) {
  console.log(path);
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Product', {
            categoryId: categoryId,
            title: title,
          });
        }}>
        <View style={styles.Imagewrapper}>
          <View>
            <Image source={{uri:path}} alt="Alternate Text" size="md" />
            <Text>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Spacer />
    </>
  );
}

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
  ImageContainer: {
    margin: 16,
    flex: 1,
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
