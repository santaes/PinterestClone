import {
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Pin from './Pin';

import pins from '../assets/data/pins';

import { useCallback, useState } from 'react';

const wait = (timeout: number | undefined) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}

const MasonryList = ({ pins }: IMasonryList) => {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 350);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/*   <MasonryList
      data={pins}
      keyExtractor={(item): string => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Pin pin={item} />}
      onRefresh={() => {}}
      onEndReachedThreshold={0.1}
      onEndReached={() => {}}
    /> */}
      {Array.from(Array(numColumns)).map((col, colIndex) => (
        <View style={{ flex: 1 }}>
          {pins
            .filter((item, index) => index % numColumns === colIndex)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default MasonryList;
