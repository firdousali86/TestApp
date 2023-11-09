import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useUserContext} from '../../contexts/UserContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    actions: {setUserObject},
  } = useUserContext();

  const handleLoginPress = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        'Invalid Password',
        'Password should be at least 6 characters long.',
      );
      return;
    }

    setUserObject({email, password});
  };

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    return password.length >= 6;
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
        placeholder="Email"
        style={styles.textinput}
      />
      <TextInput
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder="Password"
        style={styles.textinput}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
