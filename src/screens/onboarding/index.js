import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import logo from '../../../assets/images/logo.png';
import CustomText from '../../components/CustomText';
import { colors } from '../../style/variables';
import backgroundTwo from '../../../assets/images/slide2background.jpeg';
import backgroundThree from '../../../assets/images/slide3background.jpeg';
import backgroundFour from '../../../assets/images/slide4background.jpeg';
import Button from '../../components/Button';
import { StatusBar } from 'expo-status-bar';

const Onboarding = ({ navigation }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiper = useRef(null);

  const onSwiperIndexChanged = (index) => {
    setTimeout(() => setSwiperIndex(index), 1);
  };

  const scrollBy = (index) => {
    swiper?.current?.scrollBy(index);
  };

  const slideContent = [
    {
      skipButtonColor: colors.grey,
    },
    {
      skipButtonColor: '#ddd',
    },
  ];

  const isFirstPage = swiperIndex === 0;
  const isLastpage = swiperIndex === 3;
  const currentContent = isFirstPage ? slideContent[0] : slideContent[1];
  const { skipButtonColor } = currentContent;

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
      <Swiper
        ref={swiper}
        loop={false}
        onIndexChanged={onSwiperIndexChanged}
        dotColor="#BDBDBD"
        activeDotColor={colors.red}
        paginationStyle={styles.pagination}>
        <View style={(styles.slideContainer, styles.textContainer)}>
          <View style={styles.sliderImageContainer}>
            <Image source={logo} />
          </View>
          <CustomText style={styles.slideTitle}>Welcome</CustomText>
          <CustomText style={styles.slideContentText}>
            Our home affordability payments calculator can help you estimate
            what you can afford.
          </CustomText>
        </View>
        <ImageBackground
          resizeMode="cover"
          style={styles.imageBackground}
          source={backgroundTwo}>
          <LinearGradient
            colors={['transparent', 'black']}
            style={[styles.textContainer, { justifyContent: 'flex-end' }]}
            locations={[0.1, 0.7]}>
            <CustomText style={[styles.slideTitle, styles.whiteTitleText]}>
              Buy Property
            </CustomText>
            <CustomText style={[styles.slideContentText, styles.whiteBodyText]}>
              Our home affordability payments calculator can help you estimate
              what you can afford.
            </CustomText>
          </LinearGradient>
        </ImageBackground>
        <ImageBackground
          resizeMode="cover"
          style={styles.imageBackground}
          source={backgroundThree}>
          <LinearGradient
            colors={['transparent', 'black']}
            style={[styles.textContainer, { justifyContent: 'flex-end' }]}
            locations={[0.1, 0.7]}>
            <CustomText style={[styles.slideTitle, styles.whiteTitleText]}>
              Sell Property
            </CustomText>
            <CustomText style={[styles.slideContentText, styles.whiteBodyText]}>
              Our home affordability payments calculator can help you estimate
              what you can afford.
            </CustomText>
          </LinearGradient>
        </ImageBackground>
        <ImageBackground
          resizeMode="cover"
          style={styles.imageBackground}
          source={backgroundFour}>
          <LinearGradient
            colors={['transparent', 'black']}
            style={[styles.textContainer, { justifyContent: 'flex-end' }]}
            locations={[0.1, 0.7]}>
            <CustomText style={[styles.slideTitle, styles.whiteTitleText]}>
              Home Service
            </CustomText>
            <CustomText style={[styles.slideContentText, styles.whiteBodyText]}>
              Our home affordability payments calculator can help you estimate
              what you can afford.
            </CustomText>
          </LinearGradient>
        </ImageBackground>
      </Swiper>
      <View style={styles.actionButtonContainer}>
        {isLastpage ? (
          <SafeAreaView>
            <View style={styles.signButtonContainer}>
              <Button
                containerStyle={styles.signButton}
                type="redOutline"
                text="Login"
                onPress={() => navigation.navigate('Login')}
              />
              <Button
                containerStyle={styles.signButton}
                text="Register"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </SafeAreaView>
        ) : (
          <SafeAreaView style={styles.actionButtonContent}>
            <Pressable onPress={() => scrollBy(3)} style={styles.actionButton}>
              <CustomText
                bold
                style={[styles.actionButtonText, { color: skipButtonColor }]}>
                Skip
              </CustomText>
            </Pressable>
            <Pressable
              onPress={() => scrollBy(1)}
              style={[styles.actionButton, styles.nextContainer]}>
              <CustomText style={[styles.actionButtonText, styles.next]}>
                Next
              </CustomText>
              <Ionicons name="md-arrow-forward" style={styles.nextArrow} />
            </Pressable>
          </SafeAreaView>
        )}
      </View>
    </View>
  );
};

export default Onboarding;
