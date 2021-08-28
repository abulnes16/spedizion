import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from '../../components';

const Login = () => {
  return (
    <DummyHOC iconName="log-in" text="Login">
      <Text>Here you Login</Text>
    </DummyHOC>
  );
};

export default Login;
