import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ containerStyle }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={containerStyle} onPress={() => navigation.goBack()}>
      <Ionicons style={styles.icon} name="md-arrow-back" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: '#fff',
  },
});

export default BackButton;
