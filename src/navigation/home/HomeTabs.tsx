/*  Home Tabs Navigator
   Manage the configuration of the tabs in the
   home navigator
*/

import React from 'react';
import { Platform } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';
import { RestaurantsScreen } from '../../screens';
import OrdersTabs from './OrdersTabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { setIcon, setLabel } from '../../common/helpers';
import { TAB_LABEL } from '../../common/constants';

const IosTab = createBottomTabNavigator<HomeTabsParams>();
const AndroidTab = createMaterialBottomTabNavigator<HomeTabsParams>();

const setMaterialScreenOptions = (
  route: RouteProp<ParamListBase, string>,
): MaterialBottomTabNavigationOptions => ({
  tabBarIcon: props => setIcon(route, props),
  //@ts-ignore
  tabBarLabel: TAB_LABEL[route.name],
});

const setScreenOptions = (
  route: RouteProp<ParamListBase, string>,
): BottomTabNavigationOptions => ({
  tabBarIcon: props => setIcon(route, props),
  tabBarLabel: props => setLabel(route, props),
});

const IosHomeTabs = () => {
  return (
    <IosTab.Navigator screenOptions={({ route }) => setScreenOptions(route)}>
      <IosTab.Screen name="RestaurantScreen" component={RestaurantsScreen} />
      <IosTab.Screen name="OrdersTabs" component={OrdersTabs} />
    </IosTab.Navigator>
  );
};

const AndroidHomeTabs = () => {
  return (
    <AndroidTab.Navigator
      screenOptions={({ route }) => setMaterialScreenOptions(route)}>
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
