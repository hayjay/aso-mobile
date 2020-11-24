import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Zocial } from '@expo/vector-icons';

import { colors } from '../../style/variables';
import CustomText from '../CustomText';
import styles from './styles';

const Button = ({
  containerStyle,
  type = 'red',
  text,
  iconLeft,
  onPress = () => null,
}) => {
  const typeStyle = {
    red: {
      backgroundColor: colors.red,
      textColor: '#FFF',
      borderColor: colors.red,
      rippleColor: 'red',
    },
    redOutline: {
      textColor: colors.red,
      backgroundColor: 'transparent',
      borderColor: colors.red,
      rippleColor: '#90231e',
    },
    grey: {
      textColor: '#3b3d3d',
      backgroundColor: '#dcdcdc',
      borderColor: '#dcdcdc',
      rippleColor: 'red',
    },
  };

  const icons = {
    google: (
      <Ionicons name="logo-google" style={[styles.icon, styles.leftIcon]} />
    ),
    facebook: (
      <MaterialCommunityIcons
        name="facebook"
        style={[styles.icon, styles.leftIcon]}
      />
    ),
  };

  const { borderColor, textColor, backgroundColor, rippleColor } = typeStyle[
    type
  ];
  const fixedHeight = iconLeft ? { height: 50, paddingVertical: 0 } : {};

  const rippleConfig = {
    color: rippleColor,
  };

  return (
    <Pressable
      android_ripple={rippleConfig}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor,
          borderColor,
          ...fixedHeight,
          opacity: pressed ? 0.7 : 1,
        },
        containerStyle,
      ]}>
      {(iconLeft && icons[iconLeft]) || iconLeft}
      <CustomText style={[styles.text, { color: textColor }]}>
        {text}
      </CustomText>
    </Pressable>
  );
};

export default Button;
