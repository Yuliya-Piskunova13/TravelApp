import { StyleSheet } from 'react-native';

import COLORS from '../../assets/styles/colors';
import { SCREEN_SIZE } from '../../assets/styles/screenSize';
import GLOBAL_FONTS from '../../assets/styles/globalFonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray00,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
    width: 40,
    height: 40,
    backgroundColor: COLORS.gray00,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingTop: 0,
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 116,
  },
  overviewText: {
    paddingBottom: 16,
    paddingHorizontal: 16,
    ...GLOBAL_FONTS.subtitle,
    color: COLORS.gray100,
  },
  hotelImage: {
    width: SCREEN_SIZE.width,
    height: 399,
    marginBottom: 20,
  },
  hotelName: {
    marginBottom: 32,
    color: COLORS.gray100,
    ...GLOBAL_FONTS.title,
    paddingHorizontal: 16,
  },
  hotelDescription: {
    color: COLORS.gray100,
    ...GLOBAL_FONTS.bodyMRegular,
    paddingHorizontal: 16,
  },
  fixed: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 96,
    backgroundColor: COLORS.gray00,
    shadowColor: COLORS.black00,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.84,
    paddingVertical: 16,
    elevation: 5,
  },
  fixedButton: {
    height: 46,
    marginHorizontal: 16,
  },
});

export default styles;
