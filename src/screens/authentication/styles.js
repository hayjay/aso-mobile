import { StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: spaces.appSpacing01,
    paddingTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  subTitle: {
    color: colors.grey,
    fontSize: 16,
  },
  socialAuthContainer: {
    marginTop: 40,
    marginBottom: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialAuthButton: {
    width: '47%',
  },
  inputBox: {
    marginBottom: 15,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 40,
    color: colors.grey,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#994D1F',
    fontFamily: 'Roboto-Medium',
    paddingLeft: 10,
  },
  registerIcon: {
    fontSize: 30,
    marginLeft: 5,
    color: '#994D1F',
  },
  mainButton: {
    marginTop: 20,
  },
});
