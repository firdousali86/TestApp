import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useUserContext} from '../contexts/UserContext';
import {Login, Welcome, Home} from '../containers';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const {
    state: {userObject},
  } = useUserContext();

  const isUserLoggedIn = () => {
    return (
      userObject.email &&
      userObject.email.length > 0 &&
      userObject.password &&
      userObject.password.length > 0
    );
  };

  const [isLoggedIn, setIsUserLoggedIn] = useState(isUserLoggedIn());

  useEffect(() => {
    setIsUserLoggedIn(isUserLoggedIn());
  }, [userObject]);

  const mainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="home" component={Home} />
      </Stack.Group>
    );
  };

  const guestStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>{isLoggedIn ? mainStack() : guestStack()}</Stack.Navigator>
  );
}
