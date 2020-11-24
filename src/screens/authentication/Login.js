import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';

import styles from './styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';
import { loginFormSchema } from '../../utils/FormValidationSchema';

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
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginFormSchema}
            onSubmit={(values) => {
              console.log('Entered values', values);
              props.navigation.navigate('Home');
            }}>
            {(formProps) => (
              <>
                <CustomInput
                  containerStyle={styles.inputBox}
                  placeholder="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="email"
                  onChangeText={formProps.handleChange('email')}
                  value={formProps.values.email}
                  onBlur={formProps.handleBlur('email')}
                />
                <Text style={styles.error}>
                  {formProps.touched.email && formProps.errors.email}
                </Text>
                <CustomInput
                  containerStyle={styles.inputBox}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={formProps.handleChange('password')}
                  value={formProps.values.password}
                  onBlur={formProps.handleBlur('password')}
                />
                <Text style={styles.error}>
                  {formProps.touched.password && formProps.errors.password}
                </Text>
                <CustomText style={styles.forgotPassword}>
                  Forgot password?
                </CustomText>
                <Button text="Login" />
              </>
            )}
          </Formik>
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
