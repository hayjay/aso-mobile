import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import FilterButton from '../../components/FilterButton';
import ProductGroup from '../../components/ProductGroup';
import { spaces } from '../../style/variables';

const FeaturedScreen = ({ route, navigation }) => {
  const { type } = route.params;

  let featuredCategory;
  if (type === 'Buy') {
    featuredCategory = useSelector(
      (state) => state.properties.featuredPropertiesSales,
    );
  } else {
    featuredCategory = useSelector(
      (state) => state.properties.featuredPropertiesRents,
    );
  }

  const featuredItems = featuredCategory.featured_properties
    ? featuredCategory.featured_properties.data
    : [];

  return (
    <View style={styles.container}>
      <CustomHeader title={type} />
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
      <ProductGroup
        data={featuredItems}
        navigation={navigation}
        onItemPress={(product) =>
          navigation.navigate('ProductDetails', { product })
        }
        itemWidth={370}
        title={
          type === 'Buy'
            ? 'Featured property for sale'
            : 'Featured property for rent'
        }
        horizontal={false}
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

export default FeaturedScreen;
