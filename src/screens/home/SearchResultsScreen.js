import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import FilterButton from '../../components/FilterButton';
import ProductGroup from '../../components/ProductGroup';
import { spaces } from '../../style/variables';

const SearchResultsScreen = ({ route, navigation }) => {
  const { type, searchResults, total } = route.params;

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
      {searchResults && searchResults.properties ? (
        <ProductGroup
          data={searchResults.properties.data}
          navigation={navigation}
          onItemPress={(product) =>
            navigation.navigate('ProductDetails', { product })
          }
          itemWidth={370}
          title={total ? total + ' Results found!' : '0 Results found!'}
          horizontal={false}
        />
      ) : (
        <Text>No Search Results!</Text>
      )}
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

export default SearchResultsScreen;
