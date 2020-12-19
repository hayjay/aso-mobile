import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import BackButton from '../../components/BackButton';
import { Ionicons } from '@expo/vector-icons';
import italianSofa from '../../../assets/images/italianSofa.png';
import swivelChair from '../../../assets/images/swivelChair.png';
import reviewer from '../../../assets/images/reviewer.png';

const ProductDetails = () => {
  const [sofaFurniture, setSofaFurniture] = React.useState([
    {
      name: 'Italian Sofa',
      image: italianSofa,
      price: '$90',
      rating: 4.5,
    },
    {
      name: 'Italian Sofa',
      image: italianSofa,
      price: '$90',
      rating: 4.5,
    },
    {
      name: 'Italian Sofa',
      image: italianSofa,
      price: '$90',
      rating: 4.5,
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.chairView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -25,
          }}>
          <BackButton
            iconStyle={{ color: '#000' }}
            containerStyle={{ marginLeft: 20 }}
          />
          <Ionicons name="md-more" size={26} color="#000" />
        </View>

        <View style={styles.imageWrapper}>
          <Image source={swivelChair} style={styles.swivelChair} />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.productInfo}>
          <View style={styles.topInfo}>
            <View>
              <Text style={styles.productName}>Madison swivel glider</Text>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>5.0</Text>
                {Array.from({ length: 5 }, (_, i) => (
                  <Ionicons
                    key={i}
                    name="md-star"
                    size={18}
                    color="rgba(253, 191, 0, 1)"
                  />
                ))}
              </View>
            </View>

            <Text style={styles.productPrice}>$90</Text>
          </View>

          <View style={styles.bottomInfo}>
            <Text style={styles.description}>
              Our home affordability payments calculator can help you estimate
              what you can afford to spend on your new home. Our home
              affordability payments.
            </Text>

            <View style={styles.review}>
              <View style={styles.reviewImages}>
                <Image style={styles.reviewImage} source={reviewer} />
                <Image style={styles.reviewImage} source={reviewer} />
                <Image style={styles.reviewImage} source={reviewer} />
                <Image style={styles.reviewImage} source={reviewer} />
              </View>

              <Text style={styles.reviewText}>Read 124 reviews</Text>
            </View>

            <View style={styles.call}>
              <Text style={styles.callText}>
                To buy, call vendor: 0812-2323-353{' '}
              </Text>
              <Ionicons
                name="md-arrow-forward"
                size={22}
                color="rgba(204, 67, 61, 1)"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.heading}>
        <Text style={styles.headingText}>Related Products</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingLeft: 10,
        }}>
        {sofaFurniture.map((singleFurniture, index) => (
          <Pressable
            style={styles.singleFurnitureCard}
            key={index}
            onPress={() => null}>
            <View style={styles.cardTop}>
              <Text>{singleFurniture.price}</Text>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>{singleFurniture.rating}</Text>
                <Ionicons
                  name="md-star"
                  size={18}
                  color="rgba(253, 191, 0, 1)"
                />
              </View>
            </View>
            <Image source={singleFurniture.image} style={styles.image} />
            <Text style={styles.text}>{singleFurniture.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 15,
    width: '92%',
  },
  headingText: {
    color: 'rgba(19, 21, 22, 0.8)',
    fontSize: 16,
    fontWeight: '700',
  },
  singleFurnitureCard: {
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 150,
    marginBottom: 18,
    marginRight: 15,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  swivelChair: {
    width: 248,
    height: 197,
  },
  chairView: {
    height: 300,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingRight: 20,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  cardTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginRight: 3,
    color: 'rgba(19, 21, 22, 0.5)',
  },
  image: {
    borderRadius: 6,
    width: '100%',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: {
    color: 'rgba(19, 21, 22, 0.65)',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
  },
  topInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(19, 21, 22, 0.8)',
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(19, 21, 22, 0.7)',
    marginBottom: 5,
  },
  description: {
    color: 'rgba(19, 21, 22, 0.65)',
    lineHeight: 20,
  },
  bottomInfo: {
    marginTop: 19,
  },
  call: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  callText: {
    color: 'rgba(204, 67, 61, 1)',
    fontSize: 17,
    fontWeight: '700',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  reviewImages: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 5,
    fontSize: 16,
    position: 'relative',
  },
  reviewImage: {
    marginLeft: -8,
  },
  reviewText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'rgba(19, 21, 22, 0.7)',
  },
});

export default ProductDetails;
