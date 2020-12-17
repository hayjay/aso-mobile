import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import CustomHeader from '../../components/CustomHeader';
import italianSofa from '../../../assets/images/italianSofa.png';
import swivelChair from '../../../assets/images/swivelChair.png';

const Chairs = ({ navigation }) => {
  const [livingRoomFurniture, setFurniture] = React.useState([
    { name: 'Madison Swivel Glider', image: swivelChair },
    { name: 'Madison Swivel Glider', image: swivelChair },
    { name: 'Madison Swivel Glider', image: swivelChair },
  ]);

  const [sofaFurniture, setSofaFurniture] = React.useState({
    name: 'Italian Sofa',
    image: italianSofa,
    price: '$90',
    rating: 4.5,
  });

  return (
    <ScrollView>
      <CustomHeader headerRightContents={[{ type: 'search' }]} title="Chairs" />

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
      <View style={{ marginLeft: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {livingRoomFurniture.map((singleFurniture, index) => (
            <Pressable
              onPress={() => navigation.navigate('ProductServiceDetails')}
              key={index}
              style={styles.chair}>
              <View style={styles.cardTop}>
                <Text>{sofaFurniture.price}</Text>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>{sofaFurniture.rating}</Text>
                  <Ionicons
                    name="md-star"
                    size={18}
                    color="rgba(253, 191, 0, 1)"
                  />
                </View>
              </View>
              <Image source={singleFurniture.image} />
              <Text style={styles.text}>{singleFurniture.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.heading}>
        <Text style={styles.headingText}>All Other Items</Text>
      </View>
      <View style={styles.container}>
        {Array.from({ length: 20 }, (_, i) => (
          <Pressable onPress={() => null} key={i} style={styles.furnitureCard}>
            <View style={styles.cardTop}>
              <Text>{sofaFurniture.price}</Text>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>{sofaFurniture.rating}</Text>
                <Ionicons
                  name="md-star"
                  size={18}
                  color="rgba(253, 191, 0, 1)"
                />
              </View>
            </View>
            <Image source={sofaFurniture.image} />
            <Text style={styles.text}>{sofaFurniture.name}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  chair: {
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 266,
    height: 172,
    marginLeft: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  furnitureCard: {
    flexBasis: '47%',
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 200,
    height: 180,
    marginBottom: 18,
    paddingLeft: 10,
    paddingRight: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  cardTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 25,
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
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginRight: 3,
    color: 'rgba(19, 21, 22, 0.5)',
  },
  star: {},
});

export default Chairs;
