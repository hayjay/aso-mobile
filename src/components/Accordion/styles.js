import { StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

export default StyleSheet.create({
  titleContainer: {
    borderBottomColor: '#aaa',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: spaces.appSpacing01,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    paddingTop: 10,
    paddingBottom: 15,
    color: '#424445',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#aaa',
  },
});
