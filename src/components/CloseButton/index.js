import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CloseButton = ({ containerStyle, iconStyle, onPress }) => {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
      <Ionicons style={[styles.icon, iconStyle]} name="md-close" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
});

export default CloseButton;
