import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';

const majorCities = [
  {
    title: 'Abuja',
  },
  {
    title: 'Lagos',
  },
  {
    title: 'Ibadan',
  },
];

const CitiesScreen = () => {
  const { states } = useSelector((state) => state.states.states);
  console.log('states', states);
  return (
    <View style={styles.container}>
      <CustomHeader headerLeft="menu" title="Home" />
      <ScrollView>
        <ProductGroup data={states} itemWidth={170} horizontal type="city" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CitiesScreen;