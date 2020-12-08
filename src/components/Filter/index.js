import React from 'react';
import { Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

import Button from '../Button';
import CustomInput from '../CustomInput';
import CustomText from '../CustomText';
import styles from './styles';
import TypeSelector from '../TypeSelector';

const Filter = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.header}>
        <Pressable style={styles.closeButton} onPress={closeModal}>
          <Ionicons name="md-close" size={30} color="#fff" />
        </Pressable>
        <CustomText style={styles.title} type="info-title">
          Filter
        </CustomText>
      </View>
      <View style={styles.container}>
        <CustomText type="info-title">Property Type</CustomText>
        <View style={styles.typeSelect}>
          <View style={styles.typeItem}>
            <TypeSelector text="All properties" />
          </View>
          <View style={styles.typeItem}>
            <TypeSelector text="All properties" />
          </View>
          <View style={styles.typeItem}>
            <TypeSelector text="All properties" selected />
          </View>
          <View style={styles.typeItem}>
            <TypeSelector text="All properties" />
          </View>
        </View>
        <CustomText type="info-title">Price Range</CustomText>
        <CustomInput placeholder="Enter price range" />
        <Button containerStyle={styles.actionButton} text="Search property" />
      </View>
    </Modal>
  );
};

export default Filter;
