import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ROUTES } from './constants';
import { createStackNavigator } from '@react-navigation/stack';
import HotelDetails from '../modules/HotelDetails';
import TabsNavigator from './TabsNavigator';

const HotelDetailsStack = createStackNavigator();
const StackNavigator = () => (
  <HotelDetailsStack.Navigator initialRouteName={ROUTES.HOTEL_LIST}>
    <HotelDetailsStack.Screen
      name={ROUTES.TABS}
      component={TabsNavigator}
      options={{
        headerShown: false,
      }}
    />
    <HotelDetailsStack.Screen
      component={HotelDetails}
      initialParams={{
        item: null,
      }}
      name={ROUTES.HOTEL_DETAILS}
      options={{
        headerShown: false,
        title: ROUTES.HOTEL_DETAILS
      }}
    />
  </HotelDetailsStack.Navigator>
);

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default NavigationProvider;
