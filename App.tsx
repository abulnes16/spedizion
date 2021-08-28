import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from './src/components';
import { AuthProvider } from './src/state/auth';

const App = () => {
  return (
    <AuthProvider>
      <DummyHOC iconName="home" text="Start">
        <Text>App Screen</Text>
      </DummyHOC>
    </AuthProvider>
  );
};

export default App;
