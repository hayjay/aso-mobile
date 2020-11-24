import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const fontSizes = {};

export const colors = {
  grey: '#717373',
  red: '#CC433D',
};

export const spaces = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 40,
  xxl: 64,

  appSpacing01: (6 * screenWidth) / 100,

  letterMD: 0.4,
};
