import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchButton = ({ containerStyle, iconStyle }) => {
  return (
    <Pressable style={[styles.container, containerStyle]}>
      <Ionicons style={[styles.icon, iconStyle]} name="md-search" />
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

export default SearchButton;
