import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import chairImage from '../../../assets/images/chairImage.png';

const ServiceCategoryCard = ({ name, selected }) => {
  const color = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  const backgroundColor = color;

  return (
    <ImageBackground source={chairImage} style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={([styles.text], { color })}>{name}</Text>
        <View style={([styles.underline], { backgroundColor })} />
      </View>
    </ImageBackground>
  );
};

export default ServiceCategoryCard;
