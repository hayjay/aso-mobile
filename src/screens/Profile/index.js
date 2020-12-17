import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '../../components/Accordion';
import CustomHeader from '../../components/CustomHeader';
import CustomText from '../../components/CustomText';
import PlusButton from '../../components/PlusButton';
import styles from './styles';
import * as profileActions from '../../redux/actions/profileAction';

const Profile = ({ navigation }) => {
  const imageSource = {
    uri:
      'https://s3-alpha-sig.figma.com/img/c769/4f4a/db9c6d2ffb011dab05204f453b9f8467?Expires=1607299200&Signature=UTk5lsimJsFrasvr-kuNoRcvdD9ytOYb-o3WWw~k7B2UbqKJTeMY4zVMVDK3ifDW~cntJhsGPNaelJiKVuxM7iL9HP6NsdjhNkbcjfpFry1epbdByQ-u5XlVCcI0P7diK3MjrBBiz1kiZ7b2aHSAR5eOx0XS3bN2fa15AAAqRdfv4dxS52zOq0e6Wby3I5sxRTjpCmLBQ2dexZ45ZXk~R77Fm1QjF04fvZO5-SMzju7cJ4BhHXfAmn~Qxgq4kIeVQJbHVekDmDl-TnzKqSvCJs23Ek3KX2XTIJc-KIbDIHoZX-vuo8ExYKT6Tx8JzsZIr9pGUQMleuZ3RkzM0CTEdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  };

  const menuItems = [
    {
      id: 1,
      title: 'My Properties',
      onPress: () => navigation.navigate('MyProperties'),
    },
    {
      id: 2,
      title: 'My Wishlist',
      onPress: () => navigation.navigate('MyWishlist'),
    },
    {
      id: 3,
      title: 'Manange Finance',
      onPress: () => navigation.navigate('ManageFinance'),
    },
    {
      id: 4,
      title: 'My Profile',
      onPress: () => navigation.navigate('MyProfile'),
    },
  ];

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.profile.myProfile);

  useEffect(() => {
    dispatch(profileActions.getMyProfile());
  }, [dispatch]);

  const headerRightContents = [
    {
      type: 'more',
      onPress: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader title="Profile" headerRightContents={headerRightContents} />
      <View>
        <View style={styles.headTop}>
          <CustomText style={styles.name}>
            {userInfo.firstName + ' ' + userInfo.lastName}
          </CustomText>
        </View>
        <View style={styles.titleArea}>
          <CustomText style={styles.profileTitle}>Real Estate Agent</CustomText>
          <CustomText style={styles.profileSubTitle}>Lagos, Nigeria</CustomText>
        </View>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.body}>
        <Accordion data={menuItems} />
      </View>
      <PlusButton />
    </View>
  );
};

export default Profile;
