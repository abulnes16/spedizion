import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ICON_COLORS } from '../../common/constants';

interface Props extends DrawerContentComponentProps {
  logout: () => void;
}

const Sidebar = ({ navigation, logout }: Props) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.menuContainer}>
        <Text>Welcome user :D </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('RestaurantTabs')}
          style={styles.btn}>
          <Icon name="home" size={20} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.btn}>
          <Icon name="person" size={20} />
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.btn}>
          <Icon name="cog" size={20} />
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={logout}
          style={[
            styles.btn,
            { ...styles.logoutBtn, backgroundColor: ICON_COLORS.primary },
          ]}>
          <Icon name="log-out" size={20} />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutBtn: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 10,
  },
});

export default Sidebar;
