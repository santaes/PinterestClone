import { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import pins from '../assets/data/pins';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const PinScreen = () => {
  const [ratio, setRatio] = useState(1);
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const pinId = route.params?.id;

  const pin = pins.find((p) => p.id === pinId);

  useEffect(() => {
    if (pin?.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin?.image]);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  if (!pin) {
    return <Text>Pin Not Found!</Text>;
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'black' }}>
      <View style={styles.root}>
        <Image
          source={{ uri: pin?.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{pin?.title}</Text>
      </View>
      <TouchableOpacity
        onPress={goBack}
        style={[styles.backBtn, { top: insets.top + 10 }]}
      >
        <Ionicons name='chevron-back' size={35} color='white' />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 35,
  },
  backBtn: {
    position: 'absolute',

    left: '3%',
  },
});

export default PinScreen;
