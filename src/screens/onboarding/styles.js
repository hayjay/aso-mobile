import { StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  actionButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  actionButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    paddingHorizontal: spaces.appSpacing01,
    paddingVertical: 10,
  },
  signButtonContainer: {
    paddingHorizontal: spaces.appSpacing01,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signButton: {
    width: '47%',
  },
  actionButtonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  nextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  next: {
    color: colors.red,
  },
  nextArrow: {
    fontSize: 30,
    color: colors.red,
    marginLeft: 10,
  },
  sliderImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'Roboto-Medium',
    color: '#424445',
  },
  whiteTitleText: {
    color: '#fff',
  },
  whiteBodyText: {
    color: '#eee',
  },
  slideContentText: {
    color: '#717373',
    fontSize: 16,
    lineHeight: 25,
  },
  slideContainer: {
    flex: 1,
    paddingHorizontal: spaces.appSpacing01,
    marginBottom: '15%',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  pagination: {
    paddingBottom: 90,
  },
  textContainer: {
    paddingHorizontal: spaces.appSpacing01,
    height: '100%',
    paddingBottom: 160,
  },
});
