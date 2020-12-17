import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import CustomHeader from '../../components/CustomHeader';
import furniture from '../../../assets/images/furniture.png';
import kitchenDining from '../../../assets/images/kitchenDining.png';
import bedroom from '../../../assets/images/bedroom.png';

const Furnitures = ({ route, navigation }) => {
  const [livingRoomFurniture, setFurniture] = React.useState([
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
    { name: 'Chairs', image: furniture },
  ]);

  const [bedroomFurniture, setBedroomFurniture] = React.useState([
    { name: 'Family Bed', image: bedroom },
    { name: 'Family Bed', image: bedroom },
    { name: 'Family Bed', image: bedroom },
    { name: 'Family Bed', image: bedroom },
  ]);

  const [kitchenAndDining, setKitchenAndDining] = React.useState([
    { name: 'Six Chairs Dining', image: kitchenDining },
    { name: 'Six Chairs Dining', image: kitchenDining },
    { name: 'Six Chairs Dining', image: kitchenDining },
  ]);

  return (
    <ScrollView>
      <CustomHeader
        headerRightContents={[{ type: 'search' }]}
        title="Furnitures"
      />

      <View style={styles.container}>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFurniture, index) => (
            <Pressable
              onPress={() => navigation.navigate('Chairs')}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFurniture.image} />
              <Text style={styles.text}>{singleFurniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Bedroom Furniture</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {bedroomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Kitchen & Dining Furniture</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {kitchenAndDining.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Office Furniture</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Bathroom Storage and Vanities</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Outdoor furniture</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Entryway Furnitures</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.heading}>
          <Text style={styles.headingText}>Storage Furnitures</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Other Furnitures</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFruniture, index) => (
            <Pressable
              onPress={() => null}
              key={index}
              style={styles.furnitureCard}>
              <Image source={singleFruniture.image} />
              <Text style={styles.text}>{singleFruniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // paddingBottom: 30,
  },
  furnitureCard: {
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    marginLeft: 10,
    marginBottom: 10,

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
    marginLeft: 10,
    marginBottom: 15,
    width: '92%',
  },
  sort: {
    flexDirection: 'row',
  },
  headingText: {
    color: 'rgba(19, 21, 22, 0.8)',
    fontSize: 16,
    fontWeight: '700',
  },
  sortText: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    marginRight: 3,
  },
});

export default Furnitures;
