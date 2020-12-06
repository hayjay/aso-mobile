import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';

import * as propertyAction from '../../redux/actions/propertyAction';
import { HOME_SALE_ITEM, majorCities, RENTS } from '../../utils/constants';

const RentScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { featuredPropertiesRents, newRentsProperties } = useSelector(
    (state) => state.properties,
  );

  const featuredItems = featuredPropertiesRents.featured_properties
    ? featuredPropertiesRents.featured_properties.data
    : [];
  const propertiesForRent = newRentsProperties.new_listing
    ? newRentsProperties.new_listing.data
    : [];

  useEffect(() => {
    dispatch(propertyAction.getFeaturedPropertiesRents());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <CustomHeader title="Rent" />
      <ScrollView>
        <ProductGroup
          data={featuredItems}
          navigation={navigation}
          itemWidth={330}
          horizontal
          title="Featured property for rent"
          actionButton={{
            text: 'View All',
            onPress: () => {
              navigation.navigate('Featured', { type: 'Rent' });
            },
          }}
        />
        <ProductGroup
          data={propertiesForRent}
          navigation={navigation}
          itemCategory={HOME_SALE_ITEM}
          itemWidth={170}
          horizontal
          title="New listing for rent"
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

export default RentScreen;
