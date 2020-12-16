import { StyleSheet } from 'react-native';
import { spaces } from '../../style/variables';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: '#000',
  },
  container: {
    backgroundColor: '#131516',
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButton: {
    paddingLeft: spaces.appSpacing01,
    paddingRight: 20,
    marginRight: 10,
    height: '100%',
    alignSelf: 'center',
  },
  homeButtonIcon: {
    color: '#fff',
    fontSize: 30,
  },
  homeButton: {
    paddingRight: 20,
    height: '100%',
    paddingLeft: spaces.appSpacing01,
    marginRight: 10,
    justifyContent: 'center',
  },
  searchButton: {
    paddingRight: 12,
    paddingLeft: 12,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#131516',
  },
  closeButton: {
    paddingRight: 20,
    height: '100%',
    paddingLeft: spaces.appSpacing01,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#131516',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    flex: 1,
  },
  rightButton: {
    minWidth: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  icon: {
    color: 'white',
    fontSize: 30,
  },
  searchContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: spaces.appSpacing01,
    height: 45,
    borderRadius: 6,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#131516',
  },
  searchResultContainer: {
    zIndex: 10,
  },
  searchResult: {
    backgroundColor: '#fffffff0',
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  searchLoader: {
    marginVertical: 30,
  },
});
