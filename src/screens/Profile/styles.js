import { StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
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
  image: {
    width: 130,
    height: 130,
    borderRadius: 75,
    position: 'absolute',
    top: 50,
    left: spaces.appSpacing01,
    borderWidth: 4,
    borderColor: '#fff',
  },
  body: {
    marginTop: 50,
    padding: spaces.appSpacing01,
    paddingRight: 0,
  },
});
