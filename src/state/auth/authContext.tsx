/* Auth Context Module */

import { createContext } from 'react';

const initialState: AuthContext = {
  isLogin: false,
  user: '',
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<AuthContext>(initialState);

export default AuthContext;
