import React from 'react';
import { StyleSheet } from 'react-native';
import Selection from '../Selection';

const SelectionGroup = ({ options = [], selected, onSelect = () => {} }) => {
  return (
    <>
      {options.map((option) => {
        const { value, label } = option;
        return (
          <Selection
            marked={selected === value}
            text={label || value}
            onPress={() => onSelect(option)}
            containerStyle={styles.selection}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  selection: {
    marginVertical: 5,
  },
});

export default SelectionGroup;
