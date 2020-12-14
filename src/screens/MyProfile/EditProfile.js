import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import styles from './styles';
import Avatar from '../../components/Avatar';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import TextButton from '../../components/TextButton';
import CustomText from '../../components/CustomText';
import Button from '../../components/Button';
import Selection from '../../components/Selection';

const EditProfile = () => {
  const [promoSubActive, setPromoSubActive] = useState(true);
  const toggleSwitch = () =>
    setPromoSubActive((promoSubActive) => !promoSubActive);

  return (
    <>
      <CustomHeader title="Edit Profile" />
      <KeyboardAwareScrollView>
        <View style={styles.bannerArea}></View>
        <View style={styles.avatarContainer}>
          <Avatar borderWidth={3} />
        </View>
        <View style={styles.contentContainer}>
          <CustomText type="info-title" style={styles.title}>
            Account Settings
          </CustomText>
          <CustomInput
            containerStyle={styles.input}
            label="Full Name"
            value="Adejoke Benson"
          />
          <CustomInput
            containerStyle={styles.input}
            label="Emaiil"
            value="AdejokeBenson@gmail."
          />
          <CustomInput
            containerStyle={styles.input}
            label="Password"
            value="password"
            secureTextEntry
            toggleVisibility
          />
          <CustomInput
            containerStyle={styles.input}
            label="Phone Number"
            value="08023242526"
          />
          <CustomText type="info-title" style={styles.title}>
            Notification Settings
          </CustomText>
          <CustomText type="info-body">
            Send me interested listings and searches
          </CustomText>
          <Selection text="In Realtime" />
          <Selection text="Once a day" />
          <Selection text="No, thanks" />
          <View style={styles.promoArea}>
            <CustomText type="info-body">
              Send me promos, tips & guide
            </CustomText>
            <Switch onValueChange={toggleSwitch} value={promoSubActive} />
          </View>
          <Button containerStyle={styles.actionButton} text="Save Profile" />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default EditProfile;
