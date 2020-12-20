import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import Avatar from '../../components/Avatar';
import CustomHeader from '../../components/CustomHeader';
import CustomInput from '../../components/CustomInput';
import TextButton from '../../components/TextButton';

const MyProfile = ({ navigation }) => {
  const { userInfo } = useSelector((state) => state.profile.myProfile);

  return (
    <View>
      <CustomHeader title="My Profile" />
      <View style={styles.bannerArea}></View>
      <View style={styles.avatarContainer}>
        <Avatar borderWidth={3} />
        <TextButton
          onPress={() => navigation.navigate('EditProfile')}
          color="grey"
          text="Edit Profile"
          showArrow={false}
        />
      </View>
      <View style={styles.contentContainer}>
        <CustomInput
          containerStyle={styles.input}
          label="Full Name"
          value={userInfo.firstName + ' ' + userInfo.lastName}
          editable={false}
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
          secureTextEntry
          editable={false}
        />
        <CustomInput
          containerStyle={styles.input}
          label="Phone Number"
          value={userInfo.phone_number}
          editable={false}
        />
      </View>
    </View>
  );
};

export default MyProfile;
