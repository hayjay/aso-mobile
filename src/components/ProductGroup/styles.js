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
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: spaces.appSpacing01,
  },
  actionText: {
    color: 'grey',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  featured: {
    marginRight: 10,
    marginBottom: 20,
    width: '100%',
  },
  scrollViewContainer: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: spaces.appSpacing01 - 10,
  },
});
