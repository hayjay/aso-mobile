import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';
import * as statesAction from '../../redux/actions/statesAction';
import * as propertyAction from '../../redux/actions/propertyAction';
import * as profileAction from '../../redux/actions/profileAction';
import {
  HOME_RENT_ITEM,
  HOME_SALE_ITEM,
  majorCities,
} from '../../utils/constants';
import Filter from '../../components/Filter';
import CustomInput from '../../components/CustomInput';
import { spaces } from '../../style/variables';
import FilterButton from '../../components/FilterButton';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const loadProfile = async () => {
    await dispatch(profileAction.getMyProfile());
  };

  const {
    featuredProperties,
    newSalesProperties,
    newRentsProperties,
  } = useSelector((state) => state.properties);

  const featuredItems = featuredProperties.featured_properties
    ? featuredProperties.featured_properties.data
    : [];
  const propertiesForSale = newSalesProperties.new_listing
    ? newSalesProperties.new_listing.data
    : [];
  const propertiesForRent = newRentsProperties.new_listing
    ? newRentsProperties.new_listing.data
    : [];

  useEffect(() => {
    loadProfile();
    dispatch(statesAction.getNigeriaStates());
    dispatch(propertyAction.getFeaturedProperties());
    dispatch(propertyAction.getNewSalesProperties());
    dispatch(propertyAction.getNewRentsProperties());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <CustomHeader headerLeft="menu" title="Home" />
      <View style={styles.searchArea}>
        <CustomInput
          containerStyle={{ flex: 1, marginRight: 10 }}
          type="search"
          placeholder="Search property"
        />
        <FilterButton onPress={() => setIsFilterVisible(true)} />
      </View>
      <ScrollView>
        <ProductGroup
          data={featuredItems}
          navigation={navigation}
          itemWidth={330}
          horizontal
          title="Featured property"
          actionButton={{
            text: 'View All',
            onPress: () => {},
          }}
        />
        <ProductGroup
          data={propertiesForSale}
          navigation={navigation}
          itemCategory={HOME_SALE_ITEM}
          itemWidth={170}
          horizontal
          title="Property for sale"
          actionButton={{
            text: 'View All',
            onPress: () => {
              navigation.navigate('Buy');
            },
          }}
        />
        <ProductGroup
          data={propertiesForRent}
          navigation={navigation}
          itemCategory={HOME_RENT_ITEM}
          itemWidth={170}
          horizontal
          title="Property for rent"
          actionButton={{
            text: 'View All',
            onPress: () => {
              navigation.navigate('Rent');
            },
          }}
        />
        <ProductGroup
          data={majorCities}
          navigation={navigation}
          itemWidth={170}
          horizontal
          type="city"
          title="Browse property in major cities"
          actionButton={{
            text: 'View All',
            onPress: () => {
              navigation.navigate('Cities');
            },
          }}
        />
      </ScrollView>
      <Filter
        isVisible={isFilterVisible}
        closeModal={() => setIsFilterVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchArea: {
    paddingHorizontal: spaces.appSpacing01,
    marginTop: 10,
    flexDirection: 'row',
  },
});

export default HomeScreen;
