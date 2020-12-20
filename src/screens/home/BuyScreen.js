import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import FilterButton from '../../components/FilterButton';
import ProductGroup from '../../components/ProductGroup';

import { spaces } from '../../style/variables';
import { HOME_SALE_ITEM, majorCities, SALES } from '../../utils/constants';

const BuyScreen = ({ navigation }) => {
  const { featuredPropertiesSales, newSalesProperties } = useSelector(
    (state) => state.properties,
  );

  const featuredItems = featuredPropertiesSales.featured_properties
    ? featuredPropertiesSales.featured_properties.data
    : [];
  const propertiesForSale = newSalesProperties.new_listing
    ? newSalesProperties.new_listing.data
    : [];

  return (
    <View style={styles.container}>
      <CustomHeader title="Buy" />
      <View style={styles.searchArea}>
        <CustomInput
          containerStyle={{ flex: 1, marginRight: 10 }}
          type="search"
          placeholder="Search property"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <FilterButton />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ProductGroup
          data={featuredItems}
          navigation={navigation}
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
          itemWidth={330}
          horizontal
          title="Featured property for sale"
          actionButton={{
            text: 'View All',
            onPress: () => {
              navigation.navigate('Featured', { type: 'Buy' });
            },
          }}
        />
        <ProductGroup
          data={propertiesForSale}
          navigation={navigation}
          itemCategory={HOME_SALE_ITEM}
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
          itemWidth={170}
          horizontal
          title="New listing for sale"
          actionButton={{
            text: 'View All',
            onPress: () => navigation.navigate('BuyListing'),
          }}
        />

        <ProductGroup
          data={majorCities}
          navigation={navigation}
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
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

export default BuyScreen;
