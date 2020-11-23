import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OnboardingScreenOne = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen One</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreenOne;
