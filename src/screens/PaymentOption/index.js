import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Button from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import ProductGroup from '../../components/ProductGroup';
import { spaces } from '../../style/variables';

const initialLayout = { width: Dimensions.get('window').width };

const PaymentOption = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mortgage', title: 'Mortgage' },
    { key: 'instalment', title: 'Instalment' },
  ]);

  const mortgageContent = () => {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={false}>
        <ProductGroup
          title="Mortgage Rate"
          actionButton={{ text: 'See All' }}
          type="rate"
          data={rateData}
          horizontal
        />
        <View style={styles.bodyContainer}>
          <CustomText type="info-title" style={styles.sectionTitle}>
            Mortgage Calculator
          </CustomText>
          <CustomText type="info-body">
            As the downturn from coronavirus pandemic squeezes the economy,
            higher-end and luxury.
          </CustomText>
          <View style={styles.calcContainer}>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Price"
              />
            </View>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Net salary"
              />
            </View>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Down payment"
              />
            </View>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Tenure"
              />
            </View>
            <Button containerStyle={styles.actionButton} text="Calculate" />
          </View>
          <CustomText style={styles.sectionTitle} type="info-title">
            Mortgage Companies
          </CustomText>
          <CustomText type="info-body">
            As the downturn from coronavirus pandemic squeezes the economy,
            higher-end and luxury.
          </CustomText>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  const instalmentContent = () => {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.bodyContainer}>
          <CustomText type="info-title" style={styles.sectionTitle}>
            Instalment Calculator
          </CustomText>
          <CustomText type="info-body">
            As the downturn from coronavirus pandemic squeezes the economy,
            higher-end and luxury.
          </CustomText>
          <View style={styles.calcContainer}>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Price"
              />
            </View>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Net salary"
              />
            </View>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Down payment"
              />
            </View>
            <View style={styles.calcInput}>
              <CustomInput
                containerStyle={styles.calcInput}
                placeholder="Tenure"
              />
            </View>
            <Button containerStyle={styles.actionButton} text="Calculate" />
          </View>
          <CustomText style={styles.sectionTitle} type="info-title">
            Instalment Payment Plan
          </CustomText>
          <CustomText type="info-body">
            As the downturn from coronavirus pandemic squeezes the economy,
            higher-end and luxury.
          </CustomText>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  const renderScene = SceneMap({
    mortgage: mortgageContent,
    instalment: instalmentContent,
  });

  const rateData = [
    {
      mainText: '3.08%',
    },
    {
      mainText: '3.08%',
    },
    {
      mainText: '3.08%',
    },
    {
      mainText: '3.08%',
    },
    {
      mainText: '3.08%',
    },
    {
      mainText: '3.08%',
    },
  ];

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#131516' }}
      />
    );
  };

  return (
    <>
      <CustomHeader title="Payment Option" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: spaces.appSpacing01,
  },
  sectionTitle: {
    marginTop: 10,
  },
  calcContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  calcInput: {
    width: '48%',
    marginTop: 5,
  },
  actionButton: {
    marginTop: 20,
    marginBottom: 20,
    width: '48%',
  },
});

export default PaymentOption;
