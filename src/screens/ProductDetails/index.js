import React from 'react';
import { ImageBackground, Pressable, ScrollView, View } from 'react-native';
import Swiper from 'react-native-swiper';
import numberFomatter from 'number-formatter';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import CustomIcon from '../../components/CustomIcon';
import CustomText from '../../components/CustomText';
import { colors } from '../../style/variables';
import styles from './styles';
import TextButton from '../../components/TextButton';

const ProductDetails = ({ route }) => {
  const product = route?.params?.product;

  console.log('product', product);

  const processImages = () => {
    const images = [product.primary_image_link];
    const otherImages = product.other_image_links || [];
    otherImages.forEach((item) => {
      images.push(item.link);
    });
    return images;
  };
  const productImages = processImages();

  const {
    no_bathroom,
    no_bedroom,
    description,
    no_cars,
    payment_plan,
    price,
    address,
    city: { name: cityName },
    country,
  } = product;

  const metaItems = [
    no_bedroom
      ? {
          key: 'bed',
          icon: 'bed',
          value: no_bedroom,
        }
      : {},
    no_cars
      ? {
          key: 'car',
          icon: 'car',
          value: no_cars,
        }
      : {},
    no_bathroom
      ? {
          key: 'bath',
          icon: 'shower',
          value: no_bathroom,
        }
      : {},
  ];

  return (
    <ScrollView>
      <View style={styles.headerArea}>
        {productImages.length > 0 && (
          <Swiper
            dotColor="#BDBDBD"
            activeDotColor={colors.red}
            paginationStyle={styles.pagination}
            loop={false}>
            {productImages.map((item) => {
              return (
                <View>
                  <ImageBackground
                    source={{ uri: item }}
                    style={styles.displayImageBackground}></ImageBackground>
                </View>
              );
            })}
          </Swiper>
        )}
        <View style={styles.headerControls}>
          <BackButton containerStyle={styles.backButton} />
          <Pressable></Pressable>
        </View>
      </View>

      <View style={styles.contentArea}>
        <CustomText style={styles.redText}>
          &#8358;{numberFomatter('#,###.', price)}
        </CustomText>
        <View style={styles.metaItemsContainer}>
          {metaItems.map(({ icon, value, key }) => (
            <View style={styles.metaItem} key={key}>
              <CustomIcon name={icon} style={styles.metaIcon} />
              <CustomText style={styles.metaText}>{value}</CustomText>
            </View>
          ))}
        </View>
        <CustomText style={styles.location}>
          {address}, {cityName}
          {country && `, ${country.name}`}
        </CustomText>
        <CustomText style={styles.sectionTitle} type="info-title">
          Product description
        </CustomText>
        <CustomText type="info-body">{description}</CustomText>
        <CustomText style={styles.sectionTitle} type="info-title">
          Key features
        </CustomText>
        <View style={styles.featuresButtons}>
          <TextButton
            containerStyle={styles.featuresButton}
            text="View on Map"
            color="grey"
          />
          <TextButton
            containerStyle={styles.featuresButton}
            text="View Floorplan"
            color="grey"
          />
        </View>

        {payment_plan && (
          <>
            <CustomText type="info-title" style={styles.sectionTitle}>
              Payment plan
            </CustomText>
            <CustomText type="info-body">{payment_plan}</CustomText>
          </>
        )}
        <Button text="Purchase Property" containerStyle={styles.actionButton} />
        <TextButton color={colors.red} text="View background property" />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
