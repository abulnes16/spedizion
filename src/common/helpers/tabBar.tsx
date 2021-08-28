/* Tab Bar Helpers Module
   Contains functions to create the styling of the
   tab bar navigators
*/

import { RouteProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';
import React from 'react';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { APP_SCREENS } from '../constants';

/**
 * Function that sets an icon for the tab bar
 * @param route Route of the tab bar
 * @param param Related data of the tab bar
 * @returns Icon
 */
export function setIcon(
  route: RouteProp<ParamListBase, string>,
  { color }: { focused: boolean; color: string },
) {
  let iconName = '';
  switch (route.name) {
    case APP_SCREENS.RESTAURANT_SCREEN:
      iconName = 'fast-food';
      break;
    case APP_SCREENS.ORDER_TABS:
      iconName = 'basket';
      break;
    default:
      iconName = 'cog';
      break;
  }
  return <Icon name={iconName} color={color} size={20} />;
}

/**
 * Function that sets a label to be showed in the tab bar navigator
 * @param route Route of the tab bar
 * @param param Params to be used in the label creation
 * @returns Text with the name of the label
 */
export function setLabel(
  route: RouteProp<ParamListBase, string>,
  { color }: { focused: boolean; color: string },
) {
  let label = '';
  switch (route.name) {
    case APP_SCREENS.RESTAURANT_SCREEN:
      label = 'Restaurants';
      break;
    case APP_SCREENS.ORDER_TABS:
      label = 'My Orders';
      break;
  }
  return <Text style={{ color }}>{label}</Text>;
}
