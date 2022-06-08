import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { navigate } from './navigator';

import { LoginScreen, RegisterScreen, HomeScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  const { id } = useSelector(state => state.user);

  useEffect(() => {
    if (id !== '' && id !== undefined) {
      navigate('Home');
    }
  }, [id]);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Router;
