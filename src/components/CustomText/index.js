import React from 'react';
import { StyleSheet, Text } from 'react-native';

const CustomText = ({ children, style, type, ...props }) => {
  const typeToStyle = {
    'info-title': styles.infoTitle,
    'info-body': styles.infoBody,
  };
  return (
    <Text style={[styles.text, typeToStyle[type], style]} {...props}>
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
  infoTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 8,
    color: '#424445',
  },
  infoBody: {
    lineHeight: 24,
    fontSize: 16,
    color: '#5a5b5c',
  },
});

export default CustomText;
