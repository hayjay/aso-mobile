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
import { loginFormSchema } from '../../utils/FormValidationSchema';

const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
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
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#fff"
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
              <TouchableOpacity
                style={styles.button}
                onPress={formProps.handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
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

export default LoginScreen;
