import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Pin = (props: { pin: { image: any; title: any } }) => {
  const [ratio, setRatio] = useState(1);

  const { image, title, id } = props.pin;

  const onLike = () => {};
  const navigation = useNavigation();

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const goToPinPage = () => {
    navigation.navigate('Pin', { id });
  };

  return (
    <Pressable style={styles.pin} onPress={goToPinPage}>
      <View>
        <Image
          style={[styles.image, { aspectRatio: ratio }]}
          source={{
            uri: image,
          }}
        />
        <TouchableOpacity onPress={onLike} style={styles.heartBtn}>
          <AntDesign name='hearto' size={20} color='black' />
        </TouchableOpacity>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  pin: {
    width: '100%',
    padding: 4,
  },
  image: {
    width: '100%',

    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    lineHeight: 22,
    color: '#181818',
  },
  heartBtn: {
    backgroundColor: '#d3cfd4',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Pin;
