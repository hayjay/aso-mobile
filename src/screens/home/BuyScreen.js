import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';

import * as propertyAction from '../../redux/actions/propertyAction';
import { HOME_SALE_ITEM, majorCities, SALES } from '../../utils/constants';

const BuyScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { featuredPropertiesSales, newSalesProperties } = useSelector(
    (state) => state.properties,
  );

  const featuredItems = featuredPropertiesSales.featured_properties
    ? featuredPropertiesSales.featured_properties.data
    : [];
  const propertiesForSale = newSalesProperties.new_listing
    ? newSalesProperties.new_listing.data
    : [];

  useEffect(() => {
    dispatch(propertyAction.getFeaturedPropertiesSales());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <CustomHeader title="Buy" />
      <ScrollView>
        <ProductGroup
          data={featuredItems}
          navigation={navigation}
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
          itemWidth={170}
          horizontal
          title="New listing for sale"
          actionButton={{
            text: 'View All',
            onPress: () => {},
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BuyScreen;
