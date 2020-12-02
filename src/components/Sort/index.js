import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../style/variables';
import Selection from '../Selection';
import CustomText from '../CustomText';

const Sort = ({ isVisible, closeModal = () => {}, onProceed = () => {} }) => {
  const [selectedField, setSelectedField] = useState('');
  const fields = [
    {
      label: 'Uploaded',
    },
    {
      label: 'Acquired',
    },
    {
      label: 'Save date',
    },
    {
      label: 'Highest price',
    },
    {
      label: 'Lowest price',
    },
  ];

  const handlePress = (index) => {
    setSelectedField(fields[index].label);
  };

  const handleApply = () => {
    closeModal();
    onProceed(selectedField);
  };

  return (
    <View>
      <Modal isVisible={isVisible} onBackdropPress={closeModal}>
        <View style={styles.contentContainer}>
          <CustomText style={styles.titleText}>Sort by</CustomText>
          <View style={styles.body}>
            {fields.map((item, index) => (
              <Selection
                key={item.label}
                containerStyle={styles.selectable}
                text={item.label}
                onPress={() => handlePress(index)}
                marked={item.label === selectedField}
              />
            ))}
            <Pressable onPress={handleApply} style={styles.actionButton}>
              <CustomText style={styles.actionText}>Apply</CustomText>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  body: {
    borderTopColor: '#bbb',
    borderTopWidth: 1,
    paddingTop: 20,
  },
  actionButton: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  actionText: {
    color: colors.red,
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  selectable: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 5,
  },
});

export default Sort;
