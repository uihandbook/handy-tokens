import { rgba } from 'handy-functions';
import colors from './colors';
import opacity from './opacity';

export default {
  white: colors.white,
  lightest: rgba(colors.white, opacity._3),
  lighter: rgba(colors.white, opacity._5),
  light: rgba(colors.white, opacity._8),
  base: colors.light,

  primary: colors.primary,
  secondary: colors.secondary,
  success: colors.success,
  danger: colors.danger
};
