import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#d2d2d2',
  },
  label: {
    backgroundColor: '#DA251D',
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    paddingHorizontal: 13,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  blurredArea: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoArea: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  metaItemsContainer: {
    flexDirection: 'row',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7,
  },
  metaText: {
    color: '#fff',
    fontSize: 18,
  },
  metaIcon: {
    color: '#fff',
    fontSize: 18,
    marginRight: 5,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    color: '#5f5f5f',
    fontFamily: 'Roboto-Medium',
    lineHeight: 24,
  },
  subTitle: {
    color: '#7d7d7d',
    lineHeight: 22,
  },
  lowerTitle: {
    color: '#5f5f5f',
    fontFamily: 'Roboto-Medium',
  },
  details: {
    marginTop: 5,
  },
});
