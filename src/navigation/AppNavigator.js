import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
import ForgotPassword from '../screens/authentication/ForgotPassword';
import BuyScreen from '../screens/home/BuyScreen';
import RentScreen from '../screens/home/RentScreen';
import FeaturedScreen from '../screens/home/FeaturedScreen';
import CustomDrawerContent from './DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Rent" component={RentScreen} />
        <Stack.Screen name="Featured" component={FeaturedScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function stackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="ForgotPassword"
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
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Rent" component={RentScreen} />
        <Stack.Screen name="Featured" component={FeaturedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
