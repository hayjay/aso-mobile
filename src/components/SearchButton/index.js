import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchButton = ({ containerStyle, iconStyle, onPress }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons style={[styles.icon, iconStyle]} name="md-search" />
    </View>
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
