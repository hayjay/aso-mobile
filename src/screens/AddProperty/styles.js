import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  body: {
    paddingHorizontal: spaces.appSpacing01,
    paddingTop: 20,
  },
  halfInputsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  dropdownContainer: {
    height: 40,
    width: '48%',
    marginBottom: 15,
  },
  halfInput: {
    marginBottom: 10,
  },
  actionButton: {
    marginTop: 20,
    marginBottom: 30,
  },
});
