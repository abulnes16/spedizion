/* Navigation Types Module
   Manage all the navigation types of the application
*/
import { StackScreenProps } from '@react-navigation/stack';

declare global {
  type AuthStackParams = {
    RegisterScreen: undefined;
    LoginScreen: undefined;
  };

  type HomeTabsParams = {
    RestaurantScreen: undefined;
    OrdersTabs: undefined;
  };

  type HomewDrawerParams = {
    RestaurantTabs: undefined;
    ProfileScreen: undefined;
    SettingsScreen: undefined;
  };
}

// Auth Screen Props
export type LoginScreenProps = StackScreenProps<AuthStackParams, 'LoginScreen'>;
export type RegisterScreenProps = StackScreenProps<
  AuthStackParams,
  'RegisterScreen'
>;
