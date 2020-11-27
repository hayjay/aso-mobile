import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#d2d2d2',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#000000a7',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
});
