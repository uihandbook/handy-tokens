import { rgba } from 'handy-functions';
import { colors } from './colors';
import opacity from './opacity';

export default {
  transparent: rgba(colors.light_100, opacity._0),
  base: colors.light_700,
  light: rgba(colors.light_700, opacity._8),
  lighter: rgba(colors.light_700, opacity._6),
  lightest: rgba(colors.light_700, opacity._4)
};
