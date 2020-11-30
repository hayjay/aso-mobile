import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';
import * as statesAction from '../../redux/actions/statesAction';
import * as propertyAction from '../../redux/actions/propertyAction';
import * as profileAction from '../../redux/actions/profileAction';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const loadProfile = async () => {
    await dispatch(profileAction.getMyProfile());
  };

  const { states } = useSelector((state) => state.states.states);

  useEffect(() => {
    loadProfile();
    dispatch(statesAction.getNigeriaStates());
    dispatch(propertyAction.getFeaturedProperties());
  }, [dispatch]);

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

  const majorCities = [
    {
      name: 'Abuja',
    },
    {
      name: 'Lagos',
    },
    {
      name: 'Ibadan',
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
          actionButton={{
            text: 'View All',
            onPress: () => {},
          }}
        />
        <ProductGroup
          data={propertiesForSale}
          itemWidth={170}
          horizontal
          title="Property for sale"
          actionButton={{
            text: 'View All',
            onPress: () => {},
          }}
        />
        <ProductGroup
          data={propertyForRent}
          itemWidth={170}
          horizontal
          title="Property for rent"
          actionButton={{
            text: 'View All',
            onPress: () => {},
          }}
        />
        <ProductGroup
          data={majorCities}
          itemWidth={170}
          horizontal
          type="city"
          title="Browse property in major cities"
          actionButton={{
            text: 'View All',
            onPress: () => {
              navigation.navigate('Cities');
            },
          }}
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
