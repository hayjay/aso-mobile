import React from 'react';
import { Pressable } from 'react-native';

import { colors } from '../../style/variables';
import CustomText from '../CustomText';
import styles from './styles';

const Button = ({
  containerStyle,
  type = 'red',
  text,
  onPress = () => null,
}) => {
  const typeStyle = {
    red: {
      backgroundColor: colors.red,
      textColor: '#FFF',
      borderColor: colors.red,
    },
    redOutline: {
      textColor: colors.red,
      backgroundColor: 'transparent',
      borderColor: colors.red,
    },
  };

  const { borderColor, textColor, backgroundColor } = typeStyle[type];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor, borderColor, opacity: pressed ? 0.7 : 1 },
        containerStyle,
      ]}>
      <CustomText style={[styles.text, { color: textColor }]}>
        {text}
      </CustomText>
    </Pressable>
  );
};

export default Button;
