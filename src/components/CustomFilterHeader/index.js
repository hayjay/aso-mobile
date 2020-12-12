import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CustomText from '../CustomText';

const CustomFilterHeader = ({ handleSelect, categories }) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View
          style={[
            styles.tab,
            {
              borderBottomColor: category.active ? '#fff' : 'transparent',
              borderBottomWidth: category.active ? 2.5 : 0,
              paddingBottom: category.active ? 0 : 3,
            },
          ]}
          key={index}>
          <TouchableOpacity onPress={() => handleSelect(category)}>
            <CustomText
              numberOfLines={2}
              style={[
                styles.text,
                {
                  color: category.active ? '#fff' : 'grey',
                },
              ]}>
              {category.name}
            </CustomText>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#131516',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  tab: {
    borderBottomColor: '#fff',
    flexBasis: '50%',
  },
  text: {
    color: '#fff',
    paddingBottom: 5,
    textTransform: 'uppercase',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
  },
});

export default CustomFilterHeader;
