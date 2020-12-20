import React, { useState } from 'react';
import { View, Switch, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';

import styles from './styles';
import Avatar from '../../components/Avatar';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import CustomText from '../../components/CustomText';
import Button from '../../components/Button';
import SelectionGroup from '../../components/SelectionGroup';
import { editFormSchema } from '../../utils/FormValidationSchema';
import * as profileAction from '../../redux/actions/profileAction';

const EditProfile = ({ navigation }) => {
  const [promoSubActive, setPromoSubActive] = useState(true);
  const toggleSwitch = () =>
    setPromoSubActive((promoSubActive) => !promoSubActive);
  const [selectedListing, setSelectedListing] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.profile.myProfile);

  const listingOptions = [
    {
      value: 'In Realtime',
    },
    {
      value: 'Once a day',
    },
    {
      value: 'No, thanks',
    },
  ];

  const submitEditForm = async (values) => {
    setIsLoading(true);
    const result = await dispatch(profileAction.editProfile(values));
    const notificationResult = await dispatch(
      profileAction.changeNotifications({ promoSubActive, selectedListing }),
    );
    setIsLoading(false);

    if (result.error) {
      Toast.show({
        type: 'error',
        text1: result.error.message,
      });
      return;
    }
    if (notificationResult.error) {
      Toast.show({
        type: 'error',
        text1: notificationResult.error.message,
      });
      return;
    }

    navigation.navigate('MyProfile');
    Toast.show({
      text1: 'Profile updated successfully',
    });
  };

  return (
    <>
      <CustomHeader title="Edit Profile" />
      <KeyboardAwareScrollView>
        <View style={styles.bannerArea}></View>
        <View style={styles.avatarContainer}>
          <Avatar borderWidth={3} />
          <Pressable style={styles.cameraButton}>
            <Ionicons name="md-camera" size={20} color="#fff" />
          </Pressable>
        </View>
        <Formik
          initialValues={{
            fullName: '',
            password: '',
            phoneNumber: '',
            address: 'address',
            in_real_time: 0,
            once_a_day: 0,
            send_promo_info: 0,
          }}
          validationSchema={editFormSchema}
          onSubmit={(values) => submitEditForm(values)}>
          {(formProps) => (
            <View style={styles.contentContainer}>
              <CustomText type="info-title" style={styles.title}>
                Account Settings
              </CustomText>
              <CustomInput
                containerStyle={styles.input}
                label="Full Name"
                placeholder={userInfo.firstName + ' ' + userInfo.lastName}
                onChangeText={formProps.handleChange('fullName')}
                value={formProps.values.fullName}
                onBlur={formProps.handleBlur('fullName')}
                errorMessage={
                  formProps.touched.fullName && formProps.errors.fullName
                }
              />
              <CustomInput
                containerStyle={styles.input}
                label="Emaiil"
                value={userInfo.email}
                editable={false}
              />
              <CustomInput
                containerStyle={styles.input}
                label="Password"
                value="password"
                placeholder="********"
                onChangeText={formProps.handleChange('password')}
                value={formProps.values.password}
                onBlur={formProps.handleBlur('password')}
                errorMessage={
                  formProps.touched.password && formProps.errors.password
                }
                secureTextEntry
                toggleVisibility
              />
              <CustomInput
                containerStyle={styles.input}
                label="Phone Number"
                value=""
                placeholder={userInfo.phone_number}
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                autoCompleteType="tel"
                onChangeText={formProps.handleChange('phoneNumber')}
                value={formProps.values.phoneNumber}
                onBlur={formProps.handleBlur('phoneNumber')}
                errorMessage={
                  formProps.touched.phoneNumber && formProps.errors.phoneNumber
                }
              />
              <CustomText type="info-title" style={styles.title}>
                Notification Settings
              </CustomText>
              <CustomText type="info-body">
                Send me interested listings and searches
              </CustomText>
              <SelectionGroup
                selected={selectedListing.value}
                options={listingOptions}
                onSelect={setSelectedListing}
              />
              <View style={styles.promoArea}>
                <CustomText type="info-body">
                  Send me promos, tips & guide
                </CustomText>
                <Switch onValueChange={toggleSwitch} value={promoSubActive} />
              </View>
              <Button
                containerStyle={styles.actionButton}
                text="Save Profile"
                isLoading={isLoading}
                onPress={formProps.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};

export default EditProfile;
