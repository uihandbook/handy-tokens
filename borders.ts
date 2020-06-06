import { rgba } from 'handy-functions';
import colors from './colors';
import opacity from './opacity';

export default {
  transparent: rgba(colors.light, opacity._0),
  base: rgba(colors.light),
  light: rgba(colors.light, opacity._7),
  lighter: rgba(colors.medium),
  lightest: rgba(colors.light, opacity._1),
  primary: rgba(colors.primary),
  secondary: rgba(colors.secondary),
  danger: rgba(colors.danger),

  hover: {
    transparent: rgba(colors.light, opacity._0),
    base: rgba(colors.light, opacity._8),
    lighter: rgba(colors.light, opacity._6),
    lightest: rgba(colors.light, opacity._3),
    primary: rgba(colors.primary, opacity._8),
    secondary: rgba(colors.secondary, opacity._8),
    danger: rgba(colors.danger, opacity._8)
  }
};
