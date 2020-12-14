import { StyleSheet } from 'react-native';
import { colors } from '../../style/variables';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  input: {
    paddingTop: 10,
    paddingBottom: 7,
    fontSize: 16,
    fontFamily: 'Roboto',
    letterSpacing: 0.4,
    flex: 1,
  },
  eyeButton: {
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: colors.red,
    letterSpacing: 0.4,
  },
  searchIcon: {
    marginRight: 5,
  },
  label: {
    color: 'grey',
  },
});
