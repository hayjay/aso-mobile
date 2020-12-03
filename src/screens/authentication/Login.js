import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import styles from './styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';
import { loginFormSchema } from '../../utils/FormValidationSchema';
import * as authAction from '../../redux/actions/authAction';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const processLogin = async (values) => {
    setIsLoading(true);
    const result = await dispatch(authAction.loginUser(values));
    setIsLoading(false);
    if (result.error) {
      Toast.show({
        type: 'error',
        text1: result.error.message,
      });
      return;
    }
    navigation.navigate('Home');
  };

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
            onSubmit={(values) => processLogin(values)}>
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
                  errorMessage={
                    formProps.touched.email && formProps.errors.email
                  }
                />
                <CustomInput
                  containerStyle={styles.inputBox}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={formProps.handleChange('password')}
                  value={formProps.values.password}
                  onBlur={formProps.handleBlur('password')}
                  errorMessage={
                    formProps.touched.password && formProps.errors.password
                  }
                />
                <Pressable
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <CustomText style={styles.forgotPassword}>
                    Forgot password?
                  </CustomText>
                </Pressable>
                <Button
                  isLoading={isLoading}
                  onPress={formProps.handleSubmit}
                  text="Login"
                />
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
