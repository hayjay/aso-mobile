import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CustomText from '../CustomText';
import { colors } from '../../style/variables';

const TypeSelector = ({ selected, text }) => {
  const color = selected ? '#fff' : 'grey';
  const backgroundColor = selected ? colors.red : '#fff';
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Ionicons name="md-done-all" size={22} color={color} />
      <CustomText numberOfLines={2} style={[styles.text, { color }]}>
        {text}
      </CustomText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: '#f8d3d2',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    height: 76,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default TypeSelector;
