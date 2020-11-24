import { StyleSheet } from 'react-native';
import { colors } from '../../style/variables';

export default StyleSheet.create({
  input: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 7,
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.4,
  },
  errorMessage: {
    color: colors.red,
    letterSpacing: 0.4,
  },
});
