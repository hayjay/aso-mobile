import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';

import styles from './styles';
import CustomHeader from '../../components/CustomHeader';
import SelectionGroup from '../../components/SelectionGroup';
import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';
import UploadButton from '../../components/UploadButton';

const AddProperty = () => {
  const [purpose, setPurpose] = useState({});
  const [propertyType, setPropertyType] = useState({});
  const purposeOptions = [
    {
      value: 'For Sale',
    },
    {
      value: 'For Rent',
    },
    {
      value: 'Sale/Rent by ASO',
    },
    {
      value: 'Sale/Rent by Owner',
    },
  ];

  const propertyTypeOptions = [
    { label: '-- Property type --', value: '' },
    { label: 'Land', value: 'land' },
    { label: 'Residential building', value: 'residential building' },
  ];

  const uploadDocument = async () => {
    const document = await DocumentPicker.getDocumentAsync();
  };

  return (
    <>
      <CustomHeader title="Add Property" />
      <ScrollView>
        <View style={styles.body}>
          <SelectionGroup
            selected={purpose.value}
            onSelect={setPurpose}
            options={purposeOptions}
          />
          <View style={styles.halfInputsContainer}>
            <DropDownPicker
              items={propertyTypeOptions}
              placeholder="Property type"
              defaultValue=""
              containerStyle={styles.dropdownContainer}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              onChangeItem={(item) =>
                setPropertyType({
                  value: item.value,
                })
              }
            />
            <DropDownPicker
              items={propertyTypeOptions}
              placeholder="Property type"
              defaultValue="land"
              containerStyle={styles.dropdownContainer}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              onChangeItem={(item) =>
                setPropertyType({
                  value: item.value,
                })
              }
            />
            <DropDownPicker
              items={propertyTypeOptions}
              placeholder="Property type"
              defaultValue="land"
              containerStyle={styles.dropdownContainer}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              onChangeItem={(item) =>
                setPropertyType({
                  value: item.value,
                })
              }
            />
            <DropDownPicker
              items={propertyTypeOptions}
              placeholder="Property type"
              defaultValue="land"
              containerStyle={styles.dropdownContainer}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              onChangeItem={(item) =>
                setPropertyType({
                  value: item.value,
                })
              }
            />
            <CustomInput
              containerStyle={styles.halfInput}
              placeholder="Parking space"
              width="48%"
            />
            <CustomInput
              containerStyle={styles.halfInput}
              placeholder="Square foot"
              width="48%"
            />
            <CustomInput
              containerStyle={styles.halfInput}
              placeholder="Price range"
              width="48%"
            />
            <CustomInput
              containerStyle={styles.halfInput}
              placeholder="Year built"
              width="48%"
            />
          </View>
          <CustomInput
            containerStyle={styles.halfInput}
            type="textArea"
            label="Property address"
          />
          <CustomInput
            containerStyle={styles.halfInput}
            type="textArea"
            label="Property description"
          />
          <CustomInput
            containerStyle={styles.halfInput}
            type="textArea"
            label="Enter other amenities"
          />
          <UploadButton
            onPress={uploadDocument}
            label="Add property image and other documents"
          />
          <Button containerStyle={styles.actionButton} text="Sumbit Property" />
        </View>
      </ScrollView>
    </>
  );
};

export default AddProperty;
