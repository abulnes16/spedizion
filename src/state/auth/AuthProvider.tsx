import React, { useState } from 'react';
import AuthContext from './authContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AuthProvider = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');

  const login = () => {
    setIsLogin(true);
    setUser('Angel');
  };

  const logout = () => {
    setIsLogin(false);
    setUser('');
  };

  return (
    <AuthContext.Provider value={{ user, isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
