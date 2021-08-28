import { RouteProp } from '@react-navigation/core';
import { ParamListBase } from '@react-navigation/routers';
import React from 'react';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { APP_SCREENS } from '../constants';

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
