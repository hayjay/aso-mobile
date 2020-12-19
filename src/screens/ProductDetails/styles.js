import { StyleSheet } from 'react-native';
import { colors, spaces } from '../../style/variables';

export default StyleSheet.create({
  headerArea: {
    height: 250,
    backgroundColor: '#ccc',
    marginBottom: 40,
  },
  pagination: {
    bottom: -20,
  },
  redText: {
    color: colors.red,
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  headerControls: {
    position: 'absolute',
    width: '100%',
    height: 45,
    flexDirection: 'row',
  },
  backButton: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: 20,
    paddingTop: 20,
  },
  metaItemsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  metaText: {
    color: 'grey',
    fontSize: 16,
  },
  metaIcon: {
    color: 'grey',
    fontSize: 18,
    marginRight: 5,
  },
  location: {
    color: 'grey',
  },
  contentArea: {
    paddingHorizontal: spaces.appSpacing01,
    paddingBottom: 30,
  },
  displayImageBackground: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    marginTop: 20,
  },
  actionButton: {
    marginTop: 20,
    marginBottom: 10,
  },
  featuresButtons: {
    flexDirection: 'row',
  },
  featuresButton: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});
