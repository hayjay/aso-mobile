import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import furniture from '../../../assets/images/furniture.png';
import livingRoom from '../../../assets/images/livingRoom.png';
import kitchenDining from '../../../assets/images/kitchenDining.png';
import bedroom from '../../../assets/images/bedroom.png';

const Departments = () => {
  const [departments, setDepartments] = React.useState([
    { name: 'Furniture', image: furniture },
    { name: 'Bedroom', image: bedroom },
    { name: 'Kitchen & Dining', image: kitchenDining },
    { name: 'Living Room', image: livingRoom },
    { name: 'Furniture', image: furniture },
    { name: 'Furniture', image: furniture },
    { name: 'Furniture', image: furniture },
    { name: 'Furniture', image: furniture },
  ]);

  return (
    <View style={styles.container}>
      {departments.map((department, index) => (
        <View style={styles.departmentCard} key={index}>
          <Image source={department.image} />
          <Text style={styles.text}>{department.name}</Text>
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
  departmentCard: {
    flexBasis: '47%',
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    // justifyContent: 'flex-end'
  },
});

export default Departments;
