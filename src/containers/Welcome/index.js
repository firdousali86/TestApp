import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Welcome(props) {
  return (
    <View>
      <Text>welcome</Text>
      <Button
        title={'Start'}
        onPress={() => {
          props.navigation.navigate('login');
        }}
      />
    </View>
  );
}
