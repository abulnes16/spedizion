import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from '../../components';

const Register = () => {
  return (
    <DummyHOC iconName="clipboard" text="Register">
      <Text>Here you register</Text>
    </DummyHOC>
  );
};

export default Register;
