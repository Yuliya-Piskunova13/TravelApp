import {StyleSheet} from 'react-native';

import COLORS from '../../assets/styles/colors';
import GLOBAL_FONTS from '../../assets/styles/globalFonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.secondary10,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 18,
    width: 48
  },
  dollarSign: {
    ...GLOBAL_FONTS.bodySSemibold,
  },
});

export default styles;
