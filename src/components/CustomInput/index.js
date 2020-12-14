import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import CustomText from '../CustomText';
import styles from './styles';

const CustomInput = ({
  errorMessage,
  containerStyle = {},
  value,
  toggleVisibility,
  type,
  width,
  label,
  ...inputProps
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(
    toggleVisibility || inputProps.secureTextEntry,
  );

  const iconLeft = type === 'search' && (
    <Feather name="search" size={24} color="#aaa" style={styles.searchIcon} />
  );
  const typeToStyles = {
    search: {
      borderWidth: 1,
      borderRadius: 6,
      borderColor: '#ccc',
      paddingLeft: 10,
    },
  };
  const typeStyle = typeToStyles[type] || {};

  return (
    <View style={[containerStyle, { width }]}>
      {label && <CustomText style={styles.label}>{label}</CustomText>}
      <View style={[styles.inputContainer, typeStyle]}>
        {iconLeft}
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
