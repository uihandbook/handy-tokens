import { rgba } from 'handy-functions';
import { colors } from './colors';
import opacity from './opacity';

export default {
  white: colors.light_100,
  lightest: rgba(colors.black_100, opacity._8),
  lighter: colors.black_100,
  light: colors.black_500,
  base: colors.black_900
};
