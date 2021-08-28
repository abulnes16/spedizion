/* Auth Navigator
   Manage the configuration of the screens in the
   authentication workflow
*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../../screens';

const AuthStack = createStackNavigator<AuthStackParams>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
