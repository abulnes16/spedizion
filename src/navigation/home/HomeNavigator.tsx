/* Home Navigator
  Manage the configuration of the home
  navigation workflow
*/

import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './HomeTabs';
import { ProfileScreen, SettingsScreen } from '../../screens';
import { Sidebar } from '../../components';
import { AuthContext } from '../../state/auth';

const Drawer = createDrawerNavigator<HomewDrawerParams>();

const HomeNavigator = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <Sidebar {...props} logout={logout} user={user} />
      )}>
      <Drawer.Screen name="RestaurantTabs" component={HomeTabs} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNavigator;
