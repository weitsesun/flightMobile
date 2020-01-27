import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ImagePickerComponent() {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required.')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) return

    setSelectedImage({ localUri: pickerResult.uri })
  }
  return (
    <>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.welcomeButton}
      >
        <Text style={styles.welcomeButtonText}>Choose a picture</Text>

      </TouchableOpacity>
      {
        selectedImage &&
        <Image
          source={{ uri: selectedImage.localUri }}
          style={{ width: 200, height: 200, resizeMode: 'cover' }}
        />
      }
    </>
  )
}


const styles = StyleSheet.create({
  welcomeButton: {
    backgroundColor: 'rgb(200, 200, 90)',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  welcomeButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  }
});