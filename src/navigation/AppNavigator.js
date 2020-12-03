import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/onboarding';
import LoginScreen from '../screens/authentication/Login';
import RegisterScreen from '../screens/authentication/Register';
import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/Profile';
import CitiesScreen from '../screens/home/CitiesScreen';
import MyPropertiesScreen from '../screens/MyProperties';
import PropertyDetailsScreen from '../screens/property/PropertyDetailsScreen';
import ManageFinanceScreen from '../screens/ManageFinance';
import MyWishlist from '../screens/MyWishlist';

const Stack = createStackNavigator();

function stackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Cities" component={CitiesScreen} />
        <Stack.Screen name="MyProperties" component={MyPropertiesScreen} />
        <Stack.Screen
          name="PropertyDetails"
          component={PropertyDetailsScreen}
        />
        <Stack.Screen name="ManageFinance" component={ManageFinanceScreen} />
        <Stack.Screen name="MyWishlist" component={MyWishlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default stackNavigator;
