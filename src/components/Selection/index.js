import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../style/variables';
import { Pressable, StyleSheet, View } from 'react-native';
import CustomText from '../CustomText';

const Selection = ({
  marked = false,
  type = 'radio',
  text,
  onPress,
  containerStyle,
}) => {
  const iconNames = {
    checkbox: {
      false: 'checkbox-blank-outline',
      true: 'checkbox-marked',
    },
    radio: {
      false: 'radiobox-blank',
      true: 'radiobox-marked',
    },
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        containerStyle,
        { opacity: pressed ? 0.7 : 1 },
      ]}>
      <MaterialCommunityIcons
        name={iconNames[type][marked]}
        size={26}
        color={marked ? colors.red : 'grey'}
      />
      {text && <CustomText style={styles.text}>{text}</CustomText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
    color: 'grey',
    fontSize: 16,
  },
});

export default Selection;
