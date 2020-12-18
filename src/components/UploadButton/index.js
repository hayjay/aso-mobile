import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomText from '../CustomText';

const UploadButton = ({ label = 'upload', onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.7 : 1 },
      ]}>
      <Ionicons name="md-cloud-upload" style={styles.icon} />
      <CustomText style={styles.text}>{label}</CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    borderColor: '#aaa',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    paddingLeft: 15,
    maxWidth: 250,
  },
  icon: {
    color: 'grey',
    fontSize: 40,
  },
});

export default UploadButton;
