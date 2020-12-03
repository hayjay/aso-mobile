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
    lineHeight: 25,
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
  orDivider: {
    marginVertical: 30,
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
  },
  continueButton: {
    marginTop: 50,
    marginBottom: 10,
  },
  topSpacing: {
    marginTop: 60,
  },
  otpContainer: {
    marginTop: 50,
  },
  resend: {
    fontSize: 16,
    textAlign: 'right',
    marginTop: 10,
  },
  boldText: {
    fontFamily: 'Roboto-Medium',
  },
  inputSpacing: {
    marginTop: 20,
  },
  completionModal: {
    margin: 0,
  },
  completionText: {
    textAlign: 'center',
  },
  completionModalContent: {
    backgroundColor: '#fff',
    height: '100%',
    padding: spaces.appSpacing01,
    justifyContent: 'center',
  },
  completionImage: { alignSelf: 'center', marginBottom: 30 },
  closeButton: {
    position: 'absolute',
    top: 30,
    left: 0,
    paddingHorizontal: spaces.appSpacing01,
    paddingVertical: 10,
  },
  closeIcon: {
    fontSize: 30,
  },
});
