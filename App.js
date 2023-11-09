/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {UserContextProvider} from './src/contexts/UserContext';
import Navigator from './src/navigator';

function App() {
  const [userObject, setUserObject] = useState(false);

  return (
    <NavigationContainer>
      <UserContextProvider
        userObject={userObject}
        setUserObject={setUserObject}>
        <Navigator />
      </UserContextProvider>
    </NavigationContainer>
  );
}

export default App;
