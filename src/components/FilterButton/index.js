import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CustomIcon from '../CustomIcon';

const FilterButton = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <CustomIcon name="menu" style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e6b72',
    borderRadius: 8,
    width: 47,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
});

export default FilterButton;
