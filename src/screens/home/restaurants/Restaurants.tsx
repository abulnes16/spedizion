import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from '../../../components';

const Restaurants = () => {
  return (
    <DummyHOC iconName="fast-food" text="Restaurants">
      <Text>Here goes the restaurant list</Text>
    </DummyHOC>
  );
};

export default Restaurants;
