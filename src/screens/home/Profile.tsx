import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from '../../components';

const Profile = () => {
  return (
    <DummyHOC iconName="person-circle" text="Profile">
      <Text>Here goes the profile</Text>
    </DummyHOC>
  );
};

export default Profile;
