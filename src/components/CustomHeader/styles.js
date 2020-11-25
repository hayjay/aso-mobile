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
    height: '100%',
    alignSelf: 'center',
  },
  homeButtonIcon: {
    color: '#fff',
    fontSize: 30,
  },
  homeButton: {
    paddingRight: 20,
    height: '100%',
    paddingLeft: spaces.appSpacing01,
    marginRight: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
});
