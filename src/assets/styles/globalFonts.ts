import { TextStyle } from 'react-native';

type FontStyle = Omit<TextStyle, 'fontSize' | 'lineHeight' | 'fontWeight'> & {
  fontSize: number;
  lineHeight: number;
  fontWeight: TextStyle['fontWeight'];
};

const createFontStyle = (
  fontSize: number,
  lineHeight: number,
  fontWeight: TextStyle['fontWeight'],
): FontStyle => ({
  fontFamily: 'Poppins',
  fontSize,
  lineHeight,
  fontWeight,
});

const GLOBAL_FONTS = {
  // Title
  title: createFontStyle(22, 32, '600'),

  // Subtitle
  subtitle: createFontStyle(18, 28, '600'),

  // Body M Semibold
  bodyMSemibold: createFontStyle(14, 22, '600'),

  // Body M Medium
  bodyMMedium: createFontStyle(14, 22, '500'),

  // Body M Regular
  bodyMRegular: createFontStyle(14, 22, '400'),

  // Body S Semibold
  bodySSemibold: createFontStyle(12, 18, '600'),

  // Body S Medium
  bodySMedium: createFontStyle(12, 18, '500'),

  // Body S Regular
  bodySRegular: createFontStyle(12, 18, '400'),

  // Tab Bar
  tabBar: createFontStyle(11, 16, '400'),
};

export default GLOBAL_FONTS;
