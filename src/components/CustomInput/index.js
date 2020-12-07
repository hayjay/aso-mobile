import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CustomText from '../CustomText';
import styles from './styles';

const CustomInput = ({
  errorMessage,
  containerStyle = {},
  value,
  toggleVisibility,
  ...inputProps
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(
    toggleVisibility || secureTextEntry,
  );
  return (
    <View style={containerStyle}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#aaa"
          value={value}
          style={styles.input}
          {...inputProps}
          secureTextEntry={secureTextEntry}
        />
        {toggleVisibility && (
          <Pressable
            style={styles.eyeButton}
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Ionicons
              name={secureTextEntry ? 'md-eye' : 'md-eye-off'}
              size={24}
              color="#aaa"
            />
          </Pressable>
        )}
      </View>
      {errorMessage && (
        <CustomText style={styles.errorMessage}>{errorMessage}</CustomText>
      )}
    </View>
  );
};

export default CustomInput;
