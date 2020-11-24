import React from 'react';
import { View, TextInput } from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';

const CustomInput = ({
  errorMessage,
  containerStyle = {},
  value,
  ...inputProps
}) => {
  return (
    <View style={containerStyle}>
      <TextInput value={value} style={styles.input} {...inputProps} />
      {errorMessage && (
        <CustomText style={styles.errorMessage}>{errorMessage}</CustomText>
      )}
    </View>
  );
};

export default CustomInput;
