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
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import CodeInput from '../../components/CodeInput';
import emailImage from '../../../assets/images/email-sent.png';
import { Formik } from 'formik';
import { emailFormSchema } from '../../utils/FormValidationSchema';
import * as authAction from '../../redux/actions/authAction';

const ForgotPassword = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [isCompletionModalVisible, setIsCompletionModalVisible] = useState(
    false,
  );
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiper = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);
  const [isLoadingThree, setIsLoadingThree] = useState(false);
  const [email, setEmail] = useState('');

  const onSwiperIndexChanged = (index) => {
    setTimeout(() => setSwiperIndex(index), 1);
  };

  const scrollBy = (index) => {
    swiper?.current?.scrollBy(index);
  };

  const processStepOne = async ({ email }) => {
    setEmail(email);
    setIsLoading(true);
    const result = await dispatch(authAction.resetPasswordByEmail(email));
    setIsLoading(false);
    if (result.error) {
      Toast.show({
        type: 'error',
        text1: result.error.message,
      });
      return;
    }
    scrollBy(1);
  };

  const processStepTwo = async () => {
    setIsLoadingTwo(true);
    const result = await dispatch(authAction.resetPasswordCommit(email, otp));
    setIsLoadingTwo(false);
    if (result.error) {
      Toast.show({
        type: 'error',
        text1: result.error.message,
      });
      return;
    }
    scrollBy(1);
  };

  const processStepThree = async (values) => {
    setIsLoadingThree(true);
    const result = await dispatch(authAction.changePassword(values));
    setIsLoadingThree(false);
    if (result.error) {
      Toast.show({
        type: 'error',
        text1: result.error.message,
      });
      return;
    }
    console.log('result', result);
    setIsCompletionModalVisible(true);
  };

  const changePassword = () => {
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
            <Formik
              initialValues={{
                email: '',
              }}
              validationSchema={emailFormSchema}
              onSubmit={(values) => processStepOne(values)}>
              {(formOneProps) => (
                <View>
                  <CustomText style={styles.subTitle}>
                    Please enter your email address to receive identification
                    code
                  </CustomText>
                  <CustomInput
                    containerStyle={styles.topSpacing}
                    placeholder="Email Address"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    onChangeText={formOneProps.handleChange('email')}
                    value={formOneProps.values.email}
                    onBlur={formOneProps.handleBlur('email')}
                    errorMessage={
                      formOneProps.touched.email && formOneProps.errors.email
                    }
                  />
                  <Button
                    isLoading={isLoading}
                    onPress={formOneProps.handleSubmit}
                    // onPress={handleStep1}
                    containerStyle={styles.continueButton}
                    text="Continue"
                  />
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.contentContainer}>
            <Formik
              initialValues={{
                email: email,
                otp: otp,
              }}
              onSubmit={() => processStepTwo()}>
              {(formTwoProps) => (
                <View>
                  <CustomText style={styles.subTitle}>
                    Enter the six identification code sent to your email
                    address:
                    <Text style={styles.boldText}> {email} </Text>
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
                    onPress={formTwoProps.handleSubmit}
                    isLoading={isLoadingTwo}
                    containerStyle={styles.continueButton}
                    text="Continue"
                  />
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.contentContainer}>
            <Formik
              initialValues={{
                password: '',
                password_confirmation: '',
              }}
              onSubmit={(values) => processStepThree(values)}>
              {(formThreeProps) => (
                <View>
                  <CustomText style={styles.subTitle}>
                    Please enter a new password to continue enjoying our service
                  </CustomText>
                  <CustomInput
                    containerStyle={styles.topSpacing}
                    placeholder="New password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={formThreeProps.handleChange('password')}
                    value={formThreeProps.values.password}
                    onBlur={formThreeProps.handleBlur('password')}
                    errorMessage={
                      formThreeProps.touched.password &&
                      formThreeProps.errors.password
                    }
                    toggleVisibility
                  />
                  <CustomInput
                    containerStyle={styles.inputSpacing}
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={formThreeProps.handleChange(
                      'password_confirmation',
                    )}
                    value={formThreeProps.values.password_confirmation}
                    onBlur={formThreeProps.handleBlur('password_confirmation')}
                    errorMessage={
                      formThreeProps.touched.password_confirmation &&
                      formThreeProps.errors.password_confirmation
                    }
                    toggleVisibility
                  />
                  <Button
                    onPress={formThreeProps.handleSubmit}
                    // onPress={changePassword}
                    isLoading={isLoadingThree}
                    containerStyle={styles.continueButton}
                    text="Done"
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
            Password Reset Successful!
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

export default ForgotPassword;
