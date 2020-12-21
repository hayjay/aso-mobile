import React, { useState, useReducer } from 'react';
import { StyleSheet } from 'react-native';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { spaces } from '../../style/variables';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';

import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import TypeSelector from '../../components/TypeSelector';
import CustomFilterHeader from '../../components/CustomFilterHeader';
import * as filterAction from '../../redux/actions/propertyAction';

function propertyTypeReducer(state, { type, payload }) {
  switch (type) {
    case 'SELECT_PROPERTY_TYPE':
      return state.map((propertyType) => {
        return propertyType.text === payload.text
          ? { ...propertyType, selected: true }
          : { ...propertyType, selected: false };
      });
  }
}

const propertyTypes = [
  { text: 'All properties', selected: true },
  { text: 'Home', selected: false },
  { text: 'Commercial Property', selected: false },
  { text: 'Guest House', selected: false },
  { text: 'Hotel', selected: false },
  { text: 'Studio', selected: false },
  { text: 'Bungalow', selected: false },
  { text: 'Land', selected: false },
];

const Filter = ({ navigation }) => {
  const dispatch = useDispatch();

  const [selectedBedroom, setSelectedBedroom] = useState({
    value: '1 bedroom - 2 bedrooms',
  });
  const [selectedBathroom, setSelectedBathroom] = useState({
    value: '1',
  });
  const [selectedToilet, setSelectedToilet] = useState({
    value: 1,
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    value: '0-100',
  });
  const [customPrice, setCustomPrice] = useState({
    minPrice: '',
    maxPrice: '',
  });
  const [propertyType, setPropertyType] = useState({
    value: 'All properties',
  });
  const [selectedParkingSpace, setSelectedParkingSpace] = useState({
    value: 1,
  });
  const [propertyTypesState, dispatchPropertyType] = useReducer(
    propertyTypeReducer,
    propertyTypes,
  );
  const [categories, setCategories] = useState([
    { name: 'buy', active: true },
    { name: 'rent', active: false },
  ]);

  const bedroomOptions = [
    { label: '1 bedroom', value: '1' },
    { label: '2 bedrooms', value: '2' },
    { label: '3 bedrooms ', value: '3' },
    { label: '5 bedrooms ', value: '4' },
    { label: '5 bedrooms ', value: '5' },
  ];

  const bathroomOptions = [
    { label: '1 bathroom', value: '1' },
    { label: '2 bathrooms', value: '2' },
    { label: '3 bathrooms ', value: '3' },
    { label: '5 bathrooms ', value: '4' },
    { label: '5 bathrooms ', value: '5' },
  ];

  const toiletsOptions = [
    { label: '1 toilet', value: 1 },
    { label: '2 toilets', value: 2 },
    { label: '3 toilets', value: 3 },
    { label: '3 toilets', value: 4 },
    { label: '5 toilets', value: 5 },
  ];

  const parkingSpaceOptions = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
  ];

  const priceRanges = [
    { label: 'Below N100,000', value: '0' },
    { label: 'N100,000 - N250,000', value: '100000' },
    { label: 'N250,000 - N500,000', value: '250000' },
    { label: 'N500,000 - N1,000,000', value: '500000' },
    { label: 'Custom', value: 'custom' },
  ];

  const handleSelectPropertyType = (propertyType) => {
    dispatchPropertyType({
      type: 'SELECT_PROPERTY_TYPE',
      payload: propertyType,
    });

    setPropertyType({ value: propertyType.text });
  };

  const handleSelectCategory = (val) => {
    setCategories((prevState) => {
      return prevState.map((category) => {
        return category.name === val.name
          ? { ...category, active: true }
          : { ...category, active: false };
      });
    });
  };

  const handleSearchClick = async () => {
    if (
      selectedPriceRange.value === 'custom' &&
      (customPrice.minPrice === '' || customPrice.maxPrice === '')
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please enter min and max price',
      });

      return;
    }
    if (
      selectedPriceRange.value === 'custom' &&
      Number(customPrice.minPrice) > Number(customPrice.maxPrice)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Max price must be greater than min price',
      });
      return;
    }

    const category = categories.filter((category) => category.active)[0].name;
    let priceRange;

    if (selectedPriceRange == 'custom') {
      priceRange = `${customPrice.minPrice}-${customPrice.maxPrice}`;
    } else {
      priceRange = selectedPriceRange;
    }

    // these are the values you get when the user clicks search
    // const formValues = {
    //   category,
    //   priceRange,
    //   propertyType,
    //   selectedBathroom,
    //   customPrice,
    //   selectedBedroom,
    //   selectedToilet,
    //   selectedParkingSpace,
    // };

    const filterData = {
      transaction_type: category,
      per_page: 10,
      no_bedroom: parseInt(selectedBedroom.value, 10),
      max_price: customPrice.maxPrice
        ? parseInt(customPrice.maxPrice, 10)
        : parseInt(priceRange.value, 10) + 100000,
      min_price: customPrice.minPrice
        ? parseInt(customPrice.minPrice, 10)
        : parseInt(priceRange.value, 10),
      no_bathroom: parseInt(selectedBathroom.value, 10),
    };

    const results = await dispatch(filterAction.filterProperties(filterData));
    navigation.navigate('SearchResults', {
      searchResults: results,
      type: category,
      total: results.properties.meta.total,
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.modal}>
        <ScrollView scrollView />
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          scrollViewStyles={{ flex: 1, backgroundColor: 'pink' }}
          style={styles.scrollView}>
          <View style={styles.header}>
            <Pressable
              style={styles.closeButton}
              onPress={() => navigation.goBack()}>
              <Ionicons name="md-close" size={30} color="#fff" />
            </Pressable>
            <CustomText style={styles.title} type="info-title">
              Filter
            </CustomText>
          </View>

          <CustomFilterHeader
            handleSelect={handleSelectCategory}
            categories={categories}
          />

          <View style={styles.container}>
            <CustomText type="info-title">Property Type</CustomText>
            <View style={styles.typeSelect}>
              {propertyTypesState.map((propertyType, index) => (
                <View style={styles.typeItem} key={index}>
                  <TouchableOpacity
                    onPress={() => handleSelectPropertyType(propertyType)}>
                    <TypeSelector
                      text={propertyType.text}
                      selected={propertyType.selected}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            <View style={{ zIndex: 10, marginTop: 24 }}>
              <CustomText type="info-title">Price Range</CustomText>
              {selectedPriceRange.value === 'custom' ? (
                <View style={styles.priceRange}>
                  <CustomInput
                    value={customPrice.minPrice}
                    keyboardType="numeric"
                    onChangeText={(price) =>
                      setCustomPrice((prevState) => ({
                        ...prevState,
                        minPrice: price,
                      }))
                    }
                    width="48%"
                    placeholder="Enter min price"
                  />

                  <CustomInput
                    value={customPrice.maxPrice}
                    keyboardType="numeric"
                    onChangeText={(price) =>
                      setCustomPrice((prevState) => ({
                        ...prevState,
                        maxPrice: price,
                      }))
                    }
                    width="48%"
                    placeholder="Enter max price"
                  />
                </View>
              ) : (
                <View>
                  <DropDownPicker
                    items={priceRanges}
                    placeholder="Price Range"
                    defaultValue={''}
                    zIndex={99}
                    itemStyle={{
                      justifyContent: 'flex-start',
                    }}
                    onChangeItem={(item) =>
                      setSelectedPriceRange({
                        value: item.value,
                      })
                    }
                  />
                </View>
              )}
            </View>

            <View style={{ zIndex: 9, marginTop: 24 }}>
              <CustomText type="info-title">Bedroom</CustomText>
              <DropDownPicker
                items={bedroomOptions}
                placeholder="Bedroom"
                defaultValue="1"
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                selectedBedroom={4}
                onChangeItem={(item) =>
                  setSelectedBedroom({
                    value: item.value,
                  })
                }
              />
            </View>

            <View style={{ zIndex: 9, marginTop: 24 }}>
              <CustomText type="info-title">Bathroom</CustomText>
              <DropDownPicker
                items={bathroomOptions}
                placeholder="Bathroom"
                defaultValue={bathroomOptions[0].value}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                onChangeItem={(item) =>
                  setSelectedBathroom({
                    value: item.value,
                  })
                }
              />
            </View>

            <View style={{ zIndex: 9, marginTop: 24 }}>
              <CustomText type="info-title">Toilet</CustomText>
              <DropDownPicker
                items={toiletsOptions}
                placeholder="Toilets"
                defaultValue={toiletsOptions[0].value}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                onChangeItem={(item) =>
                  setSelectedToilet({
                    value: item.value,
                  })
                }
              />
            </View>
            <View style={{ zIndex: 6, marginTop: 24, marginBottom: 20 }}>
              <CustomText type="info-title">Car Parking Space</CustomText>
              <DropDownPicker
                items={parkingSpaceOptions}
                placeholder="Car Parking Space"
                defaultValue={parkingSpaceOptions[0].value}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                selectedParkingSpace={1}
                onChangeItem={(item) =>
                  setSelectedParkingSpace({
                    value: item.value,
                  })
                }
              />
            </View>
            <Button
              containerStyle={styles.actionButton}
              text="Search property"
              onPress={handleSearchClick}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  scrollView: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  header: {
    backgroundColor: '#131516',
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  closeButton: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: 10,
  },
  title: {
    color: '#fff',
    marginLeft: 10,
    marginBottom: 0,
  },
  actionButton: {
    marginTop: 20,
  },
  typeSelect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -10,
    marginBottom: 10,
  },
  typeItem: {
    flexBasis: '25%',
    paddingRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  dropdownView: {
    marginTop: 10,
    marginBottom: 10,
  },
  scene: {
    flex: 1,
  },
  priceRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Filter;
