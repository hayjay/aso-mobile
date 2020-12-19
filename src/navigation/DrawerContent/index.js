import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Pressable, StyleSheet, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { colors, spaces } from '../../style/variables';
import CustomText from '../../components/CustomText';
import Avatar from '../../components/Avatar';

const CustomDrawerContent = (props) => {
  const drawerItems = [
    {
      label: 'Home',
      focused: false,
      onPress: () => props.navigation.navigate('Home'),
    },
    {
      label: 'Buy',
      focused: false,
      onPress: () => props.navigation.navigate('Buy'),
    },
    {
      label: 'Rent',
      focused: false,
      onPress: () => props.navigation.navigate('Rent'),
    },
    {
      label: 'Sell',
      focused: false,
      onPress: () => props.navigation.navigate('AddProperty'),
    },
    {
      label: 'Manage Finance',
      focused: false,
      onPress: () => props.navigation.navigate('ManageFinance'),
    },
    {
      label: 'Home Services',
      focused: false,
      onPress: () => props.navigation.navigate(''),
    },
    {
      label: 'Advertise',
      focused: false,
      onPress: () => props.navigation.navigate(''),
    },
    {
      label: 'Tips & Guide',
      focused: false,
      onPress: () => props.navigation.navigate(''),
    },
    {
      label: 'Privacy Policies',
      focused: false,
      onPress: () => props.navigation.navigate(''),
    },
    {
      label: 'Help & Support',
      focused: false,
      onPress: () => props.navigation.navigate(''),
    },
    {
      label: 'Logout',
      focused: false,
      onPress: async () => {
        await AsyncStorage.setItem('access_token', '');
        await AsyncStorage.setItem('user_info', '');
        props.navigation.navigate('Login');
      },
    },
  ];

  return (
    <DrawerContentScrollView style={styles.container} {...props}>
      <Pressable style={styles.homeButton}>
        <Ionicons name="md-menu" style={styles.homeButtonIcon} />
      </Pressable>
      <View style={styles.infoArea}>
        <Avatar imageUrl="https://s3-alpha-sig.figma.com/img/c769/4f4a/db9c6d2ffb011dab05204f453b9f8467?Expires=1608508800&Signature=RKzlB0jllQS1BWyiT-X4gUaDwYfcFj8-knlGyOvy~JR4eAgHpoYhY2Glxgy3d6BseVnSAyAoT57DL59tGiYiM9qCAE1xf-iREWVJjxlQNdLfc4cz~PywYFCwRwTDBsrCkyP9YReaNewOAGlSWihjwt3HnvZmrGnc50OjpL~~plSuafOHwhPPvJnsNXoGfVD7HRqE0NlLiQqH9SlJNBmB3NM6L0ozxvY0AVbhBWfCNGyoi3phRvKIM3b45hW6al0D~yC~aCZ9SXYbShutkmeZA-v6HyawZqa-kIFdb6ipfzRJ8lKaDJ73u69i7~y1p~sRiK69riNVlXSrpKGMGSxDGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <CustomText style={styles.title}>Adebola Williams</CustomText>
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <CustomText style={styles.actionText}>View Profile</CustomText>
        </Pressable>
      </View>
      {drawerItems.map((item) => (
        <ScrollView>
          <DrawerItem
            key={item.label}
            focused={item.focused}
            activeTintColor="#FFFFFF"
            inactiveTintColor="#cecece"
            activeBackgroundColor="#3F3F3F"
            inactiveBackgroundColor="#3C3B3B"
            labelStyle={styles.label}
            style={[styles.item, item.focused && styles.activeItem]}
            label={item.label}
            onPress={item.onPress}
          />
        </ScrollView>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303030',
  },
  infoArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeButton: {
    paddingLeft: spaces.appSpacing01,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  homeButtonIcon: {
    color: '#fff',
    fontSize: 30,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  actionText: {
    color: '#aaa',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    margin: 10,
  },
  item: {
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0,
    borderLeftColor: 'transparent',
    borderLeftWidth: 3,
  },
  activeItem: {
    borderLeftColor: colors.red,
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default CustomDrawerContent;
