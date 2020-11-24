import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    color: '#313131',
    letterSpacing: 0.4,
  },
});

export default CustomText;
