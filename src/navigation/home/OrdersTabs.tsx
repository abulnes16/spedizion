import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HistoricScreen, OrdersScreen } from '../../screens';

const Tab = createMaterialTopTabNavigator();

const OrdersTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Active Orders" component={OrdersScreen} />
      <Tab.Screen name="Historic Orders" component={HistoricScreen} />
    </Tab.Navigator>
  );
};

export default OrdersTabs;
