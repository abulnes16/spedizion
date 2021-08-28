import { StackScreenProps } from '@react-navigation/stack';

declare global {
  type AuthStackParams = {
    RegisterScreen: undefined;
    LoginScreen: undefined;
  };
}

// Auth Screen Props
export type LoginScreenProps = StackScreenProps<AuthStackParams, 'LoginScreen'>;
export type RegisterScreenProps = StackScreenProps<
  AuthStackParams,
  'RegisterScreen'
>;
