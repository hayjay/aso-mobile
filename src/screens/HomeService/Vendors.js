import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import interiorDecor from '../../../assets/images/interiorDecor.png';

const Vendors = () => {
  const [vendors, setVendors] = React.useState([
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
    { name: 'Interior design and decoration', image: interiorDecor },
  ]);

  return (
    <View style={styles.container}>
      {vendors.map((vendor, index) => (
        <View style={styles.vendorCard} key={index}>
          <Image source={vendor.image} style={styles.image} />
          <Text style={styles.text}>{vendor.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vendorCard: {
    flexBasis: '47%',
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'flex-start',
    width: 200,
    height: 180,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  image: {
    width: '100%',
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Vendors;
