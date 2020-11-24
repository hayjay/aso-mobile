import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { registerFormSchema } from '../../utils/FormValidationSchema';

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          phoneNumber: '',
        }}
        validationSchema={registerFormSchema}
        onSubmit={(values) => {
          console.log('Entered values', values);
        }}>
        {(formProps) => (
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#fff"
                onChangeText={formProps.handleChange('fullName')}
                value={formProps.values.fullName}
                onBlur={formProps.handleBlur('fullName')}
              />
              <Text style={styles.error}>
                {formProps.touched.fullName && formProps.errors.fullName}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={formProps.handleChange('email')}
                value={formProps.values.email}
                onBlur={formProps.handleBlur('email')}
              />
              <Text style={styles.error}>
                {formProps.touched.email && formProps.errors.email}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
                secureTextEntry={true}
                onChangeText={formProps.handleChange('password')}
                value={formProps.values.password}
                onBlur={formProps.handleBlur('password')}
              />
              <Text style={styles.error}>
                {formProps.touched.password && formProps.errors.password}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#fff"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                onChangeText={formProps.handleChange('phoneNumber')}
                value={formProps.values.phoneNumber}
                onBlur={formProps.handleBlur('phoneNumber')}
              />
              <Text style={styles.error}>
                {formProps.touched.phoneNumber && formProps.errors.phoneNumber}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={formProps.handleSubmit}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  button: {
    width: 300,
    backgroundColor: '#738289',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
});

export default RegisterScreen;
