import React, { useRef, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import styles from './styles';
import Button from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import CodeInput from '../../components/CodeInput';
import emailImage from '../../../assets/images/email-sent.png';

const ForgotPassword = () => {
  const [otp, setOtp] = useState('');
  const [isCompletionModalVisible, setIsCompletionModalVisible] = useState(
    false,
  );
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiper = useRef(null);

  const onSwiperIndexChanged = (index) => {
    setTimeout(() => setSwiperIndex(index), 1);
  };

  const scrollBy = (index) => {
    swiper?.current?.scrollBy(index);
  };

  const handleStep1 = () => {
    scrollBy(1);
  };

  const handleStep2 = () => {
    scrollBy(1);
  };

  const changePassword = () => {
    setIsCompletionModalVisible(true);
  };

  return (
    <>
      <CustomHeader
        onBackButtonPress={swiperIndex > 0 ? () => scrollBy(-1) : undefined}
        title="Forgot Password"
      />
      <ScrollView>
        <Swiper
          ref={swiper}
          index={swiperIndex}
          loop={false}
          scrollEnabled={false}
          onIndexChanged={onSwiperIndexChanged}
          showsPagination={false}>
          <View style={styles.contentContainer}>
            <CustomText style={styles.subTitle}>
              Please enter your email address to receive identification code
            </CustomText>
            <CustomInput
              containerStyle={styles.topSpacing}
              placeholder="Email Address"
            />
            <Button
              onPress={handleStep1}
              containerStyle={styles.continueButton}
              text="Continue"
            />
          </View>
          <View style={styles.contentContainer}>
            <CustomText style={styles.subTitle}>
              Enter the six identification code sent to your email address:
              <Text style={styles.boldText}> Adebolawilliams@gmail.com</Text>
            </CustomText>

            <CodeInput
              containerStyle={styles.otpContainer}
              title="Enter six digit code"
              onChangeText={setOtp}
              value={otp}
            />
            <CustomText style={styles.resend}>
              Didn’t get the code? <Text style={styles.boldText}>Resend</Text>
            </CustomText>

            <Button
              onPress={handleStep2}
              containerStyle={styles.continueButton}
              text="Continue"
            />
          </View>
          <View style={styles.contentContainer}>
            <CustomText style={styles.subTitle}>
              Please enter a new password to continue enjoying our service
            </CustomText>
            <CustomInput
              containerStyle={styles.topSpacing}
              placeholder="New password"
            />
            <CustomInput
              containerStyle={styles.inputSpacing}
              placeholder="Confirm password"
            />
            <Button
              onPress={changePassword}
              containerStyle={styles.continueButton}
              text="Done"
            />
          </View>
        </Swiper>
      </ScrollView>
      <Modal
        style={styles.completionModal}
        isVisible={isCompletionModalVisible}>
        <StatusBar style="dark" />
        <View style={styles.completionModalContent}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setIsCompletionModalVisible(false)}>
            <Ionicons name="md-close" style={styles.closeIcon} />
          </Pressable>
          <Image style={styles.completionImage} source={emailImage} />
          <CustomText type="info-title" style={styles.completionText}>
            Comfirm Your Email Address
          </CustomText>
          <CustomText type="info-body" style={styles.completionText}>
            We sent a comfirmation email to:{' '}
            <Text style={styles.boldText}>Adebolawilliams@gmail.com</Text>.
            Check your email and click on the comfirmation link to continue
          </CustomText>
          <Button
            containerStyle={styles.continueButton}
            // onPress={changePassword}
            text="Open Email"
          />
        </View>
      </Modal>
    </>
  );
};

export default ForgotPassword;
