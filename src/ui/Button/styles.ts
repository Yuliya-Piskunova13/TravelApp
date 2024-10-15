import { StyleSheet } from 'react-native';

import COLORS from '../../assets/styles/colors';
import GLOBAL_FONTS from '../../assets/styles/globalFonts';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary100,
    paddingVertical: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    ...GLOBAL_FONTS.bodyMSemibold,
    color: COLORS.gray00,
  },
});

export default styles;
