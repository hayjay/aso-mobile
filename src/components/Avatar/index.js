import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Avatar = ({ imageUrl, size = 90, borderWidth = 2 }) => {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, borderWidth },
      ]}>
      {imageUrl ? (
        <Image style={styles.image} source={{ uri: imageUrl }} />
      ) : (
        <Ionicons name="md-person" size={(size * 2) / 3} color="#ddd" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    backgroundColor: '#ccc',
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
