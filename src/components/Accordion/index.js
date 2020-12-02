import React from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CustomText from '../CustomText';
import styles from './styles';

/**
 * @todo: Refactor component to accept body
 */
const Accordion = ({ data = [], containerStyle }) => {
  return (
    <View style={containerStyle}>
      {data.map(({ id, title, onPress }) => (
        <Pressable key={id} style={styles.titleContainer} onPress={onPress}>
          <CustomText style={styles.title}>{title}</CustomText>
          <Ionicons name="ios-arrow-forward" style={styles.arrowIcon} />
        </Pressable>
      ))}
    </View>
  );
};

export default Accordion;
