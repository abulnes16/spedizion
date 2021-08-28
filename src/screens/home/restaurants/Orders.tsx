import React from 'react';
import { Text } from 'react-native';
import { DummyHOC } from '../../../components';

const Orders = () => {
  return (
    <DummyHOC iconName="basket" text="Orders">
      <Text>Here goes the Orders</Text>
    </DummyHOC>
  );
};

export default Orders;
