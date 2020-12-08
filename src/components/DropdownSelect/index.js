import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { spaces } from '../../style/variables';
import CustomText from '../CustomText';

const DropdownSelect = ({ label, data = [], selectedItem, onSelect }) => {
  const [isActive, setIsActive] = useState(false);

  const selectItem = (item) => {
    setIsActive(false);
    onSelect(item);
  };

  return (
    <View>
      <Pressable
        onPress={() => setIsActive(!isActive)}
        style={styles.titleContainer}>
        <CustomText style={styles.title}>{label}</CustomText>
        <Ionicons name="ios-arrow-down" style={styles.arrowIcon} />
      </Pressable>
      {isActive && (
        <View style={styles.dropdown}>
          <View style={styles.dropdownContent}>
            {data.map((item) => (
              <Pressable
                style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
                onPress={() => selectItem(item.value)}>
                <CustomText
                  style={[
                    styles.optionText,
                    selectedItem === item.value ? styles.selectedOptioText : {},
                  ]}>
                  {item.value}
                </CustomText>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#aaa',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#aaa',
  },
  dropdown: {
    width: '100%',
    zIndex: 20,
  },
  dropdownContent: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    elevation: 4,
  },
  optionText: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  selectedOptioText: {
    backgroundColor: '#eee',
  },
});

export default DropdownSelect;
