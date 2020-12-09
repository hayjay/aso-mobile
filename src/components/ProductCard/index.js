import React from 'react';
import { View, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import CustomText from '../CustomText';
import CustomIcon from '../CustomIcon';
import styles from './styles';
import numberFomatter from 'number-formatter';
import { HOME_RENT_ITEM, HOME_SALE_ITEM } from '../../utils/constants';

const ProductCard = ({
  imageUrl,
  label,
  price,
  title,
  subTitle,
  lowerTitle,
  numberBedrooms,
  numberBathrooms,
  numberCars,
  itemCategory,
  containerStyle = {},
}) => {
  const image = { uri: imageUrl };

  const metaItems = [
    {
      key: 'bed',
      icon: numberBedrooms ? 'bed' : null,
      value: numberBedrooms ? numberBedrooms : null,
    },
    {
      key: 'car',
      icon: numberCars ? 'car' : null,
      value: numberCars ? numberCars : null,
    },
    {
      key: 'bath',
      icon: numberBathrooms ? 'shower' : null,
      value: numberBathrooms ? numberBathrooms : null,
    },
  ];

  return (
    <View style={containerStyle}>
      <ImageBackground style={styles.imageBackground} source={image}>
        {itemCategory === HOME_RENT_ITEM
          ? null
          : label && <CustomText style={styles.label}>{label}</CustomText>}
        {itemCategory === HOME_RENT_ITEM
          ? null
          : !!price && (
              <View style={styles.infoArea}>
                <BlurView
                  intensity={80}
                  tint="dark"
                  style={[
                    styles.blurredArea,
                    !metaItems && { alignSelf: 'flex-start' },
                  ]}>
                  {itemCategory === HOME_SALE_ITEM
                    ? null
                    : metaItems && (
                        <View style={styles.metaItemsContainer}>
                          {metaItems.map(({ icon, value, key }) => (
                            <View style={styles.metaItem} key={key}>
                              <CustomIcon name={icon} style={styles.metaIcon} />
                              <CustomText style={styles.metaText}>
                                {value}
                              </CustomText>
                            </View>
                          ))}
                        </View>
                      )}
                  {!!price && (
                    <CustomText style={styles.infoText}>
                      {' '}
                      {'\u20A6'} {numberFomatter('#,###.', price)}{' '}
                    </CustomText>
                  )}
                </BlurView>
              </View>
            )}
      </ImageBackground>
      <View style={styles.details}>
        {!!title && <CustomText style={styles.title}>{title}</CustomText>}
        {!!subTitle && (
          <CustomText style={styles.subTitle}>{subTitle}</CustomText>
        )}
        {!!lowerTitle && (
          <CustomText style={styles.lowerTitle}>{lowerTitle}</CustomText>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
