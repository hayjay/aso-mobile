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

const MyProperties = () => {
  const dispatch = useDispatch();
  const [isSortVisible, setIsSortVisible] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const { myProperties } = useSelector((state) => state.profile.myProperties);
  const properties = myProperties ? myProperties : [];

  useEffect(() => {
    dispatch(profileActions.getMyProperties());
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
