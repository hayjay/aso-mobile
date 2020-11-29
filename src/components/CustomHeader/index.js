import React from 'react';
import { SafeAreaView, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import BackButton from '../BackButton';
import CustomText from '../CustomText';

const CustomHeader = ({
  title,
  headerLeft = 'back',
  headerTitleAlign = 'left',
  headerRightContents = [],
}) => {
  const menuButton = () => {
    return (
      <Pressable style={styles.homeButton}>
        <Ionicons name="md-menu" style={styles.homeButtonIcon} />
      </Pressable>
    );
  };

  const icons = {
    back: () => <BackButton containerStyle={styles.backButton} />,
    menu: menuButton,
    more: <Ionicons name="md-more" style={styles.icon} />,
  };

  const headerLeftContent = icons[headerLeft];

  return (
    <View>
      <StatusBar translucent={false} style="light" backgroundColor="#000" />
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        {headerLeftContent()}
        <CustomText style={styles.title}>{title}</CustomText>
        {headerRightContents.map(({ type, onPress }) => (
          <Pressable onPress={onPress} style={styles.rightButton}>
            {icons[type]}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default CustomHeader;
