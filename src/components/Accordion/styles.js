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
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    paddingTop: 10,
    paddingBottom: 15,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#aaa',
  },
});
