import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
import ProductGroup from '../../components/ProductGroup';
import styles from './styles';
import PlusButton from '../../components/PlusButton';
import Sort from '../../components/Sort';
import * as profileActions from '../../redux/actions/profileAction';

const MyWishlist = () => {
  const dispatch = useDispatch();
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const { myWishlist } = useSelector((state) => state.profile.myWishlist);
  const properties = myWishlist ? myProperties.data : [];

  useEffect(() => {
    dispatch(profileActions.getMyWishlist());
  }, [dispatch]);

  const onBackButtonPress = () => {
    setSearchInputValue('');
  };

  const sortItems = () => {};

  return (
    <View style={styles.container}>
      <CustomHeader
        searchBar
        onBackButtonPress={!!searchInputValue ? onBackButtonPress : undefined}
        searchBarProps={{
          onChangeText: (text) => setSearchInputValue(text),
          placeholder: 'Search property',
          value: searchInputValue,
          isLoading: true,
        }}
        title="search bar"
        headerRightContents={[{ type: 'more', onPress: () => {} }]}
      />
      <PlusButton />
      <ProductGroup
        grid
        data={properties}
        title="My Wishlist"
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

export default MyWishlist;
