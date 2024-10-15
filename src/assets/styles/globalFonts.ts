import { TextStyle } from 'react-native';

type FontStyle = Omit<TextStyle, 'fontSize' | 'lineHeight' | 'fontWeight'> & {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
};

const createFontStyle = (
  fontSize: number,
  lineHeight: number,
  fontFamily: string,
): FontStyle => ({
  fontFamily,
  fontSize,
  lineHeight,
});

const GLOBAL_FONTS = {
  // Title
  title: createFontStyle(22, 32, 'Poppins-SemiBold'),

  // Subtitle
  subtitle: createFontStyle(18, 28, 'Poppins-SemiBold'),

  // Body M Semibold
  bodyMSemibold: createFontStyle(14, 22, 'Poppins-SemiBold'),

  // Body M Medium
  bodyMMedium: createFontStyle(14, 22, 'Poppins-Medium'),

  // Body M Regular
  bodyMRegular: createFontStyle(14, 22, 'Poppins-Regular'),

  // Body S Semibold
  bodySSemibold: createFontStyle(12, 18, 'Poppins-SemiBold'),

  // Body S Medium
  bodySMedium: createFontStyle(12, 18, 'Poppins-Medium'),

  // Body S Regular
  bodySRegular: createFontStyle(12, 18, 'Poppins-Regular'),

  // Tab Bar
  tabBar: createFontStyle(11, 16, 'Poppins-Medium'),
};

export default GLOBAL_FONTS;
