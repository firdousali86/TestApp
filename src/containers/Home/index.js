import {View, Text} from 'react-native';
import React from 'react';

import {useUserContext} from '../../contexts/UserContext';

export default function Home() {
  const {
    state: {userObject},
  } = useUserContext();

  return (
    <View>
      <Text>{userObject.email}</Text>
    </View>
  );
}
