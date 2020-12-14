import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: spaces.appSpacing01,
  },
  input: {
    marginBottom: 15,
  },
  bannerArea: {
    height: 80,
    backgroundColor: '#131516',
  },
  avatarContainer: {
    marginTop: -45,
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    marginBottom: 20,
  },
  actionButton: {
    marginBottom: 30,
    marginTop: 20,
  },
  promoArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
