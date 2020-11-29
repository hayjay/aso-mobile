import { StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

export default StyleSheet.create({
  headTop: {
    backgroundColor: '#131516',
    paddingHorizontal: spaces.appSpacing01,
    paddingBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    marginTop: 70,
    alignSelf: 'flex-end',
    fontFamily: 'Roboto-Medium',
  },
  titleArea: {
    alignSelf: 'flex-end',
    marginRight: spaces.appSpacing01,
    paddingTop: 10,
  },
  profileTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  profileSubTitle: {
    marginTop: 5,
    textAlign: 'center',
    color: colors.grey,
  },
});
