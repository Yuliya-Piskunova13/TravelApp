import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Stadiums from '../modules/Stadiums';
import Information from '../modules/Information';
import Contacts from '../modules/Contacts';
import ExploreIcon from '../assets/images/explore.svg';
import StadiumsIcon from '../assets/images/stadiums.svg';
import InformationIcon from '../assets/images/information.svg';
import ContactsIcon from '../assets/images/contacts.svg';
import COLORS from '../assets/styles/colors';
import { ROUTES } from './constants';
import GLOBAL_FONTS from '../assets/styles/globalFonts';
import Hotels from '../modules/Hotels';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const getColor = (isFocused: boolean) => {
    return isFocused ? COLORS.primary120 : COLORS.gray60;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary120,
        tabBarInactiveTintColor: COLORS.gray60,
        tabBarLabelStyle: GLOBAL_FONTS.tabBar,
        tabBarStyle: {
          backgroundColor: COLORS.gray00,
        },
      }}>
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={Hotels}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <ExploreIcon color={getColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.STADIUMS}
        component={Stadiums}
        options={{
          tabBarIcon: ({ focused }) => (
            <StadiumsIcon color={getColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.INFORMATION}
        component={Information}
        options={{
          tabBarIcon: ({ focused }) => (
            <InformationIcon color={getColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CONTACTS}
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => (
            <ContactsIcon color={getColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
