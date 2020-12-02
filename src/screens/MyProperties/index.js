import React, { useState } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';
import styles from './styles';
import PlusButton from '../../components/PlusButton';
import Sort from '../../components/Sort';

const MyProperties = () => {
  const [isSortVisible, setIsSortVisible] = useState(true);
  const properties = [
    {
      label: '2 days ago',
      price: 'NGN 120M',
      subTitle: '1-4 Beds, 1-2 Baths',
      lowerTitle: 'Yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      label: '2 days ago',
      price: 'NGN 120M',
      subTitle: '1-4 Beds, 1-2 Baths',
      lowerTitle: 'Yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      label: '2 days ago',
      price: 'NGN 120M',
      subTitle: '1-4 Beds, 1-2 Baths',
      lowerTitle: 'Yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      label: '2 days ago',
      price: 'NGN 120M',
      subTitle: '1-4 Beds, 1-2 Baths',
      lowerTitle: 'Yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      label: '2 days ago',
      price: 'NGN 120M',
      subTitle: '1-4 Beds, 1-2 Baths',
      lowerTitle: 'Yaba, Lagos',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/04b0/b1cb/c0924c604555c4917419ad7a46350baf?Expires=1607299200&Signature=e5gx4nMiNqVcyqRYBb8ASyu-LGirnyOSXtMZb9Ql1r0SqFFyuzh-anSWA1yLtOQ54qov1OK7txVbIh8cU-KP3Hy9MeBCJJUGt02VkUeDDnmILAkSg2HQmSyjNxRxdfxQ8wHHEYAO0o8cXemk7GaDtB8gFk4Ntog5u871FWn6sKg2AuluT001pXLON1s1ingJ-zJxD73EUlGlUwQGDnu-fsaxrPGVQnI7LSe5DgQn~r7tCOx68sVwlXfPpp1RpyEuFOM~J1-NwrWn7eERO8oGSZDzK1QUAfTtP-3QPyAc3RqIyhNqbIH7wmMIaqtdn11HXQ57jhmniW0LO4yGKsBCLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  const sortItems = () => {};

  return (
    <View style={styles.container}>
      <CustomHeader
        searchBar
        searchBarProps={{
          onChangeText: () => {},
          placeholder: 'Search property',
        }}
        title="search bar"
        headerRightContents={[{ type: 'more', onPress: () => {} }]}
      />
      <PlusButton />
      <ProductGroup
        grid
        data={properties}
        title="My Properties"
        actionButton={{
          text: 'Sort by',
          onPress: () => setIsSortVisible(true),
          icon: <Ionicons name="md-arrow-dropdown" style={styles.sortButton} />,
        }}
      />
      <Sort
        closeModal={() => setIsSortVisible(false)}
        isVisible={isSortVisible}
        onProceed={sortItems}
      />
    </View>
  );
};

export default MyProperties;
