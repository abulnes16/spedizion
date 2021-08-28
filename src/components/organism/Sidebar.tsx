import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { ICON_COLORS } from '../../common/constants';
import TouchableIcon from '../atoms/TouchableIcon';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerContentComponentProps {
  logout: () => void;
  user: string;
}

const Sidebar = ({ navigation, logout, user }: Props) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.menuContainer}>
        <Icon
          style={styles.avatar}
          name="person-circle"
          color={ICON_COLORS.primary}
          size={80}
        />
        <Text style={styles.greetings}>Welcome {user}</Text>
        <TouchableIcon
          icon="home"
          text="Home"
          onPress={() => navigation.navigate('RestaurantTabs')}
        />
        <TouchableIcon
          icon="person"
          text="Profile"
          onPress={() => navigation.navigate('ProfileScreen')}
        />

        <TouchableIcon
          icon="cog"
          text="Settings"
          onPress={() => navigation.navigate('SettingsScreen')}
        />

        <TouchableIcon
          icon="log-out"
          text="Logout"
          color="white"
          textColor="white"
          onPress={logout}
          style={{ ...styles.logoutBtn, backgroundColor: ICON_COLORS.primary }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: 'flex-start',
  },
  logoutBtn: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 20,
    alignSelf: 'center',
  },
  greetings: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
  },
  avatar: {
    alignSelf: 'center',
  },
});

export default Sidebar;
