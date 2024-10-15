import {StyleSheet} from 'react-native';

import COLORS from '../../../assets/styles/colors';
import GLOBAL_FONTS from '../../../assets/styles/globalFonts';

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.gray00,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
  distanceAndRating:{
   alignItems:'center',
   justifyContent:'space-between',
   flexDirection:'row',
   paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: 245,
  },
  infoContainer: {
    padding: 16,
  },
  distance: {
    alignItems:'center',
    flexDirection:'row',
  },
  distanceText: {
    ...GLOBAL_FONTS.bodySMedium,
    paddingLeft: 4
  },
  hotelName: {
    ...GLOBAL_FONTS.bodyMSemibold,
    color: COLORS.gray100,
    paddingBottom: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: COLORS.primary05,
    height: 22,
    width: 44,
    justifyContent: 'center'
  },
  ratingText: {
    ...GLOBAL_FONTS.bodySMedium,
    color: COLORS.primary120,
    paddingLeft: 4
  },
  source: {
    marginTop: 8,
  },
  button: {
    backgroundColor: COLORS.primary100,
    borderRadius: 32,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    ...GLOBAL_FONTS.bodySSemibold,
    color: COLORS.gray00,
  },
});

export default styles;
