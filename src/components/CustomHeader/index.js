import React from 'react';
import {
  SafeAreaView,
  View,
  Pressable,
  TextInput,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import BackButton from '../BackButton';
import CloseButton from '../CloseButton';
import SearchButton from '../SearchButton';
import CustomText from '../CustomText';
import chair1 from '../../../assets/images/chair1.png';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const CustomHeader = ({
  title,
  headerLeft = 'back',
  headerTitleAlign = 'left',
  headerRightContents = [],
  searchBar,
  searchBarProps,
  onBackButtonPress,
  onCloseButtonPress,
  handleSearchPress,
  onSearchItemPress,
}) => {
  const navigation = useNavigation();

  const iconsColor = searchBar ? 'black' : 'white';
  const menuButton = () => {
    return (
      <Pressable style={styles.homeButton} onPress={navigation.openDrawer}>
        <Ionicons name="md-menu" style={styles.homeButtonIcon} />
      </Pressable>
    );
  };

  const icons = {
    back: () => (
      <BackButton
        onPress={onBackButtonPress}
        iconStyle={searchBar ? { color: iconsColor } : undefined}
        containerStyle={styles.backButton}
      />
    ),
    search: () => (
      <SearchButton
        iconStyle={{ color: '#fff' }}
        containerStyle={styles.searchButton}
      />
    ),
    close: () => (
      <CloseButton
        onPress={onCloseButtonPress}
        iconStyle={searchBar && { color: '#fff' }}
        containerStyle={styles.closeButton}
      />
    ),
    menu: menuButton,
    more: (
      <Ionicons name="md-more" style={[styles.icon, { color: iconsColor }]} />
    ),
  };

  const renderLeftContent = searchBar ? icons.close : icons[headerLeft];
  const renderRightContent = () =>
    headerRightContents.map(({ type, onPress }, index) => {
      return (
        <Pressable
          key={index}
          onPress={onPress}
          style={
            ([styles.rightButton],
            {
              backgroundColor: searchBar && '#131516',
              paddingRight: searchBar ? 0 : 18,
            })
          }>
          {icons[type]}
        </Pressable>
      );
    });

  return (
    <>
      <View>
        <StatusBar translucent={false} style="light" backgroundColor="#000" />
        <SafeAreaView style={styles.safeArea} />
        <View style={styles.container}>
          {searchBar ? (
            <View style={styles.searchContainer}>
              {renderLeftContent()}
              <TextInput
                style={styles.searchInput}
                placeholder={searchBarProps.placeholder}
                onChangeText={searchBarProps.onChangeText}
                value={searchBarProps.value}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              {renderRightContent()}
            </View>
          ) : (
            <>
              {renderLeftContent()}
              <CustomText style={styles.title}>{title}</CustomText>
              {renderRightContent()}
            </>
          )}
        </View>
      </View>

      {searchBarProps?.isSearchEmpty && (
        <View style={styles.emptySearchWrapper}>
          <View style={styles.emptySearch}>
            <Text style={styles.emptySearchText}>
              Search for products, vendors, professionals, agents or lawyers
            </Text>
          </View>
        </View>
      )}

      {!!searchBarProps?.value && (
        <View style={styles.searchResultContainer}>
          <View style={styles.searchResult}>
            {!!searchBarProps?.isLoading && (
              <ActivityIndicator style={styles.searchLoader} />
            )}
            <TouchableOpacity onPress={onSearchItemPress}>
              <View style={styles.searchResultItem}>
                <View style={styles.item}>
                  <Image source={chair1} />
                </View>
                <Text style={styles.itemText}>Living Room furniture</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchItemPress}>
              <View style={styles.searchResultItem}>
                <View style={styles.item}>
                  <Image source={chair1} />
                </View>
                <Text style={styles.itemText}>Bedroom furniture</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchItemPress}>
              <View style={styles.searchResultItem}>
                <View style={styles.item}>
                  <Image source={chair1} />
                </View>
                <Text style={styles.itemText}>Kitchen furniture</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchItemPress}>
              <View style={styles.searchResultItem}>
                <View style={styles.item}>
                  <Image source={chair1} />
                </View>
                <Text style={styles.itemText}>Living Room furniture</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default CustomHeader;
