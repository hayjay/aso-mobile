import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

const PlusButton = ({ onPress }) => {
  return (
    <Pressable style={styles.addButton} onPress={onPress}>
      <Ionicons name="md-add" style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.red,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: spaces.appSpacing01,
    bottom: 20,

    elevation: 3,

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  icon: {
    color: '#fff',
    fontSize: 26,
  },
});

export default PlusButton;
