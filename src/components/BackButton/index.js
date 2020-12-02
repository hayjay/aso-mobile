import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ containerStyle, iconStyle, onPress }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[styles.container, containerStyle]}
      onPress={onPress || navigation.goBack}>
      <Ionicons style={[styles.icon, iconStyle]} name="md-arrow-back" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
});

export default BackButton;
