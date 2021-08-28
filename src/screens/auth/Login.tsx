import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LoginScreenProps } from '../../@types/navigation';
import { ICON_COLORS } from '../../common/constants';
import { DummyHOC } from '../../components';
import { AuthContext } from '../../state/auth';

interface Props extends LoginScreenProps {}

const Login = ({ navigation }: Props) => {
  const { login } = useContext(AuthContext);

  return (
    <DummyHOC iconName="log-in" text="Login">
      <Text>Here you Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
        style={{ ...styles.btn, backgroundColor: ICON_COLORS.primary }}>
        <Text style={styles.btnText}>Go to Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={login}
        style={{ ...styles.btn, backgroundColor: ICON_COLORS.primary }}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </DummyHOC>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 10,
  },
  btnText: {
    color: 'white',
  },
});

export default Login;
