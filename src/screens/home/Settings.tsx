import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from '../../components';

const Settings = () => {
  return (
    <DummyHOC iconName="cog" text="Settings">
      <Text>Here goes the Settings</Text>
    </DummyHOC>
  );
};

export default Settings;
