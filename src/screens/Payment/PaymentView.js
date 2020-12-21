import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';

const PaymentView = ({ navigation, route }) => {
  const { paymentUrl, reference } = route.params;
  return (
    <View style={styles.container}>
      <CustomHeader title="Payment" />
      <WebView source={{ uri: paymentUrl }} style={{ flex: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PaymentView;
