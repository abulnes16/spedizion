import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RestaurantsScreen } from '../../screens';
import OrdersTabs from './OrdersTabs';

const IosTab = createBottomTabNavigator<HomeTabsParams>();
const AndroidTab = createMaterialBottomTabNavigator<HomeTabsParams>();

const IosHomeTabs = () => {
  return (
    <IosTab.Navigator>
      <IosTab.Screen name="RestaurantScreen" component={RestaurantsScreen} />
      <IosTab.Screen name="OrdersTabs" component={OrdersTabs} />
    </IosTab.Navigator>
  );
};

const AndroidHomeTabs = () => {
  return (
    <AndroidTab.Navigator>
      <AndroidTab.Screen
        name="RestaurantScreen"
        component={RestaurantsScreen}
      />
      <AndroidTab.Screen name="OrdersTabs" component={OrdersTabs} />
    </AndroidTab.Navigator>
  );
};

const HomeTabs = Platform.OS === 'ios' ? IosHomeTabs : AndroidHomeTabs;

export default HomeTabs;
