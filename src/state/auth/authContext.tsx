/* Auth Context Module */

import { createContext } from 'react';

const initialState: AuthContext = {
  isLogin: false,
  user: '',
  login: () => {},
};

const AuthContext = createContext<AuthContext>(initialState);

export default AuthContext;
