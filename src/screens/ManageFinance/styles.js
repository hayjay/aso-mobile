import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  intro: {
    paddingHorizontal: spaces.appSpacing01,
    paddingVertical: 30,
  },
  accordion: {
    paddingLeft: spaces.appSpacing01,
    marginBottom: 20,
  },
});
