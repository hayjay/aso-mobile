import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';
import BackButton from '../BackButton';

const CustomHeader = ({ title, headerTitleAlign = 'left' }) => {
  return (
    <View>
      <StatusBar translucent={false} style="light" backgroundColor="#000" />
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <BackButton containerStyle={styles.backButton} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
