import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

import Button from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import { colors, spaces } from '../../style/variables';

const Affordability = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const calculate = () => {
    setIsModalActive(true);
  };

  const checkProperties = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <CustomHeader title="Affordability" />
      <View style={styles.bodyContainer}>
        <View style={styles.infoSection}>
          <CustomText type="info-title" style={styles.sectionTitle}>
            Affordability Calculator
          </CustomText>
          <CustomText type="info-body">
            As the downturn from coronavirus pandemic squeezes the economy,
            higher-end and luxury.
          </CustomText>
        </View>
        <CustomText style={styles.sectionTitle} type="info-title">
          How Much Can I Afford?
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
          <Button
            onPress={calculate}
            containerStyle={styles.actionButton}
            text="Calculate"
          />
        </View>
        <Modal
          isVisible={isModalActive}
          onBackdropPress={() => setIsModalActive(false)}>
          <View style={styles.modalContent}>
            <CustomText style={styles.centreAlign} type="info-body">
              You can afford a house up to
            </CustomText>
            <CustomText type="info-title" style={styles.modalMainText}>
              ₦56,000,000
            </CustomText>
            <CustomText style={styles.centreAlign} type="info-body">
              Based on your income, a property at this price should fit
              comfortably within your budget.
            </CustomText>
            <Button
              onPress={checkProperties}
              containerStyle={styles.modalButton}
              text="Check Properties"
            />
          </View>
        </Modal>
      </View>
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
  infoSection: {
    marginBottom: 20,
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  modalMainText: {
    fontSize: 24,
    color: colors.red,
    paddingVertical: 20,
    textAlign: 'center',
  },
  centreAlign: {
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 20,
  },
});

export default Affordability;
