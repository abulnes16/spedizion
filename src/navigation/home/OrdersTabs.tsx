import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HistoricScreen, OrdersScreen } from '../../screens';

const Tab = createMaterialTopTabNavigator();

const OrdersTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={OrdersScreen} />
      <Tab.Screen name="Settings" component={HistoricScreen} />
    </Tab.Navigator>
  );
};

export default OrdersTabs;
