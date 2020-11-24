import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: '#000',
  },
  container: {
    backgroundColor: '#131516',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButton: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: 20,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
});
