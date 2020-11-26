import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    Icomoon: require('./assets/fonts/icomoon.ttf'),
  });

  // Add list of dependencies
  const isLoaded = fontsLoaded;

  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <AppNavigator />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
