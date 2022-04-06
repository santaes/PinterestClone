import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import avatar from '../assets/images/avatar.png';
import MasonryList from '../components/MasonryList';
import pins from '../assets/data/pins';
import { Entypo, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.icons}>
            <TouchableOpacity>
              <Feather
                name='share'
                size={24}
                color='black'
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name='dots-three-horizontal'
                size={24}
                color='black'
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Image source={avatar} style={styles.image} />
          <Text style={styles.title}>Sukharyev Oleksander</Text>
          <Text style={styles.subtitle}>123 Followers | 586 Followings</Text>
        </View>

        <MasonryList pins={pins} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginTop: 10,
  },
  subtitle: {
    color: '#181818',
    fontWeight: '600',
    marginBottom: 10,
  },
  header: {
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
