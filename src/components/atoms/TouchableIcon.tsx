import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICON_COLORS } from '../../common/constants';

interface Props {
  icon: string;
  text: string;
  size?: number;
  color?: string;
  textColor?: string;
  style?: ViewStyle;
  onPress: () => void;
}

const TouchableIcon = ({
  icon,
  text,
  onPress,
  size = 30,
  color = ICON_COLORS.primary,
  textColor = 'black',
  style = {},
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Icon name={icon} size={size} color={color} />
      <Text style={{ ...styles.label, color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    marginLeft: 20,
    fontSize: 25,
  },
});

export default TouchableIcon;
