import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from '../CustomText';

const RateCard = ({ containerStyle, mainText }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText>30 - Year Fixed</CustomText>
      <CustomText style={styles.mainInfo}>{mainText}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5F7',
    borderRadius: 6,
    padding: 15,
    alignItems: 'center',
  },
  mainInfo: {
    color: '#AD09BB',
    fontSize: 24,
    marginTop: 5,
  },
});

export default RateCard;
