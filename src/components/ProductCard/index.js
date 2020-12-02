import React from 'react';
import { View, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import CustomText from '../CustomText';
import CustomIcon from '../CustomIcon';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({
  imageUrl,
  label,
  price,
  currency,
  metaItems,
  title,
  subTitle,
  lowerTitle,
  containerStyle = {},
}) => {
  const image = { uri: imageUrl };

  return (
    <TouchableOpacity>
      <View style={containerStyle}>
        <ImageBackground style={styles.imageBackground} source={image}>
          {label && <CustomText style={styles.label}>{label}</CustomText>}
          {!!price && (
            <View style={styles.infoArea}>
              <BlurView
                intensity={80}
                tint="dark"
                style={[
                  styles.blurredArea,
                  !metaItems && { alignSelf: 'flex-start' },
                ]}>
                {metaItems && (
                  <View style={styles.metaItemsContainer}>
                    {metaItems.map(({ icon, value }) => (
                      <View style={styles.metaItem}>
                        <CustomIcon name={icon} style={styles.metaIcon} />
                        <CustomText style={styles.metaText}>{value}</CustomText>
                      </View>
                    ))}
                  </View>
                )}
                {!!price && (
                  <CustomText style={styles.infoText}> NGN {price} </CustomText>
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
    </TouchableOpacity>
  );
};

export default ProductCard;
