import React, { useRef, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import styles from './styles';
import Button from '../../components/Button';
import CustomHeader from '../../components/CustomHeader';
import CustomText from '../../components/CustomText';
import CodeInput from '../../components/CodeInput';
import emailImage from '../../../assets/images/email-sent.png';
import { Formik } from 'formik';
import * as authAction from '../../redux/actions/authAction';

const ConfirmAccount = ({ navigation, route }) => {
  const swiper = useRef(null);
  const dispatch = useDispatch();
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [isCompletionModalVisible, setIsCompletionModalVisible] = useState(
    false,
  );
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSwiperIndexChanged = (index) => {
    setTimeout(() => setSwiperIndex(index), 1);
  };

  const scrollBy = (index) => {
    swiper?.current?.scrollBy(index);
  };

  const processOTP = async () => {
    setIsLoading(true);
    const result = await dispatch(authAction.confirmAccount(otp));
    setIsLoading(false);
    if (result.error) {
      Toast.show({
        type: 'error',
        text1: result.error.message,
      });
      return;
    }
    setIsCompletionModalVisible(true);
  };

  const endProcess = () => {
    scrollBy(-3);
    setIsCompletionModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <>
      <CustomHeader
        onBackButtonPress={swiperIndex > 0 ? () => scrollBy(-1) : undefined}
        title="Confirm Account"
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
            <Formik
              initialValues={{
                otp: otp,
              }}
              onSubmit={() => processOTP()}>
              {(formProps) => (
                <View>
                  <CustomText style={styles.subTitle}>
                    Enter the six identification code sent to your email
                    address:
                    <Text style={styles.boldText}> {route.params.email} </Text>
                  </CustomText>

                  <CodeInput
                    containerStyle={styles.otpContainer}
                    title="Enter six digit code"
                    onChangeText={setOtp}
                    value={otp}
                  />
                  <CustomText style={styles.resend}>
                    Didn’t get the code?{' '}
                    <Text style={styles.boldText}>Resend</Text>
                  </CustomText>

                  <Button
                    // onPress={handleStep2}
                    onPress={formProps.handleSubmit}
                    isLoading={isLoading}
                    containerStyle={styles.continueButton}
                    text="Submit"
                  />
                </View>
              )}
            </Formik>
          </View>
        </Swiper>
      </ScrollView>
      <Modal
        style={styles.completionModal}
        isVisible={isCompletionModalVisible}>
        <StatusBar style="dark" />
        <View style={styles.completionModalContent}>
          <Pressable style={styles.closeButton} onPress={endProcess}>
            <Ionicons name="md-close" style={styles.closeIcon} />
          </Pressable>
          <Image style={styles.completionImage} source={emailImage} />
          <CustomText type="info-title" style={styles.completionText}>
            Account Confirmed Successful!
          </CustomText>
          {/* <CustomText type="info-body" style={styles.completionText}>
            We sent a comfirmation email to:{' '}
            <Text style={styles.boldText}>Adebolawilliams@gmail.com</Text>.
            Check your email and click on the comfirmation link to continue
          </CustomText> */}
          <Button
            containerStyle={styles.continueButton}
            // onPress={changePassword}
            onPress={endProcess}
            text="Login to continue"
          />
        </View>
      </Modal>
    </>
  );
};

export default ConfirmAccount;
