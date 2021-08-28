import React, { useContext } from 'react';
import { AuthContext } from '../state/auth';
import AuthNavigator from './auth/AuthNavigator';
import HomeNavigator from './home/HomeNavigator';

const MainNavigator = () => {
  const { isLogin } = useContext(AuthContext);

  if (!isLogin) {
    return <AuthNavigator />;
  }

  return <HomeNavigator />;
};

export default MainNavigator;
