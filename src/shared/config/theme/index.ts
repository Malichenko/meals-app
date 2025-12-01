import { palette } from './colors';
import { fontSize, lineHeight } from './font';
import { spacing } from './spacing';

export const theme = {
  palette,
  spacing,
  fontSize,
  lineHeight,
} as const;

export default theme;
