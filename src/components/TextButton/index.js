import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CustomText from '../CustomText';

const TextButton = ({
  text,
  onPress = () => {},
  showArrow = true,
  color = '#313131',
  containerStyle = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        { opacity: pressed ? 0.7 : 1 },
      ]}>
      <CustomText style={[styles.text, { color }]}>{text}</CustomText>
      {showArrow && (
        <Ionicons
          name="md-arrow-forward"
          style={styles.icon}
          size={24}
          color={color}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 16,
  },
  icon: {
    paddingLeft: 5,
  },
});

export default TextButton;
