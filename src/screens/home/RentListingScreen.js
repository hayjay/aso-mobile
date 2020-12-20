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

const RentListingScreen = ({ navigation }) => {
  const { newRentsProperties } = useSelector((state) => state.properties);

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
          data={propertiesForRent}
          navigation={navigation}
          itemCategory={HOME_SALE_ITEM}
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
          itemWidth={170}
          horizontal={false}
          title="New listing for rent"
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

export default RentListingScreen;
