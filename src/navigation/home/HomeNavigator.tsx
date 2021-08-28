import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './HomeTabs';
import { ProfileScreen, SettingsScreen } from '../../screens';

const Drawer = createDrawerNavigator<HomewDrawerParams>();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="RestaurantTabs" component={HomeTabs} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
