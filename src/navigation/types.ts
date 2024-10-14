import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Hotel } from '../modules/Hotels/types';

export type RootStackParamList = {
    Explore: undefined;
    Stadiums: undefined;
    Information: undefined;
    Contacts: undefined;
    HotelList: undefined;
    HotelDetails: { hotel: Hotel };
  };

export type NavigationProp = StackNavigationProp<RootStackParamList>;

export type HotelDetailsRouteProp = RouteProp<
  RootStackParamList,
  'HotelDetails'
>;
