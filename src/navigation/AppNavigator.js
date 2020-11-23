import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreenOne from '../screens/onboarding/OnboardingScreenOne';
import OnboardingScreenTwo from '../screens/onboarding/OnboardingScreenTwo';
import OnboardingScreenThree from '../screens/onboarding/OnboardingScreenThree';

const Stack = createStackNavigator();

function stackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='OnboardingOne'
          component={OnboardingScreenOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='OnboardingTwo'
          component={OnboardingScreenTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='onbaordingThree'
          component={OnboardingScreenThree}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default stackNavigator;
