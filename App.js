import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const isLoaded = fontsLoaded;

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
