import React, { useState } from 'react';
import { View, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import styles from './styles';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import CustomHeader from '../../components/CustomHeader';
import { registerFormSchema } from '../../utils/FormValidationSchema';

import * as authAction from '../../redux/actions/authAction';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const processRegistration = async (values) => {
    setIsLoading(true);
    const result = await dispatch(authAction.registerUser(values));
    setIsLoading(false);
    if (result.error) {
      return Alert.alert('Error!', result.error.message, [{ text: 'Ok' }]);
    }
    Alert.alert('Registration successful!', 'Login to continue', [
      {
        text: 'Ok',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <>
      <CustomHeader title="Register" />
      <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
        <View style={styles.contentContainer}>
          <CustomText style={styles.title}>Hello,</CustomText>
          <CustomText style={styles.subTitle}>
            Please create an account to continue
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
              fullName: '',
              email: '',
              password: '',
              phoneNumber: '',
            }}
            validationSchema={registerFormSchema}
            onSubmit={(values) => processRegistration(values)}>
            {(formProps) => (
              <>
                <CustomInput
                  containerStyle={styles.inputBox}
                  placeholder="Full Name"
                  onChangeText={formProps.handleChange('fullName')}
                  value={formProps.values.fullName}
                  onBlur={formProps.handleBlur('fullName')}
                  errorMessage={
                    formProps.touched.fullName && formProps.errors.fullName
                  }
                />
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
                <CustomInput
                  containerStyle={styles.inputBox}
                  placeholder="Phone Number"
                  keyboardType="number-pad"
                  textContentType="telephoneNumber"
                  autoCompleteType="tel"
                  onChangeText={formProps.handleChange('phoneNumber')}
                  value={formProps.values.phoneNumber}
                  onBlur={formProps.handleBlur('phoneNumber')}
                  errorMessage={
                    formProps.touched.phoneNumber &&
                    formProps.errors.phoneNumber
                  }
                />
                <Button
                  isLoading={isLoading}
                  onPress={formProps.handleSubmit}
                  text="Register"
                  containerStyle={styles.mainButton}
                />
              </>
            )}
          </Formik>
          <Pressable
            onPress={() => navigation.navigate('Login')}
            style={({ pressed }) => [
              styles.registerContainer,
              { opacity: pressed ? 0.7 : 1 },
            ]}>
            <CustomText>Already have an account?</CustomText>
            <CustomText style={styles.registerText}>Login</CustomText>
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

export default RegisterScreen;
