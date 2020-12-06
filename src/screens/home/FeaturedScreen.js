import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';

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
      <ProductGroup
        data={featuredItems}
        navigation={navigation}
        itemWidth={330}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeaturedScreen;
