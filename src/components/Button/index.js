import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
      rippleColor: '#a52e29',
    },
    redOutline: {
      textColor: colors.red,
      backgroundColor: 'transparent',
      borderColor: colors.red,
      rippleColor: '#c34641',
    },
    grey: {
      textColor: '#3b3d3d',
      backgroundColor: '#dcdcdc',
      borderColor: '#dcdcdc',
      rippleColor: '#bbbbbb',
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
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
        },
        containerStyle,
      ]}>
      <Pressable
        android_ripple={rippleConfig}
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          fixedHeight,
          {
            opacity: pressed && Platform.OS !== 'android' ? 0.7 : 1,
          },
        ]}>
        {(iconLeft && icons[iconLeft]) || iconLeft}
        <CustomText style={[styles.text, { color: textColor }]}>
          {text}
        </CustomText>
      </Pressable>
    </View>
  );
};

export default Button;
