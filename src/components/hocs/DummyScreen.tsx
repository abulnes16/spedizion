/*  Dummy High Order Component
    Renders a dummy wrapper to simulate screens
    props:
      - iconName: Name of the icon in the screen
      - text: The screen text
      - children: Aditional JSX Elements
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICON_COLORS } from '../../common/constants';

interface Props {
  iconName: string;
  text: string;
  children: JSX.Element | JSX.Element[];
}

const DummyScreen = ({ iconName, text, children }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={100} color={ICON_COLORS.primary} />
      <Text style={styles.dummyText}>{text}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default DummyScreen;
