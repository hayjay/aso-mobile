import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  modal: {
    margin: 0,
  },
  header: {
    backgroundColor: '#131516',
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  closeButton: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: 10,
  },
  title: {
    color: '#fff',
    marginLeft: 10,
    marginBottom: 0,
  },
  actionButton: {
    marginTop: 20,
  },
  typeSelect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -10,
    marginBottom: 10,
  },
  typeItem: {
    width: '33.33%',
    paddingRight: 10,
    marginBottom: 10,
  },
});
