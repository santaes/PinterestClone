import { SafeAreaView } from 'react-native-safe-area-context';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';

import { View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MasonryList pins={pins} />
    </SafeAreaView>
  );
}
