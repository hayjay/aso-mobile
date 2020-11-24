import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import styles from './styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';

const LoginScreen = ({ navigation }) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValues;

  return (
    <>
      <CustomHeader title="Login" />
      <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
        <View style={styles.contentContainer}>
          <CustomText style={styles.title}>Welcome Back,</CustomText>
          <CustomText style={styles.subTitle}>
            Please login to your account to continue
          </CustomText>
          <View style={styles.socialAuthContainer}>
            <Button
              iconLeft="facebook"
              type="grey"
              text="FACEBOOK"
              containerStyle={styles.socialAuthButton}
            />
            <Button
              iconLeft="google"
              type="grey"
              text="GOOGLE"
              containerStyle={styles.socialAuthButton}
            />
          </View>
          <CustomInput
            containerStyle={styles.inputBox}
            placeholder="Email"
            value={email}
          />
          <CustomInput
            containerStyle={styles.inputBox}
            placeholder="Password"
            value={password}
          />
          <CustomText style={styles.forgotPassword}>
            Forgot password?
          </CustomText>
          <Button text="Login" />
          <Pressable
            onPress={() => navigation.navigate('Register')}
            style={({ pressed }) => [
              styles.registerContainer,
              { opacity: pressed ? 0.7 : 1 },
            ]}>
            <CustomText>Don't have an account?</CustomText>
            <CustomText style={styles.registerText}>Register</CustomText>
            <Ionicons
              name="ios-arrow-round-forward"
              style={styles.registerIcon}
            />
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;
