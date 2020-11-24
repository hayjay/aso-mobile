import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const CustomInput = ({ containerStyle = {}, value, ...inputProps }) => {
  return (
    <View>
      <TextInput
        value={value}
        style={[styles.input, containerStyle]}
        {...inputProps}
      />
    </View>
  );
};

export default CustomInput;
