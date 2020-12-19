import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import FilterButton from '../../components/FilterButton';
import ProductGroup from '../../components/ProductGroup';
import { spaces } from '../../style/variables';
import { HOME_SALE_ITEM } from '../../utils/constants';

const BuyListingScreen = ({ navigation }) => {
  const { newSalesProperties } = useSelector((state) => state.properties);
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
          data={propertiesForSale}
          navigation={navigation}
          itemCategory={HOME_SALE_ITEM}
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
          itemWidth={170}
          horizontal={false}
          title="All new listing for sale"
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

export default BuyListingScreen;
