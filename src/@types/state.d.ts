/* State Types Module
   Manage all the state related typing of the app
*/
export {};

declare global {
  interface AuthContext {
    isLogin: boolean;
    user: string;
    login: () => void;
    logout: () => void;
  }
}
