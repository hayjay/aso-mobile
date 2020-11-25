import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './selection.json';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'Icomoon',
  'icomoon.ttf',
);

export default CustomIcon;
