import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import Button from '../Button';
import CustomInput from '../CustomInput';
import CustomText from '../CustomText';
import styles from './styles';
import TypeSelector from '../TypeSelector';
import DropdownSelect from '../DropdownSelect';

const Filter = ({ isVisible, closeModal }) => {
  const [selectedBedroom, setSelectedBedroom] = useState('');
  const bedroomOptions = [
    { value: '1 bedroom - 2 bedrooms' },
    { value: '2 bedroom - 3 bedrooms' },
    { value: '3 bedroom - 4 bedrooms' },
  ];
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        style={styles.scrollView}>
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

          <CustomText type="info-title">Bedroom</CustomText>
          <DropdownSelect
            selectedItem={selectedBedroom}
            onSelect={setSelectedBedroom}
            data={bedroomOptions}
            label="Minimum - Maximum"
          />
          <Button containerStyle={styles.actionButton} text="Search property" />
        </View>
      </KeyboardAwareScrollView>
    </Modal>
  );
};

export default Filter;
