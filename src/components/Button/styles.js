import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    // backgroundColor: 'pink',
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  icon: {
    fontSize: 28,
    color: '#3b3d3d',
  },
  leftIcon: {
    marginRight: 10,
  },
});
