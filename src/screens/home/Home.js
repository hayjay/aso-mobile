import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';

const HomeScreen = ({ navigation }) => {
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      navigation.navigate('Login');
    }
    console.log('access token', token);
  };

  useEffect(() => {
    loadProfile();
  });

  const featuredProducts = [
    {
      title: '4 Bedroom House For Sale',
      label: '2 days ago',
      price: 'NGN 300M',
      subTitle: '42 Montgomery road, sabo yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      metaItems: [
        {
          icon: 'bed',
          value: '2',
        },
        {
          icon: 'car',
          value: '2',
        },
        {
          icon: 'shower',
          value: '2',
        },
      ],
    },
    {
      title: '4 Bedroom House For Sale',
      label: '2 days ago',
      price: 'NGN 300M',
      subTitle: '42 Montgomery road, sabo yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      metaItems: [
        {
          icon: 'bed',
          value: '2',
        },
        {
          icon: 'car',
          value: '2',
        },
        {
          icon: 'shower',
          value: '2',
        },
      ],
    },
  ];

  const propertiesForSale = [
    {
      lowerTitle: 'Yaba, Lagos',
      label: '2 days ago',
      price: 'NGN 300M',
      subTitle: '1-4 Beds, 1-2 Baths',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      lowerTitle: 'Yaba, Lagos',
      label: '2 days ago',
      price: 'NGN 300M',
      subTitle: '1-4 Beds, 1-2 Baths',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      lowerTitle: 'Yaba, Lagos',
      label: '2 days ago',
      price: 'NGN 300M',
      subTitle: '1-4 Beds, 1-2 Baths',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  const propertyForRent = [
    {
      subTitle: 'Apartment',
      lowerTitle: 'Lekki Phase 1, Lagos',
      label: '2 days ago',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      subTitle: 'Apartment',
      lowerTitle: 'Lekki Phase 1, Lagos',
      label: '2 days ago',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      subTitle: 'Apartment',
      lowerTitle: 'Lekki Phase 1, Lagos',
      label: '2 days ago',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  return (
    <View style={styles.container}>
      <CustomHeader headerLeft="menu" title="Home" />
      <ScrollView>
        <ProductGroup
          data={featuredProducts}
          itemWidth={330}
          horizontal
          title="Featured property"
        />
        <ProductGroup
          data={propertiesForSale}
          itemWidth={170}
          horizontal
          title="Property for sale"
        />
        <ProductGroup
          data={propertyForRent}
          itemWidth={170}
          horizontal
          title="Property for rent"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
