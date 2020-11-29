import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 5,
    paddingLeft: spaces.appSpacing01,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  action: {
    justifyContent: 'center',
  },
  actionText: {
    color: 'grey',
    fontFamily: 'Roboto-Medium',
    paddingHorizontal: 10,
    paddingRight: spaces.appSpacing01,
  },
  featured: {
    marginRight: 10,
    marginBottom: 20,
  },
  scrollViewContainer: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: spaces.appSpacing01 - 10,
  },
});
