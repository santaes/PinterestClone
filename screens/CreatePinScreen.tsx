import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

export default function CreatePinScreen() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,

      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const onSubmit = () => {};

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.button}>
          <Feather
            name='upload'
            size={22}
            color='black'
            style={{ marginLeft: 5 }}
          />
          <Text style={styles.textBtn}> Upload your Pin</Text>
        </View>
      </TouchableOpacity>
      {image && (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder='Title...'
            value={title}
            onChangeText={setTitle}
          />
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.button}>
              <Text style={styles.textBtn}> SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
    marginVertical: 10,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#008cff',
    padding: 8,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
});
