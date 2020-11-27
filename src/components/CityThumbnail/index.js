import React from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';
import background from '../../../assets/images/city-view.jpeg';

const CityThumbnail = ({ containerStyle, text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        source={background}
        style={[styles.container, containerStyle]}>
        <View style={styles.overlay}>
          <CustomText style={styles.text}>{text}</CustomText>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default CityThumbnail;
