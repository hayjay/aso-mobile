import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import CustomHeader from '../../components/CustomHeader';
import furniture from '../../../assets/images/furniture.png';
import livingRoom from '../../../assets/images/livingRoom.png';
import kitchenDining from '../../../assets/images/kitchenDining.png';
import bedroom from '../../../assets/images/bedroom.png';

const Furnitures = ({ handleDepartment }) => {
  const [departments, setDepartments] = React.useState([
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
  ]);

  return (
    <ScrollView>
      <CustomHeader
        headerRightContents={[{ type: 'search' }]}
        title="Furnitures"
      />

      <View style={styles.heading}>
        <Text style={styles.headingText}>Living room furniture</Text>
        <View style={styles.sort}>
          <Text style={styles.sortText}>Sort by</Text>
          <Ionicons
            name="md-arrow-dropdown"
            size={24}
            color="rgba(19, 21, 22, 0.5)"
          />
        </View>
      </View>

      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {departments.map((department, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={department.image} />
              <Text style={styles.text}>{department.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    // paddingRight: 16,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  furnitureCard: {
    // flexBasis: '40%',
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginBottom: 18,
    marginLeft: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  sort: {
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 16,
  },
  sortText: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
  },
});

export default Furnitures;
