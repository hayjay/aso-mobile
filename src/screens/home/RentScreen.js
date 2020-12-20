import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import FilterButton from '../../components/FilterButton';
import ProductGroup from '../../components/ProductGroup';

import { spaces } from '../../style/variables';
import { HOME_SALE_ITEM, majorCities, RENTS } from '../../utils/constants';

const RentScreen = ({ navigation }) => {
  const { featuredPropertiesRents, newRentsProperties } = useSelector(
    (state) => state.properties,
  );

  const featuredItems = featuredPropertiesRents.featured_properties
    ? featuredPropertiesRents.featured_properties.data
    : [];
  const propertiesForRent = newRentsProperties.new_listing
    ? newRentsProperties.new_listing.data
    : [];

  return (
    <View style={styles.container}>
      <CustomHeader title="Rent" />
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
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
          itemWidth={170}
          horizontal
          title="New listing for rent"
          actionButton={{
            text: 'View All',
            onPress: () => navigation.navigate('RentListing'),
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

export default RentScreen;
